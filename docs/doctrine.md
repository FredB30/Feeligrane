# doctrine.md

# Feeligrane Doctrine

> **"The doctrine records what the project is thinking before deciding what it believes."**

*A living journal of the project's governance, methodology and philosophy.*

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

its original discussion should be moved to the archive together with references to the document that adopted it.

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

This principle has already been adopted in:

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

Every document should eventually be reviewable against higher-level norms.

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

Possible long-term automation.

---

## Codification

Working hypothesis.

The repository may eventually generate a consolidated document.

Suggested filename:

PROJECT_CODE.md

Its purpose would be to consolidate every active rule.

It would never create norms.

It would simply codify them.

---

## Consolidation

PROJECT_CODE.md should always represent the repository's current normative state.

It should never be edited manually.

Only generated.

---

## Project state

The project should distinguish two questions.

"What are the project's rules?"

and

"Where is the project today?"

A separate generated document may therefore exist.

Suggested filename:

PROJECT_STATE.md

Containing:

- current sprint
- milestone
- objective
- open issues
- technical debt
- next task
- latest release

Operational.

Not normative.

---

## Session recovery

Development sessions should minimise dependence on conversational memory.

Suggested reading order.

1. SESSION_BOOT.md
2. PROJECT_STATE.md
3. PROJECT_CODE.md
4. Task-specific documentation

---

## Documentation as executable knowledge

Documentation should actively support future development.

It should reduce the amount of information contributors must remember.

Documentation is part of the software.

---

## AI-native repository

Working concept.

Feeligrane may become an example of a repository intentionally designed for collaboration between humans and multiple AI assistants.

Such a repository should remain understandable regardless of which contributor—human or AI—continues the work.

---

## Separation of knowledge

The project should always distinguish:

- observations;
- interpretations;
- hypotheses;
- implementation.

Confusing these levels creates both scientific and technical ambiguity.

This principle has since been incorporated into:

→ Constitution — Article XIII.

---

## General transparency

Current doctrinal proposal.

The following constitutional principle deserves further consideration:

> **"The project shall remain inspectable at every level: its code, its architecture, its methodology and its governance."**

The project's transparency should not stop at source code.

Its reasoning, methodology, architectural choices and governance should remain equally inspectable.

No constitutional decision yet.

---

## Evolution of ideas

Ideas normally evolve according to the following path.

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

## Foundational documents

Current understanding.

Each foundational document answers a different question.

| Document | Purpose |
|----------|---------|
| CONSTITUTION.md | What is the project? |
| SESSION_BOOT.md | How should development begin? |
| README.md | How is the project presented? |
| doctrine.md | How is the project thinking? |
| CHANGELOG.md | How has the project evolved? |

These documents should remain complementary.

None should duplicate another.

---

## Potential future improvements

Current ideas under observation.

- Automatic constitutional compliance checks.
- Automatic generation of PROJECT_CODE.md.
- Automatic generation of PROJECT_STATE.md.
- Automatic documentation cross-references.
- Detection of contradictory documentation.
- Detection of obsolete ADRs.
- Traceability from source code to ADRs.
- Repository health dashboard.

No decision yet.

---

# PART II — Archived doctrine

No archived doctrine at this time.

When a doctrinal idea becomes:

- a constitutional principle;
- an ADR;
- or a stable methodological rule,

its original discussion should be moved here together with references to the documents that adopted it.

The archive preserves the project's intellectual history.

It should never be rewritten.
