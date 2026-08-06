# doctrine.md

# Feeligrane Doctrine

> **"The doctrine records what the project is thinking before deciding what it believes."**

*A living journal of the project's governance, methodology and philosophy.*

Unlike the Constitution, ADRs and methodological documents, this document is **non-normative**.

Its role is to preserve ideas before they become decisions, to document the reasoning behind those decisions, and to archive the intellectual history of the project.

---

# Status

This is a living document.

Every entry shall be dated.

Ideas shall never silently disappear.

When an idea becomes:

- a constitutional principle;
- an Architecture Decision Record (ADR);
- or an established methodological rule;

its original discussion shall be moved to the archive together with references to the documents that adopted it.

---

# PART I — Doctrine under development

---

## 2026-08-06

# Towards a constitutional repository

Feeligrane began as a browser extension.

It is progressively becoming an experiment in AI-assisted software governance.

The repository should not merely contain source code.

It should become the project's institutional memory.

Conversation history is ephemeral.

Repository history is durable.

---

# Repository as collective memory

Humans forget.

AI assistants lose conversational memory.

Therefore the repository itself should become the only durable memory of the project.

Important knowledge should never exist exclusively inside a conversation.

This idea has been incorporated into:

→ Constitution — Article I.

---

# Normative hierarchy

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

# Constitutional review

Every document should eventually be reviewable against higher-level norms.

Whenever a document changes, contributors should verify that it remains compatible with higher-level documents.

Possible review order:

CONSTITUTION

↓

SESSION_BOOT

↓

ADR

↓

Methodology

↓

README

↓

Source code

This verification may eventually become partially automated.

---

# Codification and consolidation

Legal drafting distinguishes two complementary operations.

**Codification** organises rules into a coherent structure.

**Consolidation** produces a single up-to-date version integrating every applicable modification.

Feeligrane should adopt the same distinction.

---

# PROJECT_CODE.md

Working hypothesis.

A future generated document named `PROJECT_CODE.md` may provide a consolidated view of every active rule contained in the repository.

It would gather the current content of:

- CONSTITUTION.md
- SESSION_BOOT.md
- active ADRs
- active methodological rules

PROJECT_CODE.md would never become a new norm.

It would merely consolidate existing norms.

It should never be edited manually.

---

# PROJECT_STATE.md

The project should distinguish two independent questions.

"What are the project's rules?"

and

"Where is the project today?"

A second generated document may therefore exist.

Suggested filename:

PROJECT_STATE.md

It could contain:

- current milestone;
- current sprint;
- current objective;
- open issues;
- technical debt;
- next task;
- latest release.

PROJECT_STATE.md is operational.

It is not normative.

---

# Session recovery

Rather than relying on conversational memory, contributors should recover context through a deterministic reading protocol.

Suggested order:

1. SESSION_BOOT.md
2. PROJECT_STATE.md
3. PROJECT_CODE.md
4. Task-specific documentation

Purpose of each step:

SESSION_BOOT

→ understand how to work.

PROJECT_STATE

→ understand where the project currently stands.

PROJECT_CODE

→ recover every active project rule.

Task documentation

→ recover local context.

This approach minimises dependence on conversational memory.

---

# Detecting inconsistencies

PROJECT_CODE.md becomes useful not only because it consolidates norms.

It also helps detect inconsistencies.

If a specialised document contradicts PROJECT_CODE.md, one of two situations exists.

Either:

- PROJECT_CODE.md has not been regenerated;

or

- an inconsistency has entered the repository.

This mechanism improves long-term coherence.

---

# Documentation as executable knowledge

Documentation should actively support future development.

It should reduce the amount of information contributors must remember.

Documentation is part of the software.

---

# AI-native repository

Feeligrane may become an example of a repository intentionally designed for collaboration between humans and multiple AI assistants.

The repository should remain understandable regardless of which contributor continues the work.

The repository itself becomes a communication protocol.

---

# Separation of knowledge

The project should always distinguish:

- observations;
- interpretations;
- hypotheses;
- implementation.

Confusing these levels creates both scientific and technical ambiguity.

This principle has since been incorporated into:

→ Constitution — Article XIII.

---

# General transparency

Current doctrinal proposal.

The following constitutional principle deserves further consideration.

> **"The project shall remain inspectable at every level: its code, its architecture, its methodology and its governance."**

Transparency should not stop at source code.

The project's reasoning, architecture, methodology and governance should remain equally inspectable.

No constitutional decision yet.

---

# Evolution of ideas

Ideas should normally evolve according to the following path.

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

# Governance model

Future contributors—human or AI—should never require privileged historical knowledge.

Everything essential should be recoverable from the repository itself.

---

# Foundational documents

Current understanding.

Each foundational document answers one primary question.

| Document | Primary question |
|----------|------------------|
| CONSTITUTION.md | What is the project? |
| SESSION_BOOT.md | How should development begin? |
| README.md | How is the project presented? |
| doctrine.md | How is the project thinking? |
| CHANGELOG.md | How has the project evolved? |

These documents should complement one another.

They should not duplicate one another.

---

# Editorial discipline

As the repository grows, its quality will depend less on the number of documents than on the clarity of their respective purposes.

Before creating or substantially modifying a document, contributors should ask three questions.

1. Is this document normative or non-normative?

2. What single question is this document supposed to answer?

3. Does another document already answer that question?

If the answer to the third question is "yes", contributors should first consider moving, consolidating or removing content before creating new documentation.

Repository growth should favour coherence over accumulation.

---

# Documentation versioning

Foundational documents should evolve according to the following convention.

**v0.x**

Exploration and discovery.

Ideas remain fluid.

**v1.0**

First stable version.

The document has a clearly defined scope and structure.

**v1.x**

Corrections, clarifications and improvements.

No change to the document's philosophy.

**v2.0**

Significant conceptual evolution.

The document's role or governing principles change.

---

# Potential future improvements

Ideas currently under observation.

- Automatic constitutional compliance checks.
- Automatic generation of PROJECT_CODE.md.
- Automatic generation of PROJECT_STATE.md.
- Automatic cross-references between constitutional articles, ADRs and methodology.
- Detection of contradictory documentation.
- Detection of obsolete ADRs.
- Traceability from source code to ADRs.
- Repository health dashboard.

No decision has yet been taken.

---

# PART II — Archived doctrine

No archived doctrine at this time.

When a doctrinal idea becomes:

- a constitutional principle;
- an ADR;
- or a stable methodological rule;

its original discussion should be moved here together with references to the documents that adopted it.

The archive preserves the intellectual history of the project.

It should never be rewritten.
