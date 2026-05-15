---
name: "Feature Request Refiner"
description: "Turn a short feature idea into a build-ready implementation prompt for the Next.js note app"
argument-hint: "Describe the feature idea"
agent: "ask"
---

Turn the user's short feature request into a build-ready prompt for GitHub Copilot.

Return these sections:
1. Goal
2. User-facing behavior
3. Files to inspect first
4. Acceptance criteria
5. Validation checklist

Keep the result concise and tailored to this Next.js note app.
Prefer inspecting these files first when relevant:
- app/page.tsx
- components/NoteCard.tsx
- components/NoteEditor.tsx
- lib/notes.ts