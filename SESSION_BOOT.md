# SESSION_BOOT.md

> **Mandatory reading before every development session.**

If the repository is the project's memory, **SESSION_BOOT.md is its reboot sequence**.

This document defines the operational protocol for recovering context before contributing to Feeligrane.

It does not replace the Constitution.

It implements it.

---

# Purpose

The objective of this protocol is to ensure that any contributor—human or AI—can resume development without relying on conversational memory.

The repository is the project's source of truth.

Conversation history is not.

---

# Startup protocol

Complete the following steps **before writing code, proposing architecture or modifying documentation.**

---

## Step 1 — Read the Constitution

Read:

`CONSTITUTION.md`

Purpose:

Understand the project's highest-level principles.

Every subsequent decision shall remain compatible with the Constitution.

---

## Step 2 — Read SESSION_BOOT

Purpose:

Recover the project's working protocol.

Understand how contributions are expected to proceed.

---

## Step 3 — Read PROJECT_STATE (when available)

Purpose:

Understand where the project currently stands.

Recover:

- current milestone;
- current sprint;
- active objectives;
- technical debt;
- next deliverable.

If PROJECT_STATE.md does not yet exist, obtain this information from:

- CHANGELOG.md
- docs/session-log.md
- docs/roadmap.md

---

## Step 4 — Read PROJECT_CODE (when available)

Purpose:

Recover the project's active consolidated rules.

PROJECT_CODE.md is a generated consolidation.

It never creates norms.

It reflects them.

If PROJECT_CODE.md does not yet exist, recover active rules by reading:

- CONSTITUTION.md
- active ADRs
- methodology
- relevant documentation

---

## Step 5 — Read task-specific documentation

Only now read documentation directly related to the current task.

Examples:

- methodology.md
- taxonomy.md
- glossary.md
- vision.md
- relevant ADRs
- GitHub Issues

---

# Working principles

During every session:

- prefer simplicity;
- explain important choices;
- preserve architectural coherence;
- respect the project's normative hierarchy;
- avoid unnecessary complexity.

Never optimise for the current conversation.

Optimise for the repository.

---

# Documentation responsibilities

Documentation is part of the deliverable.

Whenever work changes:

- architecture;
- methodology;
- terminology;
- governance;

the corresponding documentation should also be updated.

---

# Required updates

When appropriate:

Architecture changes

→ create or update an ADR.

Terminology changes

→ update `glossary.md`.

Methodological changes

→ update `methodology.md`.

Roadmap changes

→ update `roadmap.md`.

Session completed

→ update `docs/session-log.md`.

Release completed

→ update `CHANGELOG.md`.

---

# Constitutional consistency

Before considering work complete, verify that the proposed changes remain compatible with:

1. CONSTITUTION.md
2. SESSION_BOOT.md
3. Active ADRs

Lower-level documents shall never contradict higher-level documents.

---

# Repository philosophy

The repository should remain understandable without privileged historical knowledge.

Future contributors should recover context by reading documentation.

Not by reconstructing past conversations.

---

# Development philosophy

Prefer:

- incremental progress;
- deterministic behaviour;
- explainable systems;
- local-first design;
- explicit architecture.

Avoid:

- unnecessary dependencies;
- opaque reasoning;
- premature optimisation;
- feature creep.

---

# End-of-session checklist

Before ending the session, verify:

- [ ] Code remains coherent.
- [ ] Documentation matches implementation.
- [ ] Constitutional consistency has been preserved.
- [ ] ADR written if required.
- [ ] CHANGELOG updated if required.
- [ ] Session log updated.
- [ ] Next sprint identified.

Leave the repository in a state where another contributor can continue immediately.

---

# Reading order summary

```
CONSTITUTION
        ↓
SESSION_BOOT
        ↓
PROJECT_STATE
        ↓
PROJECT_CODE
        ↓
Task-specific documentation
        ↓
Implementation
```

Each step answers a different question.

| Document | Purpose |
|----------|---------|
| CONSTITUTION | What principles govern the project? |
| SESSION_BOOT | How should a contribution begin? |
| PROJECT_STATE | Where does the project currently stand? |
| PROJECT_CODE | Which consolidated rules are currently in force? |
| Task documentation | What knowledge is required for this task? |

---

# Golden Rule

The goal of every session is not merely to produce code.

It is to leave the repository more understandable than it was at the beginning of the session.
