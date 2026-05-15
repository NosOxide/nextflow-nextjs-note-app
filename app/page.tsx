"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import NoteCard from "@/components/NoteCard";
import { getNotes, deleteNote, togglePin, Note } from "@/lib/notes";

export default function HomePage() {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    setNotes(getNotes());
  }, []);

  const handleDelete = (id: string) => {
    deleteNote(id);
    setNotes(getNotes());
  };

  const handlePin = (id: string) => {
    togglePin(id);
    setNotes(getNotes());
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">My Notes</h1>
        <Link
          href="/notes/new"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
        >
          + New Note
        </Link>
      </div>

      {notes.length === 0 ? (
        <div className="text-center py-20 text-gray-400">
          <p className="text-4xl mb-3">📄</p>
          <p className="text-lg">No notes yet.</p>
          <p className="text-sm mt-1">
            <Link href="/notes/new" className="text-blue-500 hover:underline">
              Create your first note
            </Link>
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {notes.map((note) => (
            <NoteCard key={note.id} note={note} onDelete={handleDelete} onPin={handlePin} />
          ))}
        </div>
      )}
    </div>
  );
}
