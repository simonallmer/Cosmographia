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
                { "attribute": "Quantity (Latin)", "question": "Page Count", "value": "≥ 49", "fail_redirect": "Pamphlet" },
                { "attribute": "Quantity (Logographic)", "question": "Character Count", "value": "≥ 20,000", "fail_redirect": "Article / Text" },
                { "attribute": "Frequency", "question": "Periodic?", "value": "No", "fail_redirect": "Magazine / Journal" }
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
                {
                    "versus": "Codex",
                    "text": "A Codex is the historical ancestor of the Book. While all modern Books are technically codices, the term Book implies contemporary manufacturing and standardization."
                },
                {
                    "versus": "Text",
                    "text": "A Text is the abstract sequence of words (the 'Soul'); the Book is the specific physical vessel (the 'Body')."
                },
                {
                    "versus": "E-Book",
                    "text": "An E-Book mimics the linear sequence of a Book but lacks the Substrate (physical matter) required for this specific classification."
                }
            ],
            "map_coordinates": {
                "domain": "Technica",
                "island": "Information Storage",
                "neighbors": ["Libraries", "Paper", "Printing Press"]
            }
        },
        "examples": [
            {
                "title": "The Gutenberg Bible (1450s)",
                "description": "Significant for being the first major book printed using movable type."
            },
            {
                "title": "Hardcover Edition of '1984'",
                "description": "A standard modern industrial book."
            },
            {
                "title": "The Diamond Sutra",
                "description": "A historical scroll often compared to a book, though technically a [Scroll] by Cosmographia standards due to the lack of pages."
            }
        ]
    }
};
