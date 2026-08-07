# taxonomy.md

# Feeligrane Taxonomy

> **Taxonomy v1.0 (Draft)**

---

## Status

Draft.

This document defines the conceptual taxonomy used throughout Feeligrane.

It is intentionally independent from any specific language.

Language-specific lexical markers belong to language packs, not to this taxonomy.

---

# Purpose

Feeligrane does **not** detect emotions.

Feeligrane detects **textual markers** associated with conceptual categories that may contribute to human interpretation.

The taxonomy therefore organises **concepts**, not words.

---

# Principles

## Concept-first

Concepts exist independently of languages.

Languages provide lexical implementations of those concepts.

---

## Observation before interpretation

The detector observes textual phenomena.

Interpretation remains the responsibility of the reader.

---

## Explainability

Every category should be understandable.

Every detection should be explainable.

Every concept should have clear boundaries.

---

## Non-pathologising

The taxonomy describes discourse.

It does not diagnose people.

---

## Categories

---

# Guilt

## Definition

Language expressing personal responsibility for a perceived moral fault or wrongdoing.

### Typical signals

- admission of fault
- acknowledgement of responsibility
- regret
- apology
- self-blame

### Neighbouring concepts

- Shame
- Repair
- Responsibility

### Excluded

- objective descriptions of responsibility
- legal responsibility without affective dimension

---

# Shame

## Definition

Language expressing negative evaluation of one's identity, worth or social image.

### Typical signals

- self-devaluation
- humiliation
- embarrassment
- feeling unworthy
- fear of judgment

### Neighbouring concepts

- Guilt
- Self-criticism
- Vulnerability

### Distinction from guilt

Guilt asks:

> "I did something wrong."

Shame asks:

> "There is something wrong with me."

---

# Self-Criticism

## Definition

Language in which the speaker evaluates themselves negatively.

### Typical signals

- harsh self-evaluation
- perfectionism
- self-reproach
- dissatisfaction with oneself

### Neighbouring concepts

- Shame
- Guilt

---

# Repair

## Definition

Language expressing an intention to restore, improve or reconcile.

### Typical signals

- apology
- reconciliation
- restitution
- forgiveness
- making amends

### Neighbouring concepts

- Guilt
- Gratitude
- Validation

---

# Gratitude

## Definition

Language expressing appreciation or recognition towards another person, an event or a circumstance.

### Typical signals

- thanks
- appreciation
- recognition
- acknowledgement

### Neighbouring concepts

- Validation
- Repair

---

# Validation

## Definition

Language seeking, giving or acknowledging legitimacy, recognition or acceptance.

### Typical signals

- asking for approval
- recognising another person
- legitimising an experience

### Neighbouring concepts

- Gratitude
- Vulnerability

---

# Vulnerability

## Definition

Language exposing personal fragility, uncertainty or emotional openness.

### Typical signals

- confession
- uncertainty
- openness
- emotional exposure

### Neighbouring concepts

- Shame
- Validation

---

# Avoidance

## Definition

Language suggesting minimisation, evasion or distancing from an uncomfortable subject.

### Typical signals

- deflection
- minimisation
- rationalisation
- avoidance

### Neighbouring concepts

- Guilt
- Shame

---

# Relationships

The taxonomy is not flat.

Some categories frequently co-occur.

```
                Vulnerability
                 /          \
                /            \
            Shame ---- Self-Criticism
               |               |
               |               |
             Guilt -------- Repair
               |
               |
          Responsibility

Validation -------- Gratitude
```

These relationships are descriptive.

They are not deterministic.

---

# Conceptual model

```
Article
    │
    ▼
Text fragment
    │
    ▼
Lexical marker
    │
    ▼
Occurrence
    │
    ▼
Observation
    │
    ▼
Concept
    │
    ▼
Category
    │
    ▼
Human interpretation
```

The detector stops at **observation**.

Human interpretation begins afterwards.

---

# Language independence

The taxonomy is language-independent.

Example:

```
Concept
    │
    ▼
Guilt
    │
    ├── English language pack
    │      guilt
    │      guilty
    │      self-blame
    │
    ├── French language pack
    │      culpabilité
    │      coupable
    │      je m'en veux
    │
    └── …
```

New languages should not require changes to the taxonomy itself.

Only new language packs.

---

# Design philosophy

The taxonomy should remain:

- conceptually stable;
- linguistically independent;
- explainable;
- extensible;
- transparent.

Adding a new category should require explicit justification.

Adding a new lexical marker should not.

---

# Out of scope

The taxonomy does not attempt to classify:

- personality;
- mental health;
- intentions;
- sincerity;
- truthfulness;
- psychological diagnoses.

Feeligrane analyses discourse.

It does not analyse people.

---

# Future evolution

Future versions may introduce:

- hierarchical subcategories;
- confidence weighting;
- rhetorical patterns;
- discourse-level structures;
- temporal evolution across a corpus.

These extensions should preserve the principles defined in this document.
