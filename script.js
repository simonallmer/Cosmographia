document.addEventListener('DOMContentLoaded', () => {
    // Determine start view. If URL has hash, load that. Otherwise Home.
    // For this prototype, we'll start at Home.
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('embed') === 'true') {
        document.body.classList.add('embed-mode');
    }

    navigateTo('home');
    setupSearch();
    renderSVG(); // Pre-render SVG or render when needed
});

function navigateTo(viewId, conceptId = null) {
    const homeView = document.getElementById('home-view');
    const coreView = document.getElementById('core-view');

    if (viewId === 'home') {
        homeView.classList.remove('hidden');
        coreView.classList.add('hidden');
        document.getElementById('concept-search').value = '';
        document.getElementById('concept-search').focus();
    } else if (viewId === 'concept') {
        homeView.classList.add('hidden');
        coreView.classList.remove('hidden');
        if (conceptId) loadConcept(conceptId);
    }
}

function setupSearch() {
    const searchInput = document.getElementById('concept-search');
    const resultsContainer = document.getElementById('search-results');

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();

        if (query.length < 1) {
            resultsContainer.style.display = 'none';
            return;
        }

        // Filter concepts
        const matches = Object.values(COSMOGRAPHIA_DATA).filter(item =>
            item.label.toLowerCase().includes(query) ||
            item.uid.includes(query)
        );

        renderSearchResults(matches, resultsContainer);
    });

    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            // Select first match if any
            const query = e.target.value.toLowerCase();
            const matches = Object.values(COSMOGRAPHIA_DATA).filter(item =>
                item.label.toLowerCase().includes(query)
            );
            if (matches.length > 0) {
                navigateTo('concept', matches[0].uid);
            }
        }
    });

    // Hide results when clicking outside
    document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) && !resultsContainer.contains(e.target)) {
            resultsContainer.style.display = 'none';
        }
    });
}

function renderSearchResults(matches, container) {
    container.innerHTML = '';
    if (matches.length === 0) {
        container.style.display = 'none';
        return;
    }

    matches.forEach(match => {
        const div = document.createElement('div');
        div.className = 'search-result-item';
        div.innerHTML = `
            <span>${match.label}</span>
            <span style="font-size: 0.8em; opacity: 0.5">${match.genus}</span>
        `;
        div.onclick = () => {
            navigateTo('concept', match.uid);
            container.style.display = 'none';
        };
        container.appendChild(div);
    });
    container.style.display = 'block';
}

function loadConcept(uid) {
    const data = COSMOGRAPHIA_DATA[uid];
    if (!data) return;

    // 1. Header & Genus
    document.getElementById('concept-label').textContent = data.label;
    document.getElementById('genus-value').textContent = data.genus;

    // 2. Definition
    document.getElementById('definition-text').textContent = data.definition.primary_text;

    // 3. Constraints
    const constraintsContainer = document.getElementById('constraints-active');
    constraintsContainer.innerHTML = '';
    data.definition.logical_constraints.forEach(constriant => {
        const card = document.createElement('div');
        card.className = 'constraint-card';
        card.innerHTML = `
            <span class="constraint-attr">${constriant.attribute}</span>
            <div class="constraint-val">${constriant.value}</div>
            <span class="constraint-fail">→ ${constriant.fail_redirect}</span>
        `;
        constraintsContainer.appendChild(card);
    });

    // 4. Exclusions Sidebar
    const exclusionList = document.getElementById('exclusion-list');
    exclusionList.innerHTML = '';
    data.relations.exclusions.forEach(ex => {
        const li = document.createElement('li');
        li.className = 'exclusion-item';
        li.innerHTML = `
            <div>Not a ${ex.target}</div>
            <span class="exclusion-target">${ex.reason}</span>
        `;
        exclusionList.appendChild(li);
    });

    // 5. Comparisons
    const comparisonsList = document.getElementById('comparisons-list');
    comparisonsList.innerHTML = '';
    data.relations.comparisons.forEach(comp => {
        const div = document.createElement('div');
        div.className = 'structural-comparison';
        div.innerHTML = `
            <div class="comparison-header">${data.label} vs. ${comp.versus}</div>
            <div class="comparison-text">${comp.text}</div>
        `;
        comparisonsList.appendChild(div);
    });

    // 6. Examples
    const exampleList = document.getElementById('example-list');
    exampleList.innerHTML = '';
    data.examples.forEach(ex => {
        const div = document.createElement('div');
        div.className = 'example-card';
        div.innerHTML = `
            <div class="example-title">${ex.title}</div>
            <div class="example-desc">${ex.description}</div>
        `;
        exampleList.appendChild(div);
    });
}

function toggleDrawer() {
    const drawer = document.getElementById('example-drawer');
    drawer.classList.toggle('open');
}

function renderSVG() {
    const stage = document.getElementById('vector-diagram');
    // Simple SVG representation of a Book: Rectangle + Binding Lines + n>=49
    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("width", "300");
    svg.setAttribute("height", "200");
    svg.setAttribute("viewBox", "0 0 300 200");

    // Palette
    const accent = "#00FFAB";
    const primary = "#E0E0E0";

    // 1. Rectangle (The Substrate)
    const rect = document.createElementNS(svgNS, "rect");
    rect.setAttribute("x", "100");
    rect.setAttribute("y", "20");
    rect.setAttribute("width", "100");
    rect.setAttribute("height", "140");
    rect.setAttribute("fill", "none");
    rect.setAttribute("stroke", primary);
    rect.setAttribute("stroke-width", "2");
    svg.appendChild(rect);

    // 2. Intersecting Vertical Lines (The Binding) - Left side heavy
    const lineX = 110;
    const line = document.createElementNS(svgNS, "line");
    line.setAttribute("x1", lineX);
    line.setAttribute("y1", "20");
    line.setAttribute("x2", lineX);
    line.setAttribute("y2", "160");
    line.setAttribute("stroke", accent);
    line.setAttribute("stroke-width", "1");
    svg.appendChild(line);

    const line2 = document.createElementNS(svgNS, "line");
    line2.setAttribute("x1", lineX + 5);
    line2.setAttribute("y1", "20");
    line2.setAttribute("x2", lineX + 5);
    line2.setAttribute("y2", "160");
    line2.setAttribute("stroke", accent);
    line2.setAttribute("stroke-width", "1");
    svg.appendChild(line2);

    // 3. n >= 49 text
    const text = document.createElementNS(svgNS, "text");
    text.setAttribute("x", "150");
    text.setAttribute("y", "180");
    text.setAttribute("text-anchor", "middle");
    text.setAttribute("fill", accent);
    text.setAttribute("font-family", "JetBrains Mono");
    text.setAttribute("font-size", "12");
    text.textContent = "{ n ≥ 49 }";
    svg.appendChild(text);

    // Pages hint
    for (let i = 0; i < 5; i++) {
        const pageLine = document.createElementNS(svgNS, "line");
        pageLine.setAttribute("x1", 195 - (i * 2));
        pageLine.setAttribute("y1", 25 + (i * 1));
        pageLine.setAttribute("x2", 195 - (i * 2));
        pageLine.setAttribute("y2", 155 - (i * 1));
        pageLine.setAttribute("stroke", "#333");
        pageLine.setAttribute("stroke-width", "1");
        svg.appendChild(pageLine);
    }

    stage.appendChild(svg);
}
