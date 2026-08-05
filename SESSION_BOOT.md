# SESSION_BOOT.md

> Mandatory reading before every development session.

---

# Mission

Feeligrane is an open-source browser extension that helps readers identify and annotate affective patterns in long-form writing.

The project studies texts.

It never analyses or diagnoses people.

Conversation history is NOT the source of truth.

The repository is.

---

# Session startup protocol

Before writing a single line of code:

1. Read README.md.
2. Read CHANGELOG.md.
3. Read docs/session-log.md.
4. Read docs/roadmap.md.
5. Read every ADR created since the previous session.
6. Read any documentation related to the current task.
7. Review open GitHub Issues if available.

Only then begin working.

---

# Guiding principles

## Architecture

- Prefer simple solutions.
- Local-first whenever possible.
- AI must remain optional.
- Deterministic rules before statistical inference.
- Separate rules from code.
- Keep the project understandable.

---

## Scientific methodology

Annotations concern texts.

Never people.

Every annotation must be:

- reproducible
- explainable
- reviewable
- contestable

Avoid over-interpretation.

---

## Development philosophy

One sprint.

One objective.

One deliverable.

One commit.

Every version should be usable.

---

# Coding philosophy

Prefer:

- plain TypeScript
- WebExtension standards
- YAML configuration
- JSON exports
- Markdown documentation

Avoid unnecessary frameworks.

Every dependency must justify its existence.

---

# Repository structure

README.md
General entry point

CHANGELOG.md
Project history

SESSION_BOOT.md
Session startup protocol

docs/
Documentation

research/
Research material

extension/
Browser extension

tests/
Validation

samples/
Reference material

---

# During the session

Always explain:

- why a solution is chosen
- why alternatives are rejected

Whenever architecture changes:

→ create an ADR.

Whenever terminology evolves:

→ update glossary.md.

Whenever priorities change:

→ update roadmap.md.

Whenever a sprint ends:

→ update session-log.md.

---

# End-of-session checklist

□ Documentation updated

□ Changelog updated

□ Session log updated

□ ADR written if necessary

□ Next sprint identified

□ Repository left in a coherent state

---

# Current milestone

Current release:
v0.0.1 "Thread"

Objective:

Create the first working browser extension.

Current priorities:

1. Manifest V3
2. Popup
3. Detect Substack
4. Read article
5. First release

---

# Golden Rule

Never optimise for the current conversation.

Optimise for a repository that will still make sense one year from now.
