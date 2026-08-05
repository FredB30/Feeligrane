# doctrine.md

# Feeligrane Doctrine

> **"The doctrine records what the project is thinking before deciding what it believes."**

*A living journal of the project's ideas, governance and methodology.*

Unlike the Constitution, ADRs or methodological documents, **this document is non-normative**.

Its purpose is to preserve ideas before they become decisions, and to preserve the reasoning that led to those decisions afterwards.

The doctrine is therefore both:

- a laboratory;
- a memory.

---

# Status

Living document.

Every entry must be dated.

Ideas should never silently disappear.

When an idea becomes:

- an Article of the Constitution,
- an ADR,
- or an established methodological rule,

its original discussion should be moved to the archive together with a reference to the document that adopted it.

---

# PART I — Doctrine under development

---

## 2026-08-05

## Towards a constitutional repository

During the conception of Feeligrane, the project progressively evolved from a browser extension into an experiment in AI-assisted software governance.

The repository should not merely contain source code.

It should become the project's institutional memory.

Conversation history is ephemeral.

Repository history is durable.

---

## Repository as collective memory

Humans forget.

AI assistants lose conversational context.

The repository should therefore become the only durable source of project knowledge.

This idea has already been incorporated into:

→ Constitution — Article I.

---

## Normative hierarchy

Current model.

```
CONSTITUTION
        │
SESSION_BOOT
        │
Architecture Decision Records
        │
Methodology
        │
Technical documentation
        │
Roadmap
        │
Source code

──────────────────────────

Doctrine
(non-normative)
```

Doctrine does not create obligations.

It prepares future obligations.

---

## Constitutional review

Future objective.

Every document should be reviewable against higher-level norms.

Whenever a document evolves, its constitutional compatibility should be verified.

Possible future workflow:

Constitution

↓

SESSION_BOOT

↓

ADR

↓

Methodology

↓

README

↓

Code

Potential future automation.

---

## Codification

Current hypothesis.

The repository may eventually generate a consolidated document.

Suggested filename:

PROJECT_CODE.md

Purpose:

Gather every active rule into a single continuously updated document.

The codification would never create norms.

It would merely consolidate them.

Exactly as legal codification does.

---

## Consolidation

PROJECT_CODE.md should always represent the repository's current normative state.

It should never be edited manually.

It should always be generated.

---

## Project state

The project should distinguish between:

"What are the rules?"

and

"Where are we?"

Therefore a second generated document may exist.

Suggested filename:

PROJECT_STATE.md

Containing:

- current sprint
- current milestone
- current objective
- open issues
- technical debt
- next task
- latest release

Operational.

Not normative.

---

## Session recovery

Rather than relying on conversational memory, every development session should begin by reading:

1. SESSION_BOOT.md
2. PROJECT_STATE.md
3. PROJECT_CODE.md
4. Task-specific documentation

This minimises memory dependence.

---

## Documentation as executable knowledge

Documentation should actively support development.

It should reduce the amount of information contributors must remember.

Documentation is part of the software.

---

## AI-native repository

Working concept.

Feeligrane may become an example of a repository intentionally designed for collaboration between humans and multiple AI assistants.

This requires:

- explicit governance;
- explicit architecture;
- explicit terminology;
- explicit methodology.

The repository itself becomes a communication protocol.

---

## Separation of knowledge

The project should always distinguish:

- observations;
- interpretations;
- hypotheses;
- implementation.

Confusing these levels creates both scientific and technical ambiguity.

This principle has since been formalised in:

→ Constitution — Article XIII.

---

## Evolution of ideas

Ideas normally evolve according to the following path:

```
Intuition

↓

Doctrine

↓

ADR

↓

Constitution
```

Not every intuition deserves an ADR.

Not every ADR deserves constitutional status.

---

## Governance model

Future contributors—human or AI—should never require privileged historical knowledge.

Everything essential should be recoverable from the repository itself.

---

## Potential improvements

Ideas currently under consideration.

- Automatic constitutional compliance checks.
- Automatic generation of PROJECT_CODE.md.
- Automatic generation of PROJECT_STATE.md.
- Mandatory references from documentation to ADRs.
- Automatic cross-references between Constitution, ADRs and methodology.
- Detection of contradictory documentation.
- Detection of obsolete ADRs.
- Traceability from source code to ADRs.
- Automatic release checklist derived from SESSION_BOOT.md.
- Repository health dashboard.
- Constitution-aware documentation linter.

---

## Current reflections

The project appears to be evolving towards a general methodology for AI-assisted software development.

This possibility deserves continued observation before becoming part of the project's explicit objectives.

---

# PART II — Archived doctrine

No archived doctrine at this time.

When a doctrinal idea becomes:

- a constitutional principle,
- an ADR,
- or a stable methodological rule,

its original entry should be moved here together with references to the documents that adopted it.

The archive preserves the intellectual history of the project.

It should never be rewritten.
