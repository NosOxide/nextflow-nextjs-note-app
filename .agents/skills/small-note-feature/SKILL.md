---
name: small-note-feature
description: "Add small features to the Next.js note app. Use for note counter, empty state message, list sorting, and small UI behavior changes."
argument-hint: "Describe the small note app feature you want to add"
---

# Small Note Feature

Use this skill when you need to add a small feature to the Next.js note app without changing the overall architecture.

## Procedure
1. Inspect these files first when relevant:
   - app/page.tsx
   - components/NoteCard.tsx
   - components/NoteEditor.tsx
   - lib/notes.ts
2. Keep the existing UI and naming style consistent.
3. Prefer the smallest possible change that satisfies the request.
4. After editing, run `npm run lint` before finishing.
5. Summarize what changed and how to verify it in the browser.