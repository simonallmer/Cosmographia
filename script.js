const DOMAINS = {
    "Materia": "The Physical Domain. The realm of atoms, energy, and the tangible world.",
    "Logica": "The Formal Domain. The domain of mathematics, reason, and self-evident truths.",
    "Technica": "The Artificial Domain. The landscape of human ingenuity, from ancient tools to digital systems.",
    "Psyche": "The Internal Domain. The territory of the mind, encompassing emotions, memory, and consciousness.",
    "Societas": "The Inter-Relational Domain. The architecture of human agreement—law, status, and collective value.",
    "Aesthetica": "The Expressive Domain. The study of form, harmony, and the sensory experience of beauty.",
    "Chronos": "The Temporal Domain. The lineage of eras and events, mapping our position in the flow of time."
};

const navigationHistory = [];
let currentHistoryIndex = -1;

document.addEventListener('DOMContentLoaded', () => {
    // Determine start view. If URL has hash, load that. Otherwise Home.
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('embed') === 'true') {
        document.body.classList.add('embed-mode');
    }

    navigateTo('home');
    setupSearch();
    renderSVG();
    updateNavButtons();

    // Update Home Stats
    const count = Object.keys(COSMOGRAPHIA_DATA).length;
    const countEl = document.getElementById('total-concepts-count');
    if (countEl) countEl.textContent = count;
});

function navigateTo(viewId, payload = null) {
    const homeView = document.getElementById('home-view');
    const domainListView = document.getElementById('domain-list-view');
    const domainView = document.getElementById('domain-view');
    const coreView = document.getElementById('core-view');
    const exampleDrawer = document.getElementById('example-drawer');

    const entry = { view: viewId, payload };
    
    if (currentHistoryIndex < navigationHistory.length - 1) {
        navigationHistory.splice(currentHistoryIndex + 1);
    }
    
    const lastEntry = navigationHistory[navigationHistory.length - 1];
    if (!lastEntry || lastEntry.view !== entry.view || lastEntry.payload !== entry.payload) {
        navigationHistory.push(entry);
        currentHistoryIndex = navigationHistory.length - 1;
    }
    updateNavButtons();

    // Hide all
    [homeView, domainListView, domainView, coreView].forEach(v => {
        if (v) v.classList.add('hidden');
    });
    if (exampleDrawer) exampleDrawer.style.display = 'none';

    if (viewId === 'home') {
        homeView.classList.remove('hidden');
        document.getElementById('concept-search').value = '';
        document.getElementById('concept-search').focus();
    } else if (viewId === 'domain-list') {
        document.getElementById('domain-list-view').classList.remove('hidden');
        renderDomainListView();
    } else if (viewId === 'domain') {
        domainView.classList.remove('hidden');
        if (payload) renderDomainView(payload);
    } else if (viewId === 'concept') {
        coreView.classList.remove('hidden');
        if (exampleDrawer) exampleDrawer.style.display = 'block';
        if (payload) loadConcept(payload);
    }
}

function goBack() {
    if (currentHistoryIndex > 0) {
        currentHistoryIndex--;
        const entry = navigationHistory[currentHistoryIndex];
        navigateToDirect(entry.view, entry.payload);
        updateNavButtons();
    }
}

function goForward() {
    if (currentHistoryIndex < navigationHistory.length - 1) {
        currentHistoryIndex++;
        const entry = navigationHistory[currentHistoryIndex];
        navigateToDirect(entry.view, entry.payload);
        updateNavButtons();
    }
}

function navigateToDirect(viewId, payload = null) {
    const homeView = document.getElementById('home-view');
    const domainListView = document.getElementById('domain-list-view');
    const domainView = document.getElementById('domain-view');
    const coreView = document.getElementById('core-view');
    const exampleDrawer = document.getElementById('example-drawer');

    [homeView, domainListView, domainView, coreView].forEach(v => {
        if (v) v.classList.add('hidden');
    });
    if (exampleDrawer) exampleDrawer.style.display = 'none';

    if (viewId === 'home') {
        homeView.classList.remove('hidden');
    } else if (viewId === 'domain-list') {
        document.getElementById('domain-list-view').classList.remove('hidden');
        renderDomainListView();
    } else if (viewId === 'domain') {
        domainView.classList.remove('hidden');
        if (payload) renderDomainView(payload);
    } else if (viewId === 'concept') {
        coreView.classList.remove('hidden');
        if (exampleDrawer) exampleDrawer.style.display = 'block';
        if (payload) loadConcept(payload);
    }
}

