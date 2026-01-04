const COSMOGRAPHIA_DATA = {
    "lex-0001-book": {
        "uid": "lex-0001-book",
        "label": "Book",
        "genus": "Physical Information Carrier",
        "definition": {
            "primary_text": "A physical, bound medium consisting of a sequence of pages containing recorded information, distinguished by a minimum volume of 49 pages and a permanent structural union.",
            "logical_constraints": [
                { "attribute": "Materiality", "question": "Is Tangible?", "value": "Yes", "fail_redirect": "Electronic Book" },
                { "attribute": "Unity", "question": "Is Bound?", "value": "Yes", "fail_redirect": "Manuscript / Folder" },
                { "attribute": "Quantity", "question": "Page Count", "value": "≥ 49", "fail_redirect": "Pamphlet" },
                { "attribute": "Frequency", "question": "Periodic?", "value": "No", "fail_redirect": "Magazine / Journal" }
            ],
            "essential_components": [
                { "name": "Substrate", "description": "The physical material (usually paper) that carries the information." },
                { "name": "Binding", "description": "The structural union that holds the pages together as a singular unit." },
                { "name": "Text", "description": "The recorded symbolic information within the vessel." }
            ],
            "visual_construction": "Rectangle + Intersecting Lines + n≥49"
        },
        "relations": {
            "exclusions": [
                { "target": "Electronic Book", "reason": "Lacks Materiality" },
                { "target": "Pamphlet", "reason": "Insufficient Page Count" },
                { "target": "Magazine", "reason": "Periodic Publication" }
            ],
            "comparisons": [
                { "versus": "Codex", "text": "A Codex is the historical ancestor of the Book. While all modern Books are technically codices, the term Book implies contemporary manufacturing and standardization." },
                { "versus": "Scroll", "text": "A Scroll is a continuous substrate; a Book is a sequenced substrate through pages." }
            ],
            "map_coordinates": {
                "domain": "Technica",
                "island": "Information Storage",
                "neighbors": ["Libraries", "Paper", "Printing Press"]
            }
        },
        "examples": [
            { "title": "The Gutenberg Bible (1450s)", "description": "Significant for being the first major book printed using movable type." },
            { "title": "Hardcover Edition of '1984'", "description": "A standard modern industrial book." }
        ]
    },
    "lex-0002-human": {
        "uid": "lex-0002-human",
        "label": "Human",
        "genus": "Biological Sentient Organism",
        "definition": {
            "primary_text": "A mammalian species characterized by bipedalism, complex symbolic language, and the capacity for abstract reasoning and self-reflection.",
            "logical_constraints": [
                { "attribute": "Substrate", "question": "Biological?", "value": "Yes", "fail_redirect": "AI / Automaton" },
                { "attribute": "Cognition", "question": "Symbolic Reasoning?", "value": "Yes", "fail_redirect": "Non-Human Animal" },
                { "attribute": "Stature", "question": "Bipedal?", "value": "Yes", "fail_redirect": "Quadruped" }
            ],
            "essential_components": [
                { "name": "Soma", "description": "The biological body and substrate of existence." },
                { "name": "Psyche", "description": "The internal seat of consciousness and individual experience." },
                { "name": "Logos", "description": "The capacity for reason and symbolic communication." }
            ],
            "visual_construction": "Central Axis + Horizontal Reach + Enclosing Circle"
        },
        "relations": {
            "exclusions": [
                { "target": "Artificial Intelligence", "reason": "Lacks biological substrate." },
                { "target": "Non-Human Animal", "reason": "Lacks symbolic reasoning threshold." }
            ],
            "comparisons": [
                { "versus": "Automaton", "text": "An Automaton mimics human action via Technica but lacks the biological Psyche." },
                { "versus": "Observer", "text": "In this lexicon, the Human is the default Observer from which all other concepts are mapped." }
            ],
            "map_coordinates": {
                "domain": "Materia",
                "island": "Life Forms",
                "neighbors": ["Consciousness", "Language", "Tools"]
            }
        },
        "examples": [
            { "title": "The Individual", "description": "The atomic unit of the Human species." },
            { "title": "Richard Nixon", "description": "The Human as a historical and political node." }
        ]
    },
    "lex-0003-music": {
        "uid": "lex-0003-music",
        "label": "Music",
        "genus": "Auditory Form",
        "definition": {
            "primary_text": "The intentional arrangement of sounds and silences in time. While often incorporating melody and harmony, the essential foundational component of Music is Rhythm—the structured division of time into audible patterns.",
            "logical_constraints": [
                { "attribute": "Intention", "question": "Intentional?", "value": "Yes", "fail_redirect": "Noise / Nature" },
                { "attribute": "Substrate", "question": "Auditory?", "value": "Yes", "fail_redirect": "Visual Art" },
                { "attribute": "Rhythm", "question": "Patterned Time?", "value": "Yes", "fail_redirect": "Monotone / Static" }
            ],
            "essential_components": [
                { "name": "Rhythm", "description": "The essential core: The division of time into patterns. A drum beat alone is Music." },
                { "name": "Melody", "description": "A sequence of single tones perceived as a single entity; the linear 'narrative' of a piece." },
                { "name": "Harmony", "description": "The vertical relationship of sounds; the combination of notes played at the same time." }
            ],
            "visual_construction": "Dashed Timeline + Intersecting Waves + Ascending Triangle"
        },
        "relations": {
            "exclusions": [
                { "target": "Noise", "reason": "Lacks intentional organization." },
                { "target": "Speech", "reason": "Primary function is semantic transfer rather than rhythmic resonance." }
            ],
            "comparisons": [
                { "versus": "Sound", "text": "Sound is the raw Materia; Music is the organized Aesthetica." },
                { "versus": "Mathematics", "text": "Music is often described as mathematics made audible (Logica)." }
            ],
            "map_coordinates": {
                "domain": "Aesthetica",
                "island": "Arts",
                "neighbors": ["Rhythm", "Mathematics", "Instruments"]
            }
        },
        "examples": [
            { "title": "Beethoven’s 5th Symphony", "description": "A pinnacle of complex orchestral form." },
            { "title": "12-Bar Blues", "description": "A foundational structural template for modern music." }
        ]
    },
    "lex-0004-beauty": {
        "uid": "lex-0004-beauty",
        "label": "Beauty",
        "genus": "Perceptual Value",
        "definition": {
            "primary_text": "A quality of an object, idea, or experience that provides intense satisfaction or aesthetic pleasure to the mind, arising from perceived harmony or proportion.",
            "logical_constraints": [
                { "attribute": "Effect", "question": "Aesthetic Pleasure?", "value": "Yes", "fail_redirect": "Neutral / Repellent" },
                { "attribute": "Structure", "question": "Harmonious?", "value": "Yes", "fail_redirect": "Chaos" },
                { "attribute": "Origin", "question": "Perceptual?", "value": "Yes", "fail_redirect": "Inherent Fact" }
            ],
            "essential_components": [
                { "name": "Harmony", "description": "The pleasing arrangement of parts into a coherent whole." },
                { "name": "Proportion", "description": "The balanced relationship between elements (e.g., the Golden Ratio)." },
                { "name": "Resonance", "description": "The deep psychological connection between the object and the observer's Psyche." }
            ],
            "visual_construction": "Golden Spiral + Hexagonal Grid + Resonance Nodes"
        },
        "relations": {
            "exclusions": [
                { "target": "Utility", "reason": "A tool can be useful without being beautiful." },
                { "target": "Truth", "reason": "A fact can be true without possessing aesthetic value." }
            ],
            "comparisons": [
                { "versus": "Symmetry", "text": "Symmetry is a method of achieving Beauty, but not Beauty itself." },
                { "versus": "Sublime", "text": "The Sublime overwhelms the Psyche; Beauty harmonizes with it." }
            ],
            "map_coordinates": {
                "domain": "Aesthetica",
                "island": "Values",
                "neighbors": ["Proportion", "Subjectivity", "Harmony"]
            }
        },
        "examples": [
            { "title": "The Golden Ratio", "description": "A geometric proportion often cited as a blueprint for Beauty." },
            { "title": "Euler’s Identity", "description": "Often called the most beautiful equation in mathematics." }
        ]
    },
    "lex-0005-coolness": {
        "uid": "lex-0005-coolness",
        "label": "Coolness",
        "genus": "Social Signal of Detachment",
        "definition": {
            "primary_text": "A calibrated display of indifference toward externally imposed social pressures, signaling high status through perceived autonomy and the absence of visible effort.",
            "logical_constraints": [
                { "attribute": "Effort", "question": "Visible Striving?", "value": "No", "fail_redirect": "Trying hard" },
                { "attribute": "Status", "question": "Social Value?", "value": "High", "fail_redirect": "Outsider" },
                { "attribute": "Affect", "question": "Composed?", "value": "Yes", "fail_redirect": "Unstable" }
            ],
            "essential_components": [
                { "name": "Detachment", "description": "The visible insulation from external social anxiety or pressure." },
                { "name": "Autonomy", "description": "The signal that one's actions are governed purely by internal will." },
                { "name": "Calibrated Poise", "description": "The aesthetic presentation of competence without visible striving." }
            ],
            "visual_construction": "Vertical Pillar + Chaotic Swirls + Horizon Line"
        },
        "relations": {
            "exclusions": [
                { "target": "Apathy", "reason": "Apathy is a lack of care; Coolness is selective control of care." },
                { "target": "Popularity", "reason": "Popularity is quantitative; Coolness is qualitative presence." }
            ],
            "comparisons": [
                { "versus": "Charisma", "text": "Charisma pulls others in; Coolness keeps others at a calibrated distance." },
                { "versus": "Stoicism", "text": "Stoicism is an internal discipline; Coolness is an external aesthetic signal." }
            ],
            "map_coordinates": {
                "domain": "Societas",
                "island": "Status Markers",
                "neighbors": ["Autonomy", "Fashion", "Power"]
            }
        },
        "examples": [
            { "title": "Miles Davis", "description": "An archetype of 20th-century musical and social coolness." },
            { "title": "Minimalist Design", "description": "Objects that refuse to plead for the viewer's attention." }
        ]
    },
    "lex-0006-fun": {
        "uid": "lex-0006-fun",
        "label": "Fun",
        "genus": "Affective Play-State",
        "definition": {
            "primary_text": "A transient neurological state of high-engagement and low-consequence, characterized by the experimental manipulation of variables within a defined system.",
            "logical_constraints": [
                { "attribute": "Consequence", "question": "Serious Stakes?", "value": "No", "fail_redirect": "Work" },
                { "attribute": "Engagement", "question": "Passive?", "value": "No", "fail_redirect": "Boredom" },
                { "attribute": "Discovery", "question": "Novelty?", "value": "Yes", "fail_redirect": "Repetition" }
            ],
            "essential_components": [
                { "name": "Play-Field", "description": "A defined system with low stakes where experimentation is safe." },
                { "name": "Flow", "description": "The state of deep immersion where challenge matches the observer's capacity." },
                { "name": "Dopaminergic Reward", "description": "The metabolic feedback for successful learning or model-testing." }
            ],
            "visual_construction": "Scattered Nodes + Zig-zag Vectors + Translucent Bubble"
        },
        "relations": {
            "exclusions": [
                { "target": "Joy", "reason": "Joy is lasting; Fun is metabolic and immediate." },
                { "target": "Leisure", "reason": "Leisure is absence of work; Fun is presence of play." }
            ],
            "comparisons": [
                { "versus": "Play", "text": "Play is the action (Technica); Fun is the resulting state (Psyche)." },
                { "versus": "Entertainment", "text": "Entertainment is consumed passivly; Fun requires active generation." }
            ],
            "map_coordinates": {
                "domain": "Psyche",
                "island": "Emotions",
                "neighbors": ["Games", "Learning", "Dopamine"]
            }
        },
        "examples": [
            { "title": "Puzzles", "description": "High engagement with zero survival consequence." },
            { "title": "Improvisation", "description": "The fun of testing linguistic or musical models in real-time." }
        ]
    },
    "lex-0007-love": {
        "uid": "lex-0007-love",
        "label": "Love",
        "genus": "Integrative Connection Force",
        "definition": {
            "primary_text": "A profound state of identification with another entity that necessitates the voluntary sacrifice of self-interest for the well-being of the 'Other.' This force manifests in four archetypal Greek forms: Eros, Philia, Storge, and Agape.",
            "logical_constraints": [
                { "attribute": "Sacrifice", "question": "Self-Interest sacrificed?", "value": "Yes", "fail_redirect": "Transaction / Infatuation" },
                { "attribute": "Duration", "question": "Sustained?", "value": "Yes", "fail_redirect": "Impulse" },
                { "attribute": "Archetype", "question": "Is Eros/Philia/Storge/Agape?", "value": "Yes", "fail_redirect": "Indifference" }
            ],
            "essential_components": [
                { "name": "Sacrifice", "description": "The essential hallmark: The willing abandonment of the solitary self for the other." },
                { "name": "Identification", "description": "The psychological collapse where the other's well-being is felt as one's own." },
                { "name": "Archetypal Forms", "description": "The specific mode of connection: Eros (Romance), Philia (Friendship), Storge (Family), or Agape (Universal)." }
            ],
            "visual_construction": "Overlapping Circles + Gravity Arrows + Permeable Border"
        },
        "relations": {
            "exclusions": [
                { "target": "Lust", "reason": "Lust is for acquisition; Love is for integration through sacrifice." },
                { "target": "Duty", "reason": "Duty is external obligation; Love is internal compulsion." }
            ],
            "comparisons": [
                { "versus": "Empathy", "text": "Empathy understands the other; Love identifies as the other." },
                { "versus": "Liking", "text": "Liking is a preference; Love is a commitment transcending preference." }
            ],
            "map_coordinates": {
                "domain": "Psyche",
                "island": "Connections",
                "neighbors": ["Family", "Empathy", "Altruism"]
            }
        },
        "examples": [
            { "title": "Agape", "description": "Unconditional, universal love often requiring the highest form of sacrifice." },
            { "title": "Storge", "description": "The natural, instinctual bond found in family structures." }
        ]
    },
    "lex-0008-occupation": {
        "uid": "lex-0008-occupation",
        "label": "Occupation",
        "genus": "Social Role / System Function",
        "definition": {
            "primary_text": "A specialized, sustained activity through which an individual contributes to the maintenance of a social system in exchange for status or resources.",
            "logical_constraints": [
                { "attribute": "Sustainability", "question": "Sustained?", "value": "Yes", "fail_redirect": "Task" },
                { "attribute": "Utility", "question": "Social benefit?", "value": "Yes", "fail_redirect": "Hobby" },
                { "attribute": "Identity", "question": "Internalized?", "value": "Yes", "fail_redirect": "Labor" }
            ],
            "essential_components": [
                { "name": "Social Interface", "description": "The point of connection between individual skill (Technica) and collective need." },
                { "name": "Exchange", "description": "The reciprocal flow of energy for status, currency, or survival assets." },
                { "name": "Specialization", "description": "The refinement of action into a professionalized and recordable role." }
            ],
            "visual_construction": "Gear Circle + Central Square + Interface Arrows"
        },
        "relations": {
            "exclusions": [
                { "target": "Hobby", "reason": "A hobby is for internal reward; an occupation is for external exchange." },
                { "target": "Labor", "reason": "Labor is raw energy; Occupation is the structured role that energy fills." }
            ],
            "comparisons": [
                { "versus": "Vocation", "text": "An Occupation is a social role; a Vocation is a 'calling' (Psyche)." },
                { "versus": "Task", "text": "A task is a temporary action; an occupation is a continuous identity." }
            ],
            "map_coordinates": {
                "domain": "Societas",
                "island": "Economy",
                "neighbors": ["Status", "Labor", "Value"]
            }
        },
        "examples": [
            { "title": "Blacksmith", "description": "An archetype of the pre-industrial specialized occupation." },
            { "title": "Software Engineer", "description": "A modern occupation maintaining digital systems." }
        ]
    },
    "lex-0009-power": {
        "uid": "lex-0009-power",
        "label": "Power",
        "genus": "Agency Potentiator",
        "definition": {
            "primary_text": "The capacity of an entity to influence, command, or determine the behavior of other entities or the state of the system itself. Effective Power ($P_e$) is calculated as Authority ($A$) times Resources ($R$) divided by Systemic Friction ($f$).",
            "logical_constraints": [
                { "attribute": "Effect", "question": "Causes change?", "value": "Yes", "fail_redirect": "Influence" },
                { "attribute": "Source", "question": "Validated?", "value": "Yes", "fail_redirect": "Chance" },
                { "attribute": "Scope", "question": "Extends beyond self?", "value": "Yes", "fail_redirect": "Autonomy" }
            ],
            "essential_components": [
                { "name": "Agency", "description": "The capacity to act and exert influence on the environment." },
                { "name": "Return on Interaction (ROI)", "description": "The observable distortion of the social grid by the entity's will; the velocity of impact." },
                { "name": "Friction Handling", "description": "The ability to enact change despite opposing forces or systemic resistance (Constitutional, Social, or Regulatory)." }
            ],
            "visual_construction": "Command Arrow + Grid Ripples + Radial Distortion + Friction Grids"
        },
        "relations": {
            "exclusions": [
                { "target": "Authority", "reason": "Authority is the legal right (Formal); Power is the actual capacity (Action)." },
                { "target": "Strength", "reason": "Strength is physical (Materia); Power is relational (Societas)." }
            ],
            "comparisons": [
                { "versus": "Influence", "text": "Influence suggests; Power determines." },
                { "versus": "Wealth", "text": "Wealth is a storage of Power (Resources); it is not the act of Power itself." },
                { "versus": "Modes of Agency", "text": "Power ranges from Formal (De Jure) to Actual (De Facto). Vested Power is the intersection of high legitimacy and high ROI." }
            ],
            "map_coordinates": {
                "domain": "Societas",
                "island": "Politics",
                "neighbors": ["Authority", "Wealth", "Control"]
            }
        },
        "examples": [
            { "title": "The Tech CEO", "description": "High ROI power; Can pivot billions in capital with a single memo." },
            { "title": "The Constitutional Monarch", "description": "High Formal Authority but High Friction; limited operational agency." },
            { "title": "The Vested Mayor", "description": "Legitimate formal status combined with significant local resource control." }
        ]
    },
    "lex-0010-tourism": {
        "uid": "lex-0010-tourism",
        "label": "Tourism",
        "genus": "Geo-Relational Interaction",
        "definition": {
            "primary_text": "The temporary displacement of an entity from its primary residence to a distant node for the consumption of experience or novelty. Measured by the True Gravity Index (TGI) which prioritizes effort and 'pull' over political borders.",
            "logical_constraints": [
                { "attribute": "Duration", "question": "Temporary?", "value": "Yes", "fail_redirect": "Migration" },
                { "attribute": "Volition", "question": "Voluntary?", "value": "Yes", "fail_redirect": "Exile" },
                { "attribute": "Effort", "question": "Crosses 3,000km floor?", "value": "Yes", "fail_redirect": "Local Recreation" }
            ],
            "essential_components": [
                { "name": "Gravity (Pull)", "description": "The inherent desirability of a destination node that overcomes the friction of distance." },
                { "name": "Effort (Gravity Debt)", "description": "The energy expended (time, currency) to bridge the gap between origin and node." },
                { "name": "Novelty", "description": "The degree of difference (cultural or systemic) between origin and destination." }
            ],
            "visual_construction": "Concentric Rings + Gravity Thresholds + Bending Grid Lines"
        },
        "relations": {
            "exclusions": [
                { "target": "Migration", "reason": "Tourism requires the intent to return." },
                { "target": "Commuting", "reason": "Commuting is functional and local; Tourism is experiential and long-haul." }
            ],
            "comparisons": [
                { "versus": "The Sovereignty Paradox", "text": "Traditional metrics ignore distance (NYC to Hawaii) but count short borders (Vienna to Bratislava). TGI fixes this." },
                { "versus": "Neighbor Noise", "text": "TGI excludes adjacent countries with land/bridge borders to find 'Pure' tourism pull." }
            ],
            "map_coordinates": {
                "domain": "Societas",
                "island": "Global Interaction",
                "neighbors": ["Logistics", "Culture", "Geography"]
            }
        },
        "examples": [
            { "title": "London / Paris / New York", "description": "Ultimate 'Magnet Cities' pulling massive volume from all continents simultaneously." },
            { "title": "Honolulu / Sydney", "description": "Point Kings: high average distance per visitor indicates pure 'Gravity' pull." },
            { "title": "Tokyo", "description": "Highest-ranked city with a pure arrival base (no land borders, high average distance)." }
        ]
    },
    "lex-0011-entropy": {
        "uid": "lex-0011-entropy",
        "label": "Entropy",
        "genus": "Thermodynamic Property",
        "definition": {
            "primary_text": "The measure of disorder or randomness in a system; the thermodynamic inevitable trend towards equilibrium and decay.",
            "logical_constraints": [
                { "attribute": "Directionality", "question": "Does it increase?", "value": "Yes", "fail_redirect": "Closed/Ideal system" },
                { "attribute": "Order", "question": "Is disorder increasing?", "value": "Yes", "fail_redirect": "Crystallization" },
                { "attribute": "Substrate", "question": "Is it physical?", "value": "Yes", "fail_redirect": "Intellectual Concept" }
            ],
            "essential_components": [
                { "name": "Randomness", "description": "The lack of pattern or predictable structure." },
                { "name": "Equilibrium", "description": "The final state of maximum entropy where no further energy exchange is possible." },
                { "name": "Decay", "description": "The process of breakdown from high-order states to low-order states." }
            ],
            "visual_construction": "Dispersing Points + Fading Gradient"
        },
        "relations": {
            "exclusions": [
                { "target": "Chaos", "reason": "Chaos can have hidden order; Entropy is the loss of all order." },
                { "target": "Information", "reason": "Information is the inverse of Entropy (Negentropy)." }
            ],
            "comparisons": [
                { "versus": "Energy", "text": "Energy is the capacity for work; Entropy is the measure of energy that can no longer do work." },
                { "versus": "Time", "text": "Entropy provides the 'Arrow of Time' in physics." }
            ],
            "map_coordinates": {
                "domain": "Materia",
                "island": "Physics",
                "neighbors": ["Energy", "Time", "Chaos"]
            }
        },
        "examples": [
            { "title": "Coffee Cooling", "description": "A cup of coffee cooling down to room temperature." },
            { "title": "Heat Death", "description": "The theoretical end-state of the universe." }
        ]
    },
    "lex-0012-sovereignty": {
        "uid": "lex-0012-sovereignty",
        "label": "Sovereignty",
        "genus": "Political Authority",
        "definition": {
            "primary_text": "The supreme authority and power of a state or entity to govern itself and determine its own destiny without external interference.",
            "logical_constraints": [
                { "attribute": "Authority", "question": "Is it supreme?", "value": "Yes", "fail_redirect": "Subsidiary" },
                { "attribute": "Autonomy", "question": "Is it self-governing?", "value": "Yes", "fail_redirect": "Puppet State" },
                { "attribute": "Recognition", "question": "Is it acknowledged?", "value": "Usually", "fail_redirect": "De Facto Sovereignty" }
            ],
            "essential_components": [
                { "name": "Jurisdiction", "description": "The defined territory or scope of authority." },
                { "name": "Legitimacy", "description": "The internal or external validation of the right to rule." },
                { "name": "Monopoly on Force", "description": "The exclusive right to use physical force within its jurisdiction." }
            ],
            "visual_construction": "Walled Circle + Central Star + Outward Arrows"
        },
        "relations": {
            "exclusions": [
                { "target": "Power", "reason": "Power can be exerted without sovereignty; Sovereignty requires the formal claim to ultimate authority." },
                { "target": "Freedom", "reason": "An individual is free; a state is sovereign." }
            ],
            "map_coordinates": {
                "domain": "Societas",
                "island": "Politics",
                "neighbors": ["Power", "State", "Legitimacy"]
            }
        },
        "examples": [
            { "title": "Treaty of Westphalia", "description": "Foundational concept of modern sovereignty." },
            { "title": "Personal Sovereignty", "description": "The ultimate right over one's own body." }
        ]
    },
    "lex-0013-recursion": {
        "uid": "lex-0013-recursion",
        "label": "Recursion",
        "genus": "Logical Process",
        "definition": {
            "primary_text": "The process of defining a function or concept in terms of itself, creating a potentially infinite self-referential structure.",
            "logical_constraints": [
                { "attribute": "Self-Reference", "question": "Does it refer to itself?", "value": "Yes", "fail_redirect": "Iteration" },
                { "attribute": "Termination", "question": "Is there a base case?", "value": "Yes", "fail_redirect": "Infinite Regress" },
                { "attribute": "Reduction", "question": "Does it move toward the base?", "value": "Yes", "fail_redirect": "Divergence" }
            ],
            "essential_components": [
                { "name": "Base Case", "description": "The condition that stops the recursion." },
                { "name": "Recursive Step", "description": "The part where the function calls itself with a modified input." },
                { "name": "Stack", "description": "The hierarchical memory of previous states." }
            ],
            "visual_construction": "Nested Squares + Converging Spiral"
        },
        "relations": {
            "exclusions": [
                { "target": "Iteration", "reason": "Iteration repeats a process; Recursion defines a process by itself." },
                { "target": "Fractal", "reason": "A fractal is a visual representation of recursion in geometry." }
            ],
            "map_coordinates": {
                "domain": "Logica",
                "island": "Computing",
                "neighbors": ["Algorithms", "Logic", "Infinity"]
            }
        },
        "examples": [
            { "title": "Fibonacci Sequence", "description": "A classic mathematical example of recursion." },
            { "title": "M.C. Escher's Drawing Hands", "description": "Visual recursion where hands draw each other." }
        ]
    },
    "lex-0014-nostalgia": {
        "uid": "lex-0014-nostalgia",
        "label": "Nostalgia",
        "genus": "Affective Memory State",
        "definition": {
            "primary_text": "A sentimental longing or wistful affection for the past, typically for a period or place with happy personal associations.",
            "logical_constraints": [
                { "attribute": "Temporal Direction", "question": "Directed at the past?", "value": "Yes", "fail_redirect": "Hope / Anxiety" },
                { "attribute": "Affect", "question": "Is it bittersweet?", "value": "Yes", "fail_redirect": "Pure Grief" },
                { "attribute": "Object", "question": "Is it an experience?", "value": "Yes", "fail_redirect": "Material Hoarding" }
            ],
            "essential_components": [
                { "name": "Memory Buffer", "description": "The distorted or idealized recollection of past events." },
                { "name": "Wistfulness", "description": "The emotional ache for what is no longer accessible." },
                { "name": "Identity Stabilization", "description": "The use of the past to stabilize the current sense of self." }
            ],
            "visual_construction": "Backward Curved Arrow + Soft Glowing Cloud"
        },
        "relations": {
            "exclusions": [
                { "target": "Memory", "reason": "Memory is data retrieval; Nostalgia is data flavored by emotion." },
                { "target": "History", "reason": "History is an objective record; Nostalgia is a subjective filter." }
            ],
            "map_coordinates": {
                "domain": "Psyche",
                "island": "Emotions",
                "neighbors": ["Memory", "Time", "Identity"]
            }
        },
        "examples": [
            { "title": "Hometown Visit", "description": "Visiting one's hometown after decades away." },
            { "title": "Childhood Cartoons", "description": "Re-watching a show that defines a specific era of life." }
        ]
    },
    "lex-0015-currency": {
        "uid": "lex-0015-currency",
        "label": "Currency",
        "genus": "Economic Medium",
        "definition": {
            "primary_text": "A generally accepted form of money, including coins and paper notes, which is issued by a government and circulated within an economy as a medium of exchange.",
            "logical_constraints": [
                { "attribute": "Fungibility", "question": "Is one unit equal to another?", "value": "Yes", "fail_redirect": "Commodity" },
                { "attribute": "Portability", "question": "Is it easy to move?", "value": "Yes", "fail_redirect": "Resource" },
                { "attribute": "Trust", "question": "Is it backed by authority?", "value": "Yes", "fail_redirect": "Barter Item" }
            ],
            "essential_components": [
                { "name": "Liquidity", "description": "The ease with which it can be converted into goods or services." },
                { "name": "Store of Value", "description": "The ability to retain purchasing power over time." },
                { "name": "Unit of Account", "description": "The standard numerical unit of measurement of market value." }
            ],
            "visual_construction": "Circulating Flow + Symbols ($, €, ¥) + Balance Scale"
        },
        "relations": {
            "exclusions": [
                { "target": "Money", "reason": "Money is the abstract concept; Currency is the physical or digital token." },
                { "target": "Barter", "reason": "Barter is direct swap; Currency is mediated swap." }
            ],
            "map_coordinates": {
                "domain": "Societas",
                "island": "Economy",
                "neighbors": ["Value", "Trust", "Labor"]
            }
        },
        "examples": [
            { "title": "The US Dollar", "description": "The primary global reserve currency." },
            { "title": "Bitcoin", "description": "A decentralized digital currency." }
        ]
    },
    "lex-0016-algorithm": {
        "uid": "lex-0016-algorithm",
        "label": "Algorithm",
        "genus": "Computational Procedure",
        "definition": {
            "primary_text": "A finite sequence of well-defined, computer-implementable instructions, typically to solve a class of specific problems or to perform a computation.",
            "logical_constraints": [
                { "attribute": "Finiteness", "question": "Does it end?", "value": "Yes", "fail_redirect": "Infinite Process" },
                { "attribute": "Definiteness", "question": "Are steps clear?", "value": "Yes", "fail_redirect": "Heuristic" },
                { "attribute": "Input/Output", "question": "Does it transform data?", "value": "Yes", "fail_redirect": "Static Statement" }
            ],
            "essential_components": [
                { "name": "Instructions", "description": "The discrete steps of the process." },
                { "name": "Logic Gates", "description": "The decision points (IF/THEN/ELSE)." },
                { "name": "Complexity", "description": "The measure of resources required for execution." }
            ],
            "visual_construction": "Flow Chart + Decision Diamonds + Converging Path"
        },
        "relations": {
            "exclusions": [
                { "target": "Code", "reason": "Code is the language; Algorithm is the logic the code implements." },
                { "target": "Formula", "reason": "A formula is a single expression; an algorithm is a sequence of expressions." }
            ],
            "map_coordinates": {
                "domain": "Logica",
                "island": "Computing",
                "neighbors": ["Logics", "Mathematics", "Recursion"]
            }
        },
        "examples": [
            { "title": "PageRank", "description": "The foundational algorithm for Google Search." },
            { "title": "Cake Recipe", "description": "An analog example of an algorithmic procedure." }
        ]
    },
    "lex-0017-threshold": {
        "uid": "lex-0017-threshold",
        "label": "Threshold",
        "genus": "Structural Boundary",
        "definition": {
            "primary_text": "The point or level at which a change occurs, or where a system transitions from one state to another.",
            "logical_constraints": [
                { "attribute": "State Change", "question": "Does it mark a transition?", "value": "Yes", "fail_redirect": "Continuity" },
                { "attribute": "Limit", "question": "Is it a specific value?", "value": "Yes", "fail_redirect": "Gradient" },
                { "attribute": "Irreversibility", "question": "Is the state different?", "value": "Yes", "fail_redirect": "Fluctuation" }
            ],
            "essential_components": [
                { "name": "Input Limit", "description": "The amount of pressure or data required to trigger change." },
                { "name": "Phase Shift", "description": "The sudden transformation of the system's behavior." },
                { "name": "Point of No Return", "description": "The critical boundary beyond which the process is irreversible." }
            ],
            "visual_construction": "Horizontal Line + Disordered vs Ordered Shapes"
        },
        "relations": {
            "exclusions": [
                { "target": "Boundary", "reason": "A boundary separates; a threshold triggers." },
                { "target": "Limit", "reason": "A limit is an end; a threshold is a beginning of a new state." }
            ],
            "map_coordinates": {
                "domain": "Logica",
                "island": "Transitions",
                "neighbors": ["Limits", "Physics", "Change"]
            }
        },
        "examples": [
            { "title": "Boiling Point", "description": "The 100°C threshold for water phase change." },
            { "title": "49 Pages", "description": "The threshold for a collection of pages to be titled a 'Book'." }
        ]
    },
    "lex-0018-hegemony": {
        "uid": "lex-0018-hegemony",
        "label": "Hegemony",
        "genus": "Systemic Dominance",
        "definition": {
            "primary_text": "The political, economic, or military predominance or control of one state or entity over others, often operating through cultural influence and norm-setting.",
            "logical_constraints": [
                { "attribute": "Predominance", "question": "Is one entity leading?", "value": "Yes", "fail_redirect": "Balance of Power" },
                { "attribute": "Influence", "question": "Does it shape behavior?", "value": "Yes", "fail_redirect": "Isolation" },
                { "attribute": "Normalization", "question": "Are its values 'standard'?", "value": "Yes", "fail_redirect": "Pure Coercion" }
            ],
            "essential_components": [
                { "name": "Soft Power", "description": "The ability to influence through culture and values." },
                { "name": "Structural Power", "description": "The ability to set the rules of the system." },
                { "name": "Consensus", "description": "The degree to which dominated entities accept the hegemon's leadership." }
            ],
            "visual_construction": "Central Star + Satellite Orbits + Shared Color"
        },
        "relations": {
            "exclusions": [
                { "target": "Imperialism", "reason": "Imperialism is direct rule; Hegemony is indirect leadership." },
                { "target": "Sovereignty", "reason": "Hegemony limits the practical sovereignty of secondary states." }
            ],
            "map_coordinates": {
                "domain": "Societas",
                "island": "Politics",
                "neighbors": ["Power", "Culture", "Sovereignty"]
            }
        },
        "examples": [
            { "title": "Pax Romana", "description": "A historical period of Roman hegemony in the Mediterranean." },
            { "title": "Hollywood", "description": "A primary vehicle for American cultural hegemony." }
        ]
    },
    "lex-0019-metaphor": {
        "uid": "lex-0019-metaphor",
        "label": "Metaphor",
        "genus": "Linguistic Symbolic Device",
        "definition": {
            "primary_text": "A figure of speech in which a word or phrase is applied to an object or action to which it is not literally applicable, creating a symbolic connection.",
            "logical_constraints": [
                { "attribute": "Non-Literality", "question": "Is it literally false?", "value": "Yes", "fail_redirect": "Description" },
                { "attribute": "Mapping", "question": "Does it transfer meaning?", "value": "Yes", "fail_redirect": "Nonsense" },
                { "attribute": "Illumination", "question": "Provides new insight?", "value": "Yes", "fail_redirect": "Cliché" }
            ],
            "essential_components": [
                { "name": "Tenor", "description": "The object or concept being described." },
                { "name": "Vehicle", "description": "The image or concept used to describe it." },
                { "name": "Ground", "description": "The shared quality between tenor and vehicle." }
            ],
            "visual_construction": "Circle + Triangle + Overlapping Bridge"
        },
        "relations": {
            "exclusions": [
                { "target": "Simile", "reason": "Simile uses 'like/as'; Metaphor asserts identity." },
                { "target": "Symbol", "reason": "Metaphor is a dynamic action; Symbol is a static representation." }
            ],
            "map_coordinates": {
                "domain": "Aesthetica",
                "island": "Language",
                "neighbors": ["Symbolism", "Art", "Poetry"]
            }
        },
        "examples": [
            { "title": "'Time is a Thief'", "description": "A classic metaphor for the loss of time." },
            { "title": "'Sea of Troubles'", "description": "Hamlet's metaphor for overwhelming difficulty." }
        ]
    },
    "lex-0020-symbiosis": {
        "uid": "lex-0020-symbiosis",
        "label": "Symbiosis",
        "genus": "Biological Interaction",
        "definition": {
            "primary_text": "Any type of a close and long-term biological interaction between two different biological organisms.",
            "logical_constraints": [
                { "attribute": "Different Species", "question": "Are they different?", "value": "Yes", "fail_redirect": "Social Behavior" },
                { "attribute": "Duration", "question": "Is it long-term?", "value": "Yes", "fail_redirect": "Predation" },
                { "attribute": "Proximity", "question": "In close contact?", "value": "Yes", "fail_redirect": "Environmental Interaction" }
            ],
            "essential_components": [
                { "name": "Mutualism", "description": "Both benefit (Win-Win)." },
                { "name": "Commensalism", "description": "One benefits, the other is unaffected." },
                { "name": "Parasitism", "description": "One benefits at the expense of the other." }
            ],
            "visual_construction": "Interlocking Rings + Overlap Color + Cycle Arrows"
        },
        "relations": {
            "exclusions": [
                { "target": "Competition", "reason": "Competition is struggle; Symbiosis is shared existence." },
                { "target": "Integration", "reason": "Integration merges entities; Symbiosis maintains separate identities." }
            ],
            "map_coordinates": {
                "domain": "Materia",
                "island": "Life Forms",
                "neighbors": ["Biology", "Ecosystem", "Human"]
            }
        },
        "examples": [
            { "title": "Bees and Flowers", "description": "A perfect example of Mutualism." },
            { "title": "Ticks on a Dog", "description": "A clear example of Parasitism." }
        ]
    },
    "lex-0021-epoch": {
        "uid": "lex-0021-epoch",
        "label": "Epoch",
        "genus": "Temporal Unit",
        "definition": {
            "primary_text": "A particular period of time in history or a person's life, typically one marked by notable events or particular characteristics.",
            "logical_constraints": [
                { "attribute": "Duration", "question": "Is it prolonged?", "value": "Yes", "fail_redirect": "Event" },
                { "attribute": "Character", "question": "Is it distinct?", "value": "Yes", "fail_redirect": "Mere Span" },
                { "attribute": "Closure", "question": "Has defined start/end?", "value": "Yes", "fail_redirect": "Continuity" }
            ],
            "essential_components": [
                { "name": "Zeitgeist", "description": "The spirit of the time defining the epoch." },
                { "name": "Markers", "description": "Events that initiate or terminate the period." },
                { "name": "Continuity", "description": "The internal consistency of conditions within the span." }
            ],
            "visual_construction": "Horizontal Segment + End Caps + Unique Texture"
        },
        "relations": {
            "exclusions": [
                { "target": "Era", "reason": "Era is generally longer; Epoch is often a subdivision." },
                { "target": "Moment", "reason": "A moment is a point; an epoch is a container." }
            ],
            "map_coordinates": {
                "domain": "Chronos",
                "island": "Time History",
                "neighbors": ["History", "Eras", "Duration"]
            }
        },
        "examples": [
            { "title": "The Digital Epoch", "description": "The current period defined by digital transformation." },
            { "title": "Victorian Epoch", "description": "A historical period marked by specific cultural norms." }
        ]
    },
    "lex-0022-infrastructure": {
        "uid": "lex-0022-infrastructure",
        "label": "Infrastructure",
        "genus": "Structural Foundation",
        "definition": {
            "primary_text": "The basic physical and organizational structures and facilities needed for the operation of a society or enterprise.",
            "logical_constraints": [
                { "attribute": "Necessity", "question": "Required for function?", "value": "Yes", "fail_redirect": "Luxury" },
                { "attribute": "Shared Use", "question": "Is it collective?", "value": "Usually", "fail_redirect": "Private Tool" },
                { "attribute": "Durability", "question": "Long-lasting?", "value": "Yes", "fail_redirect": "Consumable" }
            ],
            "essential_components": [
                { "name": "Networks", "description": "The connections (roads, cables) transporting energy or data." },
                { "name": "Nodes", "description": "Fixed points of processing (power plants, servers)." },
                { "name": "Maintenance", "description": "Ongoing effort to prevent Entropy and decay." }
            ],
            "visual_construction": "Base Grid + Utility Vectors + Node Boxes"
        },
        "relations": {
            "exclusions": [
                { "target": "Architecture", "reason": "Architecture is visible form; Infrastructure is functional base." },
                { "target": "Tool", "reason": "A tool is individual; infrastructure is systemic." }
            ],
            "map_coordinates": {
                "domain": "Technica",
                "island": "Systems",
                "neighbors": ["Logistics", "Power", "City"]
            }
        },
        "examples": [
            { "title": "The Power Grid", "description": "The essential infrastructure for modern energy." },
            { "title": "The Internet", "description": "Global digital infrastructure for communication." }
        ]
    },
    "lex-0023-cognition": {
        "uid": "lex-0023-cognition",
        "label": "Cognition",
        "genus": "Mental Process",
        "definition": {
            "primary_text": "The mental action or process of acquiring knowledge and understanding through thought, experience, and the senses.",
            "logical_constraints": [
                { "attribute": "Processing", "question": "Manipulates info?", "value": "Yes", "fail_redirect": "Sensation" },
                { "attribute": "Understanding", "question": "Aims for meaning?", "value": "Yes", "fail_redirect": "Reflex" },
                { "attribute": "Substrate", "question": "Is it mental?", "value": "Yes", "fail_redirect": "Logica" }
            ],
            "essential_components": [
                { "name": "Perception", "description": "The intake of data from the environment." },
                { "name": "Attention", "description": "The selective focusing on data streams." },
                { "name": "Memory", "description": "The storage and retrieval of processed information." }
            ],
            "visual_construction": "Stylized Brain + Pulse Vectors + Three Regions"
        },
        "relations": {
            "exclusions": [
                { "target": "Intelligence", "reason": "Intelligence is capacity; Cognition is active process." },
                { "target": "Emotion", "reason": "Emotion is affect; Cognition is analysis." }
            ],
            "map_coordinates": {
                "domain": "Psyche",
                "island": "Processes",
                "neighbors": ["Memory", "Human", "Logic"]
            }
        },
        "examples": [
            { "title": "Problem Solving", "description": "The cognitive work of resolving a logic task." },
            { "title": "Face Recognition", "description": "A complex automated cognitive process." }
        ]
    },
    "lex-0024-satellite": {
        "uid": "lex-0024-satellite",
        "label": "Satellite",
        "genus": "Orbital Apparatus",
        "definition": {
            "primary_text": "An artificial body placed in orbit around a planet in order to collect information or for communication.",
            "logical_constraints": [
                { "attribute": "Orbit", "question": "Revolves around planet?", "value": "Yes", "fail_redirect": "Spacecraft" },
                { "attribute": "Artificiality", "question": "Is it man-made?", "value": "Yes", "fail_redirect": "Natural Satellite" },
                { "attribute": "Function", "question": "Transmits data?", "value": "Usually", "fail_redirect": "Debris" }
            ],
            "essential_components": [
                { "name": "Telemetry", "description": "The transmission of measurements and other data." },
                { "name": "Payload", "description": "The specific cameras or transponders for its mission." },
                { "name": "Orbital Mechanics", "description": "The balance of velocity and gravity keeping it aloft." }
            ],
            "visual_construction": "Planet Arc + Orbital Icon + Data Beam"
        },
        "relations": {
            "exclusions": [
                { "target": "Moon", "reason": "The Moon is a Materia satellite; this is Technica." },
                { "target": "Airplane", "reason": "Airplanes are atmospheric; Satellites are supra-terrestrial." }
            ],
            "map_coordinates": {
                "domain": "Technica",
                "island": "Outer Space",
                "neighbors": ["Communication", "Physics", "Geography"]
            }
        },
        "examples": [
            { "title": "Sputnik 1", "description": "The first artificial satellite in history." },
            { "title": "GPS Constellation", "description": "A network of satellites providing global positioning." }
        ]
    },
    "lex-0025-isometry": {
        "uid": "lex-0025-isometry",
        "label": "Isometry",
        "genus": "Geometric Transformation",
        "definition": {
            "primary_text": "A distance-preserving transformation between metric spaces.",
            "logical_constraints": [
                { "attribute": "Distance Preservation", "question": "Distance equal?", "value": "Yes", "fail_redirect": "Distortion" },
                { "attribute": "Congruence", "question": "Shape remains equal?", "value": "Yes", "fail_redirect": "Scaling" },
                { "attribute": "Bijectivity", "question": "One-to-one mapping?", "value": "Yes", "fail_redirect": "Projection" }
            ],
            "essential_components": [
                { "name": "Translation", "description": "Moving an object without rotating or resizing." },
                { "name": "Rotation", "description": "Turning an object around a fixed point." },
                { "name": "Reflection", "description": "Creating a mirror image of an object." }
            ],
            "visual_construction": "Identical Hexagons + Rotation Arrows + Vertex Tethers"
        },
        "relations": {
            "exclusions": [
                { "target": "Scaling", "reason": "Scaling changes distance; Isometry preserves it." },
                { "target": "Topology", "reason": "Topology allows stretching; Isometry forbids it." }
            ],
            "map_coordinates": {
                "domain": "Logica",
                "island": "Geometry",
                "neighbors": ["Mathematics", "Physics", "Logic"]
            }
        },
        "examples": [
            { "title": "Mirror Reflection", "description": "A perfect geometric isometry." },
            { "title": "Moving a Furniture", "description": "Physical translation without deformation." }
        ]
    },
    "lex-0026-harmony": {
        "uid": "lex-0026-harmony",
        "label": "Harmony",
        "genus": "Vertical Auditory Relationship",
        "definition": {
            "primary_text": "The vertical relationship of sounds; the combination of different musical notes played simultaneously to produce chords.",
            "logical_constraints": [
                { "attribute": "Simultaneity", "question": "Playing together?", "value": "Yes", "fail_redirect": "Melody" },
                { "attribute": "Relationship", "question": "Do they interact?", "value": "Yes", "fail_redirect": "Noise" },
                { "attribute": "Structure", "question": "Is there tonal logic?", "value": "Usually", "fail_redirect": "Atonality" }
            ],
            "essential_components": [
                { "name": "Chords", "description": "Three or more notes sounded together." },
                { "name": "Consonance", "description": "Stable and restful sounds." },
                { "name": "Dissonance", "description": "Unstable or tense sounds." }
            ],
            "visual_construction": "Vertical Lines + Unifying Bracket + Single Wave"
        },
        "relations": {
            "parent": "lex-0003-music",
            "exclusions": [
                { "target": "Melody", "reason": "Melody is horizontal; Harmony is vertical." },
                { "target": "Noise", "reason": "Harmony requires tonal relationship." }
            ],
            "map_coordinates": {
                "domain": "Aesthetica",
                "island": "Arts",
                "neighbors": ["Music", "Melody", "Rhythm"]
            }
        },
        "examples": [
            { "title": "Choir Singing", "description": "Multiple voices creating harmonic chords." },
            { "title": "Strummed Chord", "description": "The basic unit of harmony in guitar music." }
        ]
    },
    "lex-0027-melody": {
        "uid": "lex-0027-melody",
        "label": "Melody",
        "genus": "Horizontal Auditory Sequence",
        "definition": {
            "primary_text": "A sequence of single tones perceived as a single entity; the linear narrative of a musical piece.",
            "logical_constraints": [
                { "attribute": "Sequence", "question": "Linear progression?", "value": "Yes", "fail_redirect": "Harmony" },
                { "attribute": "Unity", "question": "Perceived as one thing?", "value": "Yes", "fail_redirect": "Random Tones" },
                { "attribute": "Variation", "question": "Does pitch change?", "value": "Usually", "fail_redirect": "Rhythm" }
            ],
            "essential_components": [
                { "name": "Pitch", "description": "The highness or lowness of a tone." },
                { "name": "Interval", "description": "The distance between two pitches." },
                { "name": "Phrase", "description": "A short musical unit like a clause." }
            ],
            "visual_construction": "Continuous Stepped Line + Peak/Trough Nodes"
        },
        "relations": {
            "parent": "lex-0003-music",
            "exclusions": [
                { "target": "Harmony", "reason": "Melody is linear; Harmony is simultaneous." },
                { "target": "Rhythm", "reason": "Melody requires pitch; Rhythm only needs time." }
            ],
            "map_coordinates": {
                "domain": "Aesthetica",
                "island": "Arts",
                "neighbors": ["Music", "Harmony", "Rhythm"]
            }
        },
        "examples": [
            { "title": "Happy Birthday Tune", "description": "A simple, recognizable melody." },
            { "title": "Flute Solo", "description": "A pure melodic performance." }
        ]
    },
    "lex-0028-rhythm": {
        "uid": "lex-0028-rhythm",
        "label": "Rhythm",
        "genus": "Temporal Auditory Pattern",
        "definition": {
            "primary_text": "The structured division of time into audible patterns; the foundational core of Music.",
            "logical_constraints": [
                { "attribute": "Pattern", "question": "Is there structure?", "value": "Yes", "fail_redirect": "Random Noise" },
                { "attribute": "Time", "question": "Based on duration?", "value": "Yes", "fail_redirect": "Static Image" },
                { "attribute": "Substrate", "question": "Is it audible?", "value": "Yes", "fail_redirect": "Silence" }
            ],
            "essential_components": [
                { "name": "Beat", "description": "The basic unit of time in music." },
                { "name": "Tempo", "description": "The speed of the beats." },
                { "name": "Meter", "description": "The grouping of beats into regular patterns." }
            ],
            "visual_construction": "Horizontal Line + Varied Vertical Tick Marks"
        },
        "relations": {
            "parent": "lex-0003-music",
            "exclusions": [
                { "target": "Pulse", "reason": "Pulse is steady; Rhythm is the pattern overlaid." },
                { "target": "Melody", "reason": "Rhythm can exist without pitch; Melody cannot exist without rhythm." }
            ],
            "map_coordinates": {
                "domain": "Aesthetica",
                "island": "Arts",
                "neighbors": ["Music", "Melody", "Harmony"]
            }
        },
        "examples": [
            { "title": "Heartbeat", "description": "The biological foundation of rhythm." },
            { "title": "Drum Beat", "description": "The primary musical expression of rhythm." }
        ]
    },
    "lex-0029-atom": {
        "uid": "lex-0029-atom",
        "label": "Atom",
        "genus": "Fundamental Physical Unit",
        "definition": {
            "primary_text": "The smallest constituent unit of ordinary matter that has the properties of a chemical element.",
            "logical_constraints": [
                { "attribute": "Indivisibility", "question": "Can it be divided chemically?", "value": "No", "fail_redirect": "Molecule" },
                { "attribute": "Substrate", "question": "Is it physical?", "value": "Yes", "fail_redirect": "Logic Point" }
            ],
            "essential_components": [
                { "name": "Nucleus", "description": "The dense center containing protons and neutrons." },
                { "name": "Electrons", "description": "Negatively charged particles in orbital shells." }
            ],
            "visual_construction": "Central Nucleus + Orbital Shells"
        },
        "relations": {
            "map_coordinates": { "domain": "Materia", "island": "Physics", "neighbors": ["Molecule", "Energy"] }
        },
        "examples": [
            { "title": "Hydrogen", "description": "The simplest atom." },
            { "title": "Carbon-12", "description": "Basics of life." }
        ]
    },
    "lex-0030-molecule": {
        "uid": "lex-0030-molecule",
        "label": "Molecule",
        "genus": "Chemical Structure",
        "definition": {
            "primary_text": "A group of two or more atoms held together by chemical bonds.",
            "logical_constraints": [
                { "attribute": "Complexity", "question": "Contains >= 2 atoms?", "value": "Yes", "fail_redirect": "Atom" },
                { "attribute": "Bonding", "question": "Are units connected?", "value": "Yes", "fail_redirect": "Mixture" }
            ],
            "essential_components": [
                { "name": "Atomic Nodes", "description": "The individual atoms forming the unit." },
                { "name": "Bonds", "description": "Electromagnetic forces of connection." }
            ],
            "visual_construction": "Connected Node Network"
        },
        "relations": {
            "parent": "lex-0029-molecule",
            "map_coordinates": { "domain": "Materia", "island": "Chemistry", "neighbors": ["Atom", "Cell"] }
        },
        "examples": [
            { "title": "H2O", "description": "Water." },
            { "title": "Glucose", "description": "Basic energy source." }
        ]
    },
    "lex-0031-cell": {
        "uid": "lex-0031-cell",
        "label": "Cell",
        "genus": "Biological Unit",
        "definition": {
            "primary_text": "The basic structural, functional, and biological unit of all known living organisms.",
            "logical_constraints": [
                { "attribute": "Vitality", "question": "Is it a unit of life?", "value": "Yes", "fail_redirect": "Mineral" },
                { "attribute": "Closure", "question": "Does it have a boundary?", "value": "Yes", "fail_redirect": "Liquid" }
            ],
            "essential_components": [
                { "name": "Membrane", "description": "The protective outer layer." },
                { "name": "Nucleus", "description": "The information center." }
            ],
            "visual_construction": "Membrane Boundary + Central Nucleus"
        },
        "relations": {
            "map_coordinates": { "domain": "Materia", "island": "Biology", "neighbors": ["Molecule", "Human"] }
        },
        "examples": [
            { "title": "Red Blood Cell", "description": "Oxygen transporter." },
            { "title": "Neuron", "description": "Signal transmitter." }
        ]
    },
    "lex-0032-variable": {
        "uid": "lex-0032-variable",
        "label": "Variable",
        "genus": "Symbolic Placeholder",
        "definition": {
            "primary_text": "A symbol representing an unknown or changing quantity in a mathematical expression.",
            "logical_constraints": [
                { "attribute": "Permutability", "question": "Can value change?", "value": "Yes", "fail_redirect": "Constant" },
                { "attribute": "Identity", "question": "Is it a placeholder?", "value": "Yes", "fail_redirect": "Value" }
            ],
            "essential_components": [
                { "name": "The Label", "description": "The identifier (e.g. x)." },
                { "name": "Scope", "description": "The system in which it operates." }
            ],
            "visual_construction": "Empty Container + Input Vector"
        },
        "relations": {
            "parent": "lex-0033-function",
            "map_coordinates": { "domain": "Logica", "island": "Algebra", "neighbors": ["Function", "Integer"] }
        },
        "examples": [
            { "title": "x in 2x+1", "description": "Algebraic variable." },
            { "title": "Placeholder", "description": "Abstract slot." }
        ]
    },
    "lex-0033-function": {
        "uid": "lex-0033-function",
        "label": "Function",
        "genus": "Transformation Rule",
        "definition": {
            "primary_text": "A relation from a set of inputs to a set of outputs where each input relates to exactly one output.",
            "logical_constraints": [
                { "attribute": "Determinism", "question": "Is output predictable?", "value": "Yes", "fail_redirect": "Chaos" },
                { "attribute": "Uniqueness", "question": "One output per input?", "value": "Yes", "fail_redirect": "Relation" }
            ],
            "essential_components": [
                { "name": "Input / Output", "description": "The flow of data." },
                { "name": "The Mapping", "description": "The transformation rule." }
            ],
            "visual_construction": "Processing Chamber + Shifted Pulse"
        },
        "relations": {
            "map_coordinates": { "domain": "Logica", "island": "Calculus", "neighbors": ["Variable", "Algorithm"] }
        },
        "examples": [
            { "title": "f(x)=x^2", "description": "Squaring function." },
            { "title": "Sine Wave", "description": "Periodic function." }
        ]
    },
    "lex-0034-integer": {
        "uid": "lex-0034-integer",
        "label": "Integer",
        "genus": "Numerical Unit",
        "definition": {
            "primary_text": "A whole number that can be positive, negative, or zero; no fractions.",
            "logical_constraints": [
                { "attribute": "Wholeness", "question": "Is it a full unit?", "value": "Yes", "fail_redirect": "Fraction" },
                { "attribute": "Countability", "question": "Is it discrete?", "value": "Yes", "fail_redirect": "Real Number" }
            ],
            "essential_components": [
                { "name": "Zero", "description": "The neutral origin." },
                { "name": "The Step", "description": "The unit of progression (+-1)." }
            ],
            "visual_construction": "Discrete Points on Axis"
        },
        "relations": {
            "map_coordinates": { "domain": "Logica", "island": "Arithmetic", "neighbors": ["Ratio", "Variable"] }
        },
        "examples": [
            { "title": "Floor Level", "description": "B1, 0, 1." },
            { "title": "Score", "description": "Points earned." }
        ]
    },
    "lex-0035-ratio": {
        "uid": "lex-0035-ratio",
        "label": "Ratio",
        "genus": "Quantitative Relationship",
        "definition": {
            "primary_text": "A relationship between two numbers indicating how many times the first contains the second.",
            "logical_constraints": [
                { "attribute": "Comparison", "question": "Involves two units?", "value": "Yes", "fail_redirect": "Scalar" },
                { "attribute": "Persistence", "question": "Stays true at scale?", "value": "Yes", "fail_redirect": "Specific" }
            ],
            "essential_components": [
                { "name": "Antecedent", "description": "The first term." },
                { "name": "Consequent", "description": "The second term." }
            ],
            "visual_construction": "Dual Scalar Dots + Divider"
        },
        "relations": {
            "parent": "lex-0036-proportion",
            "map_coordinates": { "domain": "Logica", "island": "Geometry", "neighbors": ["Proportion", "Integer"] }
        },
        "examples": [
            { "title": "16:9", "description": "Screen ratio." },
            { "title": "1:1", "description": "Equality." }
        ]
    },
    "lex-0036-proportion": {
        "uid": "lex-0036-proportion",
        "label": "Proportion",
        "genus": "Geometric Balance",
        "definition": {
            "primary_text": "The quality of equality between two ratios; the state of systemic harmony.",
            "logical_constraints": [
                { "attribute": "Equality", "question": "Are ratios equal?", "value": "Yes", "fail_redirect": "Imbalance" },
                { "attribute": "Harmony", "question": "Is it balanced?", "value": "Yes", "fail_redirect": "Asymmetry" }
            ],
            "essential_components": [
                { "name": "Ratios", "description": "The constituent relationships." },
                { "name": "Balance", "description": "The state of equality." }
            ],
            "visual_construction": "Mirrored Scalar Balance"
        },
        "relations": {
            "map_coordinates": { "domain": "Logica", "island": "Geometry", "neighbors": ["Ratio", "Harmony"] }
        },
        "examples": [
            { "title": "Golden Ratio", "description": "Perfect proportion." },
            { "title": "Vitruvian Man", "description": "Anatomical proportion." }
        ]
    },
    "lex-0037-compass": {
        "uid": "lex-0037-compass",
        "label": "Compass",
        "genus": "Navigational Tool",
        "definition": {
            "primary_text": "An instrument with a magnetized pointer showing the direction of magnetic north.",
            "logical_constraints": [
                { "attribute": "Magnetism", "question": "Based on poles?", "value": "Yes", "fail_redirect": "Gyro" },
                { "attribute": "Orientation", "question": "Provides direction?", "value": "Yes", "fail_redirect": "Marker" }
            ],
            "essential_components": [
                { "name": "Needle", "description": "The magnetic pointer." },
                { "name": "Poles", "description": "The planetary magnetic source." }
            ],
            "visual_construction": "Floating Needle + Polar Axis"
        },
        "relations": {
            "map_coordinates": { "domain": "Technica", "island": "Navigation", "neighbors": ["Map", "Satellite"] }
        },
        "examples": [
            { "title": "Mariner's Compass", "description": "Sea navigation." },
            { "title": "Moral Compass", "description": "Metaphorical navigation." }
        ]
    },
    "lex-0038-engine": {
        "uid": "lex-0038-engine",
        "label": "Engine",
        "genus": "Power Transformer",
        "definition": {
            "primary_text": "A machine that converts energy into mechanical force.",
            "logical_constraints": [
                { "attribute": "Conversion", "question": "Transforms fuel?", "value": "Yes", "fail_redirect": "Lever" },
                { "attribute": "Output", "question": "Creates force?", "value": "Yes", "fail_redirect": "Heater" }
            ],
            "essential_components": [
                { "name": "The Drive", "description": "The source of motion." },
                { "name": "The Cycle", "description": "The repeated process of conversion." }
            ],
            "visual_construction": "Reciprocating Piston Drive"
        },
        "relations": {
            "map_coordinates": { "domain": "Technica", "island": "Mechanics", "neighbors": ["Lever", "Infrastructure"] }
        },
        "examples": [
            { "title": "Steam Engine", "description": "Foundational tech." },
            { "title": "Search Engine", "description": "Abstract processing power." }
        ]
    },
    "lex-0039-clock": {
        "uid": "lex-0039-clock",
        "label": "Clock",
        "genus": "Temporal Meter",
        "definition": {
            "primary_text": "A device for measuring and indicating time using regular oscillations.",
            "logical_constraints": [
                { "attribute": "Precision", "question": "Counts regular units?", "value": "Yes", "fail_redirect": "Flow" },
                { "attribute": "Display", "question": "Shows the count?", "value": "Yes", "fail_redirect": "Timer" }
            ],
            "essential_components": [
                { "name": "Oscillator", "description": "The pulse generator (pendulum/quartz)." },
                { "name": "Display", "description": "The human-readable interface." }
            ],
            "visual_construction": "Circular Dial + Radial Vectors"
        },
        "relations": {
            "parent": "lex-0041-calendar",
            "map_coordinates": { "domain": "Technica", "island": "Time Measurement", "neighbors": ["Calendar", "Decade"] }
        },
        "examples": [
            { "title": "Wristwatch", "description": "Portable meter." },
            { "title": "Atomic Clock", "description": "Universal precision." }
        ]
    },
    "lex-0040-lever": {
        "uid": "lex-0040-lever",
        "label": "Lever",
        "genus": "Mechanical Advantage",
        "definition": {
            "primary_text": "A simple machine consisting of a rigid beam pivoted at a fixed hinge or fulcrum.",
            "logical_constraints": [
                { "attribute": "Pivot", "question": "Fixed point?", "value": "Yes", "fail_redirect": "Slide" },
                { "attribute": "Advantage", "question": "Multiplies force?", "value": "Yes", "fail_redirect": "Staff" }
            ],
            "essential_components": [
                { "name": "Fulcrum", "description": "The pivot point." },
                { "name": "Beam", "description": "The rigid arm." }
            ],
            "visual_construction": "Fulcrum Triangle + Tilting Axis"
        },
        "relations": {
            "map_coordinates": { "domain": "Technica", "island": "Mechanics", "neighbors": ["Engine", "Infrastructure"] }
        },
        "examples": [
            { "title": "Crowbar", "description": "Prying tool." },
            { "title": "Seesaw", "description": "Equalized lever." }
        ]
    },
    "lex-0041-calendar": {
        "uid": "lex-0041-calendar",
        "label": "Calendar",
        "genus": "Temporal System",
        "definition": {
            "primary_text": "A system of organizing days for social, commercial, or administrative purposes.",
            "logical_constraints": [
                { "attribute": "Cycle", "question": "Recurring events?", "value": "Yes", "fail_redirect": "Journal" },
                { "attribute": "Projection", "question": "Maps future?", "value": "Yes", "fail_redirect": "History Book" }
            ],
            "essential_components": [
                { "name": "Epoch", "description": "The starting point of the count." },
                { "name": "Grid", "description": "The spatial map of time (days/months)." }
            ],
            "visual_construction": "Grid Array + Highlighted Node"
        },
        "relations": {
            "map_coordinates": { "domain": "Technica", "island": "Time History", "neighbors": ["Clock", "Decade"] }
        },
        "examples": [
            { "title": "Gregorian", "description": "Modern international standard." },
            { "title": "Lunar", "description": "Based on moon phases." }
        ]
    },
    "lex-0042-envy": {
        "uid": "lex-0042-envy",
        "label": "Envy",
        "genus": "Affective Deprivation State",
        "definition": {
            "primary_text": "A feeling of discontented longing aroused by someone else's possessions or qualities.",
            "logical_constraints": [
                { "attribute": "Relational", "question": "Requires an Other?", "value": "Yes", "fail_redirect": "Frustration" },
                { "attribute": "Deprivation", "question": "Perceived lack?", "value": "Yes", "fail_redirect": "Pride" }
            ],
            "essential_components": [
                { "name": "The Void", "description": "The gap in one's own status." },
                { "name": "The Idealized Other", "description": "The possessor of the desired object." }
            ],
            "visual_construction": "Hollow Circle + Jagged Vector + Solid Circle"
        },
        "relations": {
            "map_coordinates": { "domain": "Psyche", "island": "Emotions", "neighbors": ["Boredom", "Nostalgia"] }
        },
        "examples": [
            { "title": "Social Media Envy", "description": "Longing for curated lives." },
            { "title": "Green-Eyed Monster", "description": "Classic literary archetype." }
        ]
    },
    "lex-0043-boredom": {
        "uid": "lex-0043-boredom",
        "label": "Boredom",
        "genus": "Attention Deficit State",
        "definition": {
            "primary_text": "The state of feeling weary through lack of interest in one's environment.",
            "logical_constraints": [
                { "attribute": "Under-stimulation", "question": "Lack of challenge?", "value": "Yes", "fail_redirect": "Self-Reflection" },
                { "attribute": "Restlessness", "question": "Desire for change?", "value": "Yes", "fail_redirect": "Zen" }
            ],
            "essential_components": [
                { "name": "Lost Attention", "description": "Inability to anchor the mind." },
                { "name": "Temporal Dilation", "description": "Perception of slowing time." }
            ],
            "visual_construction": "Flat Horizon + Shallow Dip"
        },
        "relations": {
            "map_coordinates": { "domain": "Psyche", "island": "States", "neighbors": ["Envy", "Cognition"] }
        },
        "examples": [
            { "title": "Waiting Room", "description": "Environment of low stimulation." },
            { "title": "Routine", "description": "Predictability-induced boredom." }
        ]
    },
    "lex-0044-empathy": {
        "uid": "lex-0044-empathy",
        "label": "Empathy",
        "genus": "Affective Identification",
        "definition": {
            "primary_text": "The ability to understand and share the feelings of another.",
            "logical_constraints": [
                { "attribute": "Sharing", "question": "Resonance felt?", "value": "Yes", "fail_redirect": "Intellect" },
                { "attribute": "Boundaries", "question": "Separate entity?", "value": "Yes", "fail_redirect": "Fusion" }
            ],
            "essential_components": [
                { "name": "Mirroring", "description": "The internal reflection of another's state." },
                { "name": "Cognition", "description": "The intellectual understanding of the other's context." }
            ],
            "visual_construction": "Overlapping Pulses + Combined Amplitude"
        },
        "relations": {
            "parent": "lex-0007-love",
            "map_coordinates": { "domain": "Psyche", "island": "Social Psyche", "neighbors": ["Love", "Trust"] }
        },
        "examples": [
            { "title": "Crying at Movies", "description": "Shared fictional affect." },
            { "title": "Counseling", "description": "Professional practice of empathy." }
        ]
    },
    "lex-0045-trust": {
        "uid": "lex-0045-trust",
        "label": "Trust",
        "genus": "Social Predictive Reliance",
        "definition": {
            "primary_text": "The firm belief in the reliability of someone or something in the face of uncertainty.",
            "logical_constraints": [
                { "attribute": "Uncertainty", "question": "Risk exists?", "value": "Yes", "fail_redirect": "Knowledge" },
                { "attribute": "Reliance", "question": "Will you act?", "value": "Yes", "fail_redirect": "Indifference" }
            ],
            "essential_components": [
                { "name": "Consistency", "description": "Pattern of past reliability." },
                { "name": "Benevolence", "description": "Belief in lack of harm." }
            ],
            "visual_construction": "Support Pillars + Bridged Gap"
        },
        "relations": {
            "map_coordinates": { "domain": "Psyche", "island": "Social Psyche", "neighbors": ["Empathy", "Treaty"] }
        },
        "examples": [
            { "title": "Market Confidence", "description": "Trust in currency value." },
            { "title": "Friendship", "description": "Interpersonal trust." }
        ]
    },
    "lex-0046-tax": {
        "uid": "lex-0046-tax",
        "label": "Tax",
        "genus": "Mandatory Contribution",
        "definition": {
            "primary_text": "A compulsory financial charge imposed by a government to fund public utility.",
            "logical_constraints": [
                { "attribute": "Compulsion", "question": "Is it mandatory?", "value": "Yes", "fail_redirect": "Donation" },
                { "attribute": "Authority", "question": "Is it sovereign?", "value": "Yes", "fail_redirect": "Theft" }
            ],
            "essential_components": [
                { "name": "The Levy", "description": "The percentage taken from the base." },
                { "name": "Public Utility", "description": "The shared infrastructure funded." }
            ],
            "visual_construction": "Fractured Coins + Wedge Separation"
        },
        "relations": {
            "map_coordinates": { "domain": "Societas", "island": "Economy", "neighbors": ["Property", "Sovereignty"] }
        },
        "examples": [
            { "title": "Income Tax", "description": "Levy on labor value." },
            { "title": "Tariff", "description": "Tax on cross-border goods." }
        ]
    },
    "lex-0047-treaty": {
        "uid": "lex-0047-treaty",
        "label": "Treaty",
        "genus": "Formal Agreement",
        "definition": {
            "primary_text": "A formally concluded and ratified agreement between sovereign states.",
            "logical_constraints": [
                { "attribute": "Ratification", "question": "Formally accepted?", "value": "Yes", "fail_redirect": "Handshake" },
                { "attribute": "Bindingness", "question": "Creates obligation?", "value": "Yes", "fail_redirect": "Advice" }
            ],
            "essential_components": [
                { "name": "Protocol", "description": "The specific terms." },
                { "name": "Sovereignty", "description": "The authority of the signers." }
            ],
            "visual_construction": "Conjoined Parchments + Shared Seal"
        },
        "relations": {
            "parent": "lex-0045-trust",
            "map_coordinates": { "domain": "Societas", "island": "Politics", "neighbors": ["Trust", "Sovereignty"] }
        },
        "examples": [
            { "title": "Versailles", "description": "WW1 peace treaty." },
            { "title": "NAFTA", "description": "Trade agreement." }
        ]
    },
    "lex-0048-property": {
        "uid": "lex-0048-property",
        "label": "Property",
        "genus": "Legal Domain",
        "definition": {
            "primary_text": "The legal right of an entity to own, use, and dispose of a resource.",
            "logical_constraints": [
                { "attribute": "Exclusivity", "question": "Can exclude others?", "value": "Yes", "fail_redirect": "Commons" },
                { "attribute": "Transferability", "question": "Can be sold?", "value": "Yes", "fail_redirect": "Endline" }
            ],
            "essential_components": [
                { "name": "The Boundary", "description": "The limit of jurisdiction." },
                { "name": "The Asset", "description": "The resource held." }
            ],
            "visual_construction": "Asset Box + Perimeter Ticks"
        },
        "relations": {
            "parent": "lex-0046-tax",
            "map_coordinates": { "domain": "Societas", "island": "Law", "neighbors": ["Tax", "Currency"] }
        },
        "examples": [
            { "title": "Real Estate", "description": "Land property." },
            { "title": "Copyright", "description": "Abstract property." }
        ]
    },
    "lex-0049-contrast": {
        "uid": "lex-0049-contrast",
        "label": "Contrast",
        "genus": "Qualitative Difference",
        "definition": {
            "primary_text": "The state of being strikingly different in juxtaposition; the engine of perception.",
            "logical_constraints": [
                { "attribute": "Distance", "question": "Difference significant?", "value": "Yes", "fail_redirect": "Nuance" },
                { "attribute": "Juxtaposition", "question": "Viewed together?", "value": "Yes", "fail_redirect": "Isolation" }
            ],
            "essential_components": [
                { "name": "Polarity", "description": "The extremes compared." },
                { "name": "Boundary", "description": "The edge of distinction." }
            ],
            "visual_construction": "Diagonal Split + B/W Contrast"
        },
        "relations": {
            "map_coordinates": { "domain": "Aesthetica", "island": "Perception", "neighbors": ["Texture", "Harmony"] }
        },
        "examples": [
            { "title": "Chiaroscuro", "description": "Light/Dark in painting." },
            { "title": "Fortissimo/Pianissimo", "description": "Volume contrast." }
        ]
    },
    "lex-0050-texture": {
        "uid": "lex-0050-texture",
        "label": "Texture",
        "genus": "Surface Quality",
        "definition": {
            "primary_text": "The appearance or tactical consistency of a surface or substance.",
            "logical_constraints": [
                { "attribute": "Granularity", "question": "Small variations?", "value": "Yes", "fail_redirect": "Pure Plane" },
                { "attribute": "Frequency", "question": "Is pattern regular?", "value": "Usually", "fail_redirect": "Chaos" }
            ],
            "essential_components": [
                { "name": "The Unit", "description": "The repeating element." },
                { "name": "Roughness", "description": "Vertical variation magnitude." }
            ],
            "visual_construction": "Dotted Grid + Jitter Scale"
        },
        "relations": {
            "map_coordinates": { "domain": "Aesthetica", "island": "Form", "neighbors": ["Contrast", "Metaphor"] }
        },
        "examples": [
            { "title": "Sandpaper", "description": "High friction texture." },
            { "title": "Orchestration", "description": "Auditory texture (layers)." }
        ]
    },
    "lex-0051-decade": {
        "uid": "lex-0051-decade",
        "label": "Decade",
        "genus": "Temporal Span",
        "definition": {
            "primary_text": "A period of ten years; a unit of cultural memory.",
            "logical_constraints": [
                { "attribute": "Duration", "question": "Is it 10 years?", "value": "Yes", "fail_redirect": "Century" },
                { "attribute": "Sequence", "question": "In a series?", "value": "Yes", "fail_redirect": "Batch" }
            ],
            "essential_components": [
                { "name": "Year Block", "description": "The ten constituent cycles." },
                { "name": "Zeitgeist", "description": "The social coloring of the span." }
            ],
            "visual_construction": "Decimal Segment + End Markers"
        },
        "relations": {
            "parent": "lex-0052-millennium",
            "map_coordinates": { "domain": "Chronos", "island": "Eras", "neighbors": ["Millennium", "Epoch"] }
        },
        "examples": [
            { "title": "The Roaring Twenties", "description": "1920-1929." },
            { "title": "First Decade", "description": "Childhood baseline." }
        ]
    },
    "lex-0052-millennium": {
        "uid": "lex-0052-millennium",
        "label": "Millennium",
        "genus": "Temporal Era",
        "definition": {
            "primary_text": "A period of a thousand years; the scale of civilizations.",
            "logical_constraints": [
                { "attribute": "Duration", "question": "1,000 years?", "value": "Yes", "fail_redirect": "Epoch" },
                { "attribute": "Continuity", "question": "Stable lineage?", "value": "Yes", "fail_redirect": "Interregnum" }
            ],
            "essential_components": [
                { "name": "Centuries", "description": "The ten primary subdivisions." },
                { "name": "Trans-human Scale", "description": "Duration exceeding individual life x10." }
            ],
            "visual_construction": "Dense 10x10 Grid (Total 1000 Representation)"
        },
        "relations": {
            "map_coordinates": { "domain": "Chronos", "island": "Eras", "neighbors": ["Decade", "Epoch"] }
        },
        "examples": [
            { "title": "Modern Millennium", "description": "2000-2999." },
            { "title": "Ancient History", "description": "Millennial spans of Egypt." }
        ]
    },
    "lex-0053-catalyst": {
        "uid": "lex-0053-catalyst",
        "label": "Catalyst",
        "genus": "Process Accelerator",
        "definition": {
            "primary_text": "A factor that increases the rate of an interaction without being permanently changed.",
            "logical_constraints": [
                { "attribute": "Acceleration", "question": "Speeds process?", "value": "Yes", "fail_redirect": "Passive" },
                { "attribute": "Conservation", "question": "Is it consumed?", "value": "No", "fail_redirect": "Fuel" }
            ],
            "essential_components": [
                { "name": "Threshold Reduction", "description": "Lowering the energy required for start." },
                { "name": "Intermediary Bond", "description": "Temporary connection during event." }
            ],
            "visual_construction": "Arch Dip + Path Shortener"
        },
        "relations": {
            "map_coordinates": { "domain": "Logica", "island": "Processes", "neighbors": ["Threshold", "Algorithm"] }
        },
        "examples": [
            { "title": "Enzymes", "description": "Biological catalysts." },
            { "title": "Charisma", "description": "Social catalyst for movement." }
        ]
    }
};
