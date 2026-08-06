# glossary.md

# Feeligrane Glossary

> **A shared vocabulary for humans and AI contributors.**

This glossary defines the project's terminology.

Its purpose is to ensure that contributors consistently use the same words to describe the same concepts.

Unless explicitly stated otherwise, the definitions below apply throughout the repository.

---

# Principles

- One concept should have one preferred term.
- Synonyms should be avoided whenever possible.
- Definitions should remain stable over time.
- Conceptual precision takes precedence over convenience.

---

# A

## Annotation

A piece of structured information attached to a text fragment.

Annotations are produced either manually or automatically.

An annotation is never a diagnosis.

---

## Article

A single long-form publication analysed by Feeligrane.

Examples include Substack posts, blog articles or similar textual documents.

---

# C

## Category

A high-level conceptual family within the taxonomy.

Examples:

- Guilt
- Shame
- Gratitude
- Repair

Categories organise concepts.

They are not lexical items.

---

## Concept

An abstract affective or rhetorical notion recognised by the project's taxonomy.

Concepts are language-independent.

They constitute the semantic layer of Feeligrane.

---

## Confidence

A measure of certainty associated with a detection.

Confidence expresses the detector's confidence in an observation.

It never expresses certainty about an author's intentions.

---

## Corpus

A collection of articles analysed as a whole.

A corpus may belong to:

- one author;
- one publication;
- one topic;
- one language;
- or any other defined scope.

---

# D

## Detection

The process of identifying lexical markers inside a text.

Detection produces observations.

Not interpretations.

---

# H

## Highlight

The visual emphasis applied to one or more lexical markers within a document.

Highlights improve readability.

They are not interpretations.

---

# H

## Hypothesis

A possible interpretation built upon one or more observations.

Hypotheses remain open to revision.

Feeligrane should clearly distinguish hypotheses from observations.

---

# I

## Interpretation

A meaning assigned by a human reader to one or more observations.

Interpretation belongs to the reader.

Not to the detector.

---

# L

## Language Pack

A language-specific collection of lexical markers associated with the project's taxonomy.

Different language packs may represent the same concepts differently.

---

## Lexical Marker

A word, expression or textual pattern associated with one conceptual category.

Lexical markers belong to a language.

Concepts do not.

---

# M

## Marker

Preferred shorthand for "Lexical Marker".

---

# O

## Observation

An objective statement describing what has been detected.

Example:

> The expression "I blame myself" appears twice.

An observation contains no interpretation.

---

## Occurrence

One detected instance of a lexical marker inside a text.

---

# P

## Pattern

A meaningful combination of observations.

Patterns emerge from multiple observations rather than isolated markers.

---

# R

## Repair

A conceptual category describing attempts to repair relationships, identity or moral standing.

Repair is distinct from guilt.

Although they frequently co-occur.

---

# S

## Semantic Layer

The conceptual structure connecting categories independently of language.

---

## Session

One continuous development period.

A session begins with the protocol defined in SESSION_BOOT.md.

---

## Shame

A conceptual category describing language associated with shame, humiliation or negative self-evaluation.

The taxonomy distinguishes shame from guilt whenever possible.

---

## Signal

An observable textual element that may justify closer inspection.

Signals invite interpretation.

They do not determine it.

---

# T

## Taxonomy

The structured organisation of conceptual categories recognised by Feeligrane.

The taxonomy is language-independent.

Language packs implement it.

---

## Text Fragment

The smallest portion of text that may receive one or more annotations.

---

# V

## Validation

A conceptual category describing language expressing recognition, approval or legitimisation.

---

# Vocabulary policy

When several words could describe the same concept, the repository should adopt one preferred term.

Alternative terms may appear for explanatory purposes but should not become interchangeable within technical documentation.

---

# Conceptual model

```
Article
      │
      ▼
Text Fragment
      │
      ▼
Lexical Marker
      │
      ▼
Occurrence
      │
      ▼
Observation
      │
      ▼
Pattern
      │
      ▼
Concept
      │
      ▼
Category
```

Human interpretation may occur at every stage after the observation.

Feeligrane assists interpretation.

It does not replace it.

---

# Language model

```
Concept
      │
      ▼
Language Pack
      │
      ▼
Lexical Markers
      │
      ▼
Occurrences
```

The taxonomy remains independent from any specific language.

Each language provides its own lexical implementation of the same conceptual structure.
