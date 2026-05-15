export interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  pinned?: boolean;
}

const STORAGE_KEY = "nextflow_notes";

function readStorage(): Note[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Note[]) : [];
  } catch {
    return [];
  }
}

function writeStorage(notes: Note[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
}

export function getNotes(): Note[] {
  return readStorage().sort((a, b) => {
    if (a.pinned && !b.pinned) return -1;
    if (!a.pinned && b.pinned) return 1;
    return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
  });
}

export function getNote(id: string): Note | undefined {
  return readStorage().find((n) => n.id === id);
}

export function saveNote(
  input: { id?: string; title: string; content: string }
): Note {
  const notes = readStorage();
  const now = new Date().toISOString();

  if (input.id) {
    const index = notes.findIndex((n) => n.id === input.id);
    if (index !== -1) {
      notes[index] = { ...notes[index], title: input.title, content: input.content, updatedAt: now };
      writeStorage(notes);
      return notes[index];
    }
  }

  const newNote: Note = {
    id: crypto.randomUUID(),
    title: input.title,
    content: input.content,
    createdAt: now,
    updatedAt: now,
  };
  writeStorage([...notes, newNote]);
  return newNote;
}

export function deleteNote(id: string): void {
  writeStorage(readStorage().filter((n) => n.id !== id));
}

export function togglePin(id: string): void {
  const notes = readStorage();
  const note = notes.find((n) => n.id === id);
  if (note) {
    note.pinned = !note.pinned;
    writeStorage(notes);
  }
}