function updateNavButtons() {
    const backBtn = document.getElementById('nav-back');
    const fwdBtn = document.getElementById('nav-forward');
    
    if (backBtn) {
        backBtn.style.opacity = currentHistoryIndex > 0 ? '1' : '0.3';
        backBtn.style.pointerEvents = currentHistoryIndex > 0 ? 'auto' : 'none';
    }
    if (fwdBtn) {
        fwdBtn.style.opacity = currentHistoryIndex < navigationHistory.length - 1 ? '1' : '0.3';
        fwdBtn.style.pointerEvents = currentHistoryIndex < navigationHistory.length - 1 ? 'auto' : 'none';
    }
}

function renderDomainListView() {
    const container = document.getElementById('domains-full-list');
    container.innerHTML = '';

    Object.entries(DOMAINS).forEach(([name, desc]) => {
        const card = document.createElement('div');
        card.className = `domain-info-card domain-${name.toLowerCase()}-bg`;
        card.innerHTML = `
            <h3>${name}</h3>
            <p>${desc}</p>
        `;
        card.onclick = () => navigateTo('domain', name);
        container.appendChild(card);
    });
}
function renderDomainView(domainName) {
    const titleEl = document.getElementById('domain-title');
    const descEl = document.getElementById('domain-description');
    const container = document.getElementById('domain-concepts-container');

    if (titleEl) titleEl.textContent = domainName;
    if (descEl) descEl.textContent = DOMAINS[domainName] || "A core field of human knowledge.";

    if (container) {
        container.innerHTML = '';

        // Filter concepts by domain
        const concepts = Object.values(COSMOGRAPHIA_DATA).filter(item =>
            item.relations.map_coordinates.domain === domainName
        );

        concepts.forEach(item => {
            const card = document.createElement('div');
            card.className = `domain-concept-card domain-${domainName.toLowerCase()}-bg`;
            card.innerHTML = `
                <div class="concept-card-label">${item.label}</div>
                <div class="concept-card-genus">${item.genus}</div>
            `;
            card.onclick = () => navigateTo('concept', item.uid);
            container.appendChild(card);
        });
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

/**
 * Scans text for concept labels and wraps them in clickable hierarchy links.
 */
function linkifyText(text) {
    if (!text) return "";
    let result = text;

    // Sort concepts by label length descending to handle potential overlap
    const sortedConcepts = Object.values(COSMOGRAPHIA_DATA).sort((a, b) => b.label.length - a.label.length);

    // We use a simplified regex approach here.
    sortedConcepts.forEach(concept => {
        const label = concept.label;
        const regex = new RegExp(`\\b${label}\\b`, 'g');
        // Simple avoid double-wrapping by checking if already preceded by navigation call
        // (This is a naive check but works for this specific dataset)
        if (!result.includes(`'${concept.uid}'`)) {
            result = result.replace(regex, `<span class="hierarchy-link" onclick="navigateTo('concept', '${concept.uid}')">${label}</span>`);
        }
    });

    return result;
}

function loadConcept(uid) {
    const data = COSMOGRAPHIA_DATA[uid];
    if (!data) return;

    // 1. Header & Genus
    document.querySelector('.concept-id').textContent = uid.split('-').slice(0, 2).join('-').toUpperCase();
    document.getElementById('concept-label').textContent = data.label;
    document.getElementById('genus-value').textContent = data.genus;

    const domainSpan = document.getElementById('domain-value');
    domainSpan.textContent = data.relations.map_coordinates.domain;
    domainSpan.onclick = () => navigateTo('domain', data.relations.map_coordinates.domain);

    // Hierarchy (Parents/Children)
    const hierarchyEl = document.getElementById('concept-hierarchy');
    hierarchyEl.innerHTML = '';

    // Parent
    if (data.relations.parent) {
        const parentData = COSMOGRAPHIA_DATA[data.relations.parent];
        if (parentData) {
            const div = document.createElement('div');
            div.className = 'hierarchy-item';
            div.innerHTML = `
                <span class="subordinate-label">Subordinate to:</span>
                <span class="hierarchy-link" onclick="navigateTo('concept', '${data.relations.parent}')">${parentData.label}</span>
            `;
            hierarchyEl.appendChild(div);
        }
    }

    // Children
    const children = Object.values(COSMOGRAPHIA_DATA).filter(item => item.relations.parent === uid);
    if (children.length > 0) {
        const div = document.createElement('div');
        div.className = 'hierarchy-item';
        div.style.marginTop = '0.5rem';
        div.innerHTML = `
            <span class="subordinate-label">Includes:</span>
            ${children.map(child => `<span class="hierarchy-link" onclick="navigateTo('concept', '${child.uid}')">${child.label}</span>`).join('<span class="hierarchy-separator">/</span>')}
        `;
        hierarchyEl.appendChild(div);
    }

    // 2. Definition
    document.getElementById('definition-text').innerHTML = linkifyText(data.definition.primary_text);

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
            <div>Not a ${linkifyText(ex.target)}</div>
            <span class="exclusion-target">${linkifyText(ex.reason)}</span>
        `;
        exclusionList.appendChild(li);
    });


    // 5. Hierarchy
    const hierarchyList = document.getElementById('hierarchy-list');
    hierarchyList.innerHTML = '';
    if (data.relations.explicit_hierarchy) {
        const div = document.createElement('div');
        div.className = 'hierarchy-display';
        div.innerHTML = linkifyText(data.relations.explicit_hierarchy);
        hierarchyList.appendChild(div);
    }

    // 6. Essential Components
    const essentialList = document.getElementById('essential-list');
    essentialList.innerHTML = '';
    if (data.definition.essential_components) {
        data.definition.essential_components.forEach(comp => {
            const div = document.createElement('div');
            div.className = 'component-item';
            div.innerHTML = `
                <span class="component-name">${comp.name}</span>
                <div class="component-desc">${comp.description}</div>
            `;
            essentialList.appendChild(div);
        });
    }

    // 6. Comparisons
    const comparisonsList = document.getElementById('comparisons-list');
    comparisonsList.innerHTML = '';
    data.relations.comparisons.forEach(comp => {
        const div = document.createElement('div');
        div.className = 'structural-comparison';
        div.innerHTML = `
            <div class="comparison-header">${data.label} vs. ${linkifyText(comp.versus)}</div>
            <div class="comparison-text">${linkifyText(comp.text)}</div>
        `;
        comparisonsList.appendChild(div);
    });

    // 7. Examples
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

    // 8. Cosmograph Rendering
    renderSVG(uid);
}

function toggleDrawer() {
    const drawer = document.getElementById('example-drawer');
    drawer.classList.toggle('open');
}

function renderSVG(uid = null) {
    const stage = document.getElementById('vector-diagram');
    stage.innerHTML = ''; // Clear previous
    if (!uid) return;

    const data = COSMOGRAPHIA_DATA[uid];
    if (!data) return;

    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("width", "300");
    svg.setAttribute("height", "200");
    svg.setAttribute("viewBox", "0 0 300 200");

    const inkPrimary = "#1A1A1A";
    const inkAccent = "#8B0000"; // Oxblood
    const inkFaint = "#8C8C8C";

    let isDefault = false;

    if (uid.includes('technica-book')) {
        // BOOK: Substrate + Binding + n>=49
        const rect = document.createElementNS(svgNS, "rect");
        rect.setAttribute("x", "100"); rect.setAttribute("y", "20");
        rect.setAttribute("width", "100"); rect.setAttribute("height", "140");
        rect.setAttribute("fill", "none"); rect.setAttribute("stroke", inkPrimary);
        rect.setAttribute("stroke-width", "2"); svg.appendChild(rect);

        for (let i = 0; i < 3; i++) {
            const line = document.createElementNS(svgNS, "line");
            line.setAttribute("x1", 110 + (i * 3)); line.setAttribute("y1", "20");
            line.setAttribute("x2", 110 + (i * 3)); line.setAttribute("y2", "160");
            line.setAttribute("stroke", inkAccent); line.setAttribute("stroke-width", "1.5");
            svg.appendChild(line);
        }

        const text = document.createElementNS(svgNS, "text");
        text.setAttribute("x", "150"); text.setAttribute("y", "185");
        text.setAttribute("text-anchor", "middle"); text.setAttribute("fill", inkPrimary);
        text.setAttribute("font-family", "JetBrains Mono"); text.setAttribute("font-size", "12");
        text.textContent = "{ n ≥ 49 }"; svg.appendChild(text);
    }
    else if (uid.includes('metaphor')) {
        // METAPHOR: Circle + Triangle + Dashed Bridge + Star
        const circle = document.createElementNS(svgNS, "circle");
        circle.setAttribute("cx", "100"); circle.setAttribute("cy", "100"); circle.setAttribute("r", "40");
        circle.setAttribute("fill", "none"); circle.setAttribute("stroke", inkPrimary); svg.appendChild(circle);

        const triangle = document.createElementNS(svgNS, "polygon");
        triangle.setAttribute("points", "200,60 240,140 160,140");
        triangle.setAttribute("fill", "none"); triangle.setAttribute("stroke", inkPrimary); svg.appendChild(triangle);

        const bridge = document.createElementNS(svgNS, "path");
        bridge.setAttribute("d", "M 140 100 Q 150 80 160 100");
        bridge.setAttribute("fill", "none"); bridge.setAttribute("stroke", inkAccent);
        bridge.setAttribute("stroke-dasharray", "4"); svg.appendChild(bridge);

        const star = document.createElementNS(svgNS, "path");
        star.setAttribute("d", "M 150 70 L 155 85 L 170 85 L 158 95 L 162 110 L 150 100 L 138 110 L 142 95 L 130 85 L 145 85 Z");
        star.setAttribute("fill", inkAccent); star.setAttribute("opacity", "0.6"); svg.appendChild(star);
    }
    else if (uid.includes('rhythm')) {
        // RHYTHM: Horizontal Line + Vertical Ticks
        const line = document.createElementNS(svgNS, "line");
        line.setAttribute("x1", "50"); line.setAttribute("y1", "100");
        line.setAttribute("x2", "250"); line.setAttribute("y2", "100");
        line.setAttribute("stroke", inkPrimary); svg.appendChild(line);

        const pattern = [0, 20, 40, 70, 90, 110, 150, 170, 190, 220, 240];
        pattern.forEach((x, i) => {
            const tick = document.createElementNS(svgNS, "line");
            tick.setAttribute("x1", 50 + x); tick.setAttribute("y1", "90");
            tick.setAttribute("x2", 50 + x); tick.setAttribute("y2", "110");
            tick.setAttribute("stroke", i % 3 === 0 ? inkAccent : inkFaint);
            tick.setAttribute("stroke-width", i % 3 === 0 ? "2" : "1");
            svg.appendChild(tick);
        });
    }
    else if (uid.includes('melody')) {
        // MELODY: Stepped Line + Peak/Trough Nodes
        const path = document.createElementNS(svgNS, "path");
        const points = [[50, 130], [80, 100], [110, 110], [140, 70], [170, 90], [200, 50], [230, 80], [250, 70]];
        let d = `M ${points[0][0]} ${points[0][1]}`;
        for (let i = 1; i < points.length; i++) {
            d += ` L ${points[i][0]} ${points[i][1]}`;
        }
        path.setAttribute("d", d); path.setAttribute("fill", "none");
        path.setAttribute("stroke", inkFaint); svg.appendChild(path);

        points.forEach((p, i) => {
            const c = document.createElementNS(svgNS, "circle");
            c.setAttribute("cx", p[0]); c.setAttribute("cy", p[1]);
            c.setAttribute("r", "4"); c.setAttribute("fill", i % 2 === 0 ? inkAccent : inkPrimary);
            svg.appendChild(c);
        });
    }
    else if (uid.includes('harmony')) {
        // HARMONY: Vertical Lines + Bracket + Wave
        const xPos = [130, 150, 170];
        const heights = [60, 90, 70];
        xPos.forEach((x, i) => {
            const l = document.createElementNS(svgNS, "line");
            l.setAttribute("x1", x); l.setAttribute("y1", 100 - heights[i] / 2);
            l.setAttribute("x2", x); l.setAttribute("y2", 100 + heights[i] / 2);
            l.setAttribute("stroke", inkPrimary); l.setAttribute("stroke-width", "2");
            svg.appendChild(l);
        });

        const bracket = document.createElementNS(svgNS, "path");
        bracket.setAttribute("d", "M 120 50 L 110 50 L 110 150 L 120 150");
        bracket.setAttribute("fill", "none"); bracket.setAttribute("stroke", inkFaint);
        svg.appendChild(bracket);

        const wave = document.createElementNS(svgNS, "path");
        wave.setAttribute("d", "M 50 100 Q 100 50, 150 100 T 250 100");
        wave.setAttribute("fill", "none"); wave.setAttribute("stroke", inkAccent);
        wave.setAttribute("stroke-width", "2"); wave.setAttribute("opacity", "0.5");
        svg.appendChild(wave);
    }
    else if (uid.includes('beat')) {
        // BEAT: Single Pulsing Pulse
        const c = document.createElementNS(svgNS, "circle");
        c.setAttribute("cx", "150"); c.setAttribute("cy", "100"); c.setAttribute("r", "5");
        c.setAttribute("fill", inkAccent); svg.appendChild(c);

        for (let i = 1; i < 4; i++) {
            const r = document.createElementNS(svgNS, "circle");
            r.setAttribute("cx", "150"); r.setAttribute("cy", "100"); r.setAttribute("r", i * 20);
            r.setAttribute("fill", "none"); r.setAttribute("stroke", inkFaint);
            r.setAttribute("stroke-dasharray", "2"); svg.appendChild(r);
        }
    }
    else if (uid.includes('music')) {
        // MUSIC: Waves + Timeline
        const line = document.createElementNS(svgNS, "line");
        line.setAttribute("x1", "50"); line.setAttribute("y1", "100");
        line.setAttribute("x2", "250"); line.setAttribute("y2", "100");
        line.setAttribute("stroke", inkPrimary); line.setAttribute("stroke-dasharray", "2");
        svg.appendChild(line);

        for (let i = 0; i < 3; i++) {
            const path = document.createElementNS(svgNS, "path");
            const d = `M 50 ${100 + (i * 10 - 10)} Q 100 ${50 + i * 20}, 150 ${100 + i * 10} T 250 100`;
            path.setAttribute("d", d); path.setAttribute("fill", "none");
            path.setAttribute("stroke", i === 1 ? inkAccent : inkFaint);
            svg.appendChild(path);
        }
    }
    else if (uid.includes('beauty')) {
        // BEAUTY: Spiral (approx) + Hex
        const path = document.createElementNS(svgNS, "path");
        path.setAttribute("d", "M 150 100 C 200 50, 250 150, 100 150 S 50 50, 150 50");
        path.setAttribute("fill", "none"); path.setAttribute("stroke", inkAccent);
        path.setAttribute("stroke-width", "2"); svg.appendChild(path);

        const hex = document.createElementNS(svgNS, "polygon");
        hex.setAttribute("points", "150,40 200,70 200,130 150,160 100,130 100,70");
        hex.setAttribute("fill", "none"); hex.setAttribute("stroke", inkFaint);
        svg.appendChild(hex);
    }
    else if (uid === 'lex-0007-love') {
        // LOVE: Overlapping
        const c1 = document.createElementNS(svgNS, "circle");
        c1.setAttribute("cx", "130"); c1.setAttribute("cy", "100"); c1.setAttribute("r", "50");
        c1.setAttribute("fill", "none"); c1.setAttribute("stroke", inkPrimary);
        svg.appendChild(c1);

        const c2 = document.createElementNS(svgNS, "circle");
        c2.setAttribute("cx", "170"); c2.setAttribute("cy", "100"); c2.setAttribute("r", "50");
        c2.setAttribute("fill", "none"); c2.setAttribute("stroke", inkPrimary);
        svg.appendChild(c2);

        const heart = document.createElementNS(svgNS, "path");
        heart.setAttribute("d", "M 150 120 L 140 100 A 10 10 0 1 1 160 100 L 150 120"); // Mini heart in intersection
        heart.setAttribute("fill", inkAccent); svg.appendChild(heart);
    }
    else if (uid.includes('power')) {
        // POWER: Command Arrow + Ripples
        for (let i = 1; i < 5; i++) {
            const ripple = document.createElementNS(svgNS, "circle");
            ripple.setAttribute("cx", "150"); ripple.setAttribute("cy", "100");
            ripple.setAttribute("r", i * 20); ripple.setAttribute("fill", "none");
            ripple.setAttribute("stroke", inkFaint); svg.appendChild(ripple);
        }
        const arrow = document.createElementNS(svgNS, "path");
        arrow.setAttribute("d", "M 150 40 L 150 140 M 130 110 L 150 140 L 170 110");
        arrow.setAttribute("stroke", inkAccent); arrow.setAttribute("stroke-width", "4");
        svg.appendChild(arrow);
    }
    else if (uid.includes('fun')) {
        // FUN: Bubble + Nodes
        const bubble = document.createElementNS(svgNS, "circle");
        bubble.setAttribute("cx", "150"); bubble.setAttribute("cy", "100");
        bubble.setAttribute("r", "70"); bubble.setAttribute("fill", "#F1ECE688");
        bubble.setAttribute("stroke", inkFaint); bubble.setAttribute("stroke-dasharray", "5");
        svg.appendChild(bubble);

        for (let i = 0; i < 5; i++) {
            const x = 110 + Math.random() * 80;
            const y = 60 + Math.random() * 80;
            const node = document.createElementNS(svgNS, "circle");
            node.setAttribute("cx", x); node.setAttribute("cy", y);
            node.setAttribute("r", "4"); node.setAttribute("fill", inkAccent);
            svg.appendChild(node);
        }
    }

    else if (uid.includes('atom')) {
        const nucleus = document.createElementNS(svgNS, "circle");
        nucleus.setAttribute("cx", "150"); nucleus.setAttribute("cy", "100"); nucleus.setAttribute("r", "10");
        nucleus.setAttribute("fill", inkAccent); svg.appendChild(nucleus);
        for (let r of [30, 60]) {
            const orbit = document.createElementNS(svgNS, "circle");
            orbit.setAttribute("cx", "150"); orbit.setAttribute("cy", "100"); orbit.setAttribute("r", r);
            orbit.setAttribute("fill", "none"); orbit.setAttribute("stroke", inkFaint);
            svg.appendChild(orbit);
            const electron = document.createElementNS(svgNS, "circle");
            electron.setAttribute("cx", 150 + r); electron.setAttribute("cy", "100"); electron.setAttribute("r", "4");
            electron.setAttribute("fill", inkPrimary); svg.appendChild(electron);
        }
    }
    else if (uid.includes('molecule')) {
        const nodes = [[150, 60], [100, 140], [200, 140]];
        for (let i = 0; i < nodes.length; i++) {
            for (let j = i + 1; j < nodes.length; j++) {
                const line = document.createElementNS(svgNS, "line");
                line.setAttribute("x1", nodes[i][0]); line.setAttribute("y1", nodes[i][1]);
                line.setAttribute("x2", nodes[j][0]); line.setAttribute("y2", nodes[j][1]);
                line.setAttribute("stroke", inkFaint); svg.appendChild(line);
            }
            const c = document.createElementNS(svgNS, "circle");
            c.setAttribute("cx", nodes[i][0]); c.setAttribute("cy", nodes[i][1]); c.setAttribute("r", "12");
            c.setAttribute("fill", i === 0 ? inkAccent : inkPrimary); svg.appendChild(c);
        }
    }
    else if (uid.includes('variable')) {
        const rect = document.createElementNS(svgNS, "rect");
        rect.setAttribute("x", "120"); rect.setAttribute("y", "70");
        rect.setAttribute("width", "60"); rect.setAttribute("height", "60");
        rect.setAttribute("fill", "none"); rect.setAttribute("stroke", inkPrimary);
        rect.setAttribute("stroke-width", "2"); svg.appendChild(rect);
        const arrow = document.createElementNS(svgNS, "path");
        arrow.setAttribute("d", "M 150 40 L 150 85 M 140 75 L 150 85 L 160 75");
        arrow.setAttribute("stroke", inkAccent); arrow.setAttribute("fill", "none"); svg.appendChild(arrow);
    }
    else if (uid.includes('clock')) {
        const face = document.createElementNS(svgNS, "circle");
        face.setAttribute("cx", "150"); face.setAttribute("cy", "100"); face.setAttribute("r", "60");
        face.setAttribute("fill", "none"); face.setAttribute("stroke", inkPrimary); svg.appendChild(face);
        const h = document.createElementNS(svgNS, "line");
        h.setAttribute("x1", "150"); h.setAttribute("y1", "100"); h.setAttribute("x2", "150"); h.setAttribute("y2", "60");
        h.setAttribute("stroke", inkPrimary); h.setAttribute("stroke-width", "3"); svg.appendChild(h);
        const m = document.createElementNS(svgNS, "line");
        m.setAttribute("x1", "150"); m.setAttribute("y1", "100"); m.setAttribute("x2", "190"); m.setAttribute("y2", "100");
        m.setAttribute("stroke", inkAccent); m.setAttribute("stroke-width", "2"); svg.appendChild(m);
    }
    else if (uid.includes('contrast')) {
        // CONTRAST: Square divided diagonally
        const rect = document.createElementNS(svgNS, "rect");
        rect.setAttribute("x", "75"); rect.setAttribute("y", "25");
        rect.setAttribute("width", "150"); rect.setAttribute("height", "150");
        rect.setAttribute("fill", "none"); rect.setAttribute("stroke", inkPrimary); svg.appendChild(rect);

        const block = document.createElementNS(svgNS, "polygon");
        block.setAttribute("points", "75,175 225,175 75,25");
        block.setAttribute("fill", inkPrimary); svg.appendChild(block);
    }
    else if (uid.includes('texture')) {
        // TEXTURE: 5x5 grid of varied dots
        for (let r = 0; r < 5; r++) {
            for (let c = 0; c < 5; c++) {
                const dot = document.createElementNS(svgNS, "circle");
                const x = 90 + c * 30;
                const y = 40 + r * 30;
                const size = 2 + Math.random() * 6;
                dot.setAttribute("cx", x); dot.setAttribute("cy", y);
                dot.setAttribute("r", size);
                dot.setAttribute("fill", (r + c) % 2 === 0 ? inkAccent : inkPrimary);
                dot.setAttribute("opacity", 0.3 + Math.random() * 0.7);
                svg.appendChild(dot);
            }
        }
    }
    else if (uid.includes('trust')) {
        const p1 = document.createElementNS(svgNS, "rect");
        p1.setAttribute("x", "80"); p1.setAttribute("y", "120"); p1.setAttribute("width", "20"); p1.setAttribute("height", "40");
        p1.setAttribute("fill", inkPrimary); svg.appendChild(p1);
        const p2 = document.createElementNS(svgNS, "rect");
        p2.setAttribute("x", "200"); p2.setAttribute("y", "120"); p2.setAttribute("width", "20"); p2.setAttribute("height", "40");
        p2.setAttribute("fill", inkPrimary); svg.appendChild(p2);
        const bridge = document.createElementNS(svgNS, "path");
        bridge.setAttribute("d", "M 100 120 Q 150 80 200 120");
        bridge.setAttribute("fill", "none"); bridge.setAttribute("stroke", inkAccent);
        bridge.setAttribute("stroke-width", "3"); bridge.setAttribute("stroke-dasharray", "4");
        svg.appendChild(bridge);
    }
    else if (uid.includes('emoticon')) {
        // EMOTICON: Sideways Type Face
        const text = document.createElementNS(svgNS, "text");
        text.setAttribute("x", "150"); text.setAttribute("y", "100");
        text.setAttribute("text-anchor", "middle"); text.setAttribute("dominant-baseline", "middle");
        text.setAttribute("fill", inkPrimary); text.setAttribute("font-family", "Courier New, monospace");
        text.setAttribute("font-size", "70"); text.setAttribute("font-weight", "bold");
        text.setAttribute("transform", "rotate(90, 150, 100)");
        text.textContent = ";P"; svg.appendChild(text);

        const line = document.createElementNS(svgNS, "line");
        line.setAttribute("x1", "100"); line.setAttribute("y1", "150");
        line.setAttribute("x2", "200"); line.setAttribute("y2", "150");
        line.setAttribute("stroke", inkFaint); line.setAttribute("stroke-dasharray", "4");
        svg.appendChild(line);
    }
    else if (uid.includes('emoji')) {
        // EMOJI: Graphical Face
        const face = document.createElementNS(svgNS, "circle");
        face.setAttribute("cx", "150"); face.setAttribute("cy", "100"); face.setAttribute("r", "60");
        face.setAttribute("fill", "none"); face.setAttribute("stroke", inkPrimary);
        face.setAttribute("stroke-width", "2"); svg.appendChild(face);

        // Eyes
        for (let x of [130, 170]) {
            const eye = document.createElementNS(svgNS, "circle");
            eye.setAttribute("cx", x); eye.setAttribute("cy", "80"); eye.setAttribute("r", "4");
            eye.setAttribute("fill", inkPrimary); svg.appendChild(eye);
        }

        // Mouth
        const mouth = document.createElementNS(svgNS, "line");
        mouth.setAttribute("x1", "120"); mouth.setAttribute("y1", "120");
        mouth.setAttribute("x2", "180"); mouth.setAttribute("y2", "120");
        mouth.setAttribute("stroke", inkPrimary); mouth.setAttribute("stroke-width", "2");
        svg.appendChild(mouth);
    }
    else if (uid.includes('kaomoji')) {
        // KAOMOJI: Upright Elaborate (Shrug)
        const text = document.createElementNS(svgNS, "text");
        text.setAttribute("x", "150"); text.setAttribute("y", "100");
        text.setAttribute("text-anchor", "middle"); text.setAttribute("dominant-baseline", "middle");
        text.setAttribute("fill", inkPrimary); text.setAttribute("font-family", "Arial, sans-serif");
        text.setAttribute("font-size", "30");
        text.textContent = "¯\\_(ツ)_/¯"; svg.appendChild(text);

        const accentLine = document.createElementNS(svgNS, "path");
        accentLine.setAttribute("d", "M 80 120 Q 150 160 220 120");
        accentLine.setAttribute("fill", "none"); accentLine.setAttribute("stroke", inkAccent);
        accentLine.setAttribute("stroke-width", "2"); accentLine.setAttribute("stroke-dasharray", "5");
        svg.appendChild(accentLine);
    }
    else if (uid.includes('empathy')) {
        for (let i = 0; i < 2; i++) {
            const wave = document.createElementNS(svgNS, "path");
            const d = i === 0 ? "M 50 100 Q 100 50, 150 100 T 250 100" : "M 50 100 Q 100 150, 150 100 T 250 100";
            wave.setAttribute("d", d); wave.setAttribute("fill", "none");
            wave.setAttribute("stroke", i === 0 ? inkAccent : inkPrimary);
            wave.setAttribute("stroke-width", "2"); svg.appendChild(wave);
        }
    }
    else {
        isDefault = true;
        // DEFAULT: Geometric Abstract
        const rect = document.createElementNS(svgNS, "rect");
        rect.setAttribute("x", "100"); rect.setAttribute("y", "50");
        rect.setAttribute("width", "100"); rect.setAttribute("height", "100");
        rect.setAttribute("fill", "none"); rect.setAttribute("stroke", inkFaint);
        rect.setAttribute("stroke-dasharray", "2"); svg.appendChild(rect);

        const circle = document.createElementNS(svgNS, "circle");
        circle.setAttribute("cx", "150"); circle.setAttribute("cy", "100");
        circle.setAttribute("r", "40"); circle.setAttribute("fill", "none");
        circle.setAttribute("stroke", inkAccent); svg.appendChild(circle);
    }

    // Caption update
    const captionEl = document.querySelector('.diagram-caption');
    if (captionEl) {
        if (isDefault) {
            captionEl.textContent = "Cosmograph coming soon";
        } else if (uid.includes('book')) {
            captionEl.textContent = `Result = [${data.label}]`;
        } else {
            captionEl.textContent = `[${data.label}]`;
        }
    }
    stage.appendChild(svg);
}
