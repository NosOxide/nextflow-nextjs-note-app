"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import NoteEditor from "@/components/NoteEditor";
import { getNote, saveNote, deleteNote } from "@/lib/notes";

export default function NoteDetailPage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const note = getNote(id);
    if (!note) {
      setNotFound(true);
      return;
    }
    setTitle(note.title);
    setContent(note.content);
  }, [id]);

  const handleSave = () => {
    if (!title.trim()) return;
    saveNote({ id, title: title.trim(), content: content.trim() });
    router.push("/");
  };

  const handleDelete = () => {
    deleteNote(id);
    router.push("/");
  };

  if (notFound) {
    return (
      <div className="text-center py-20 text-gray-400">
        <p className="text-4xl mb-3">🔍</p>
        <p className="text-lg">Note not found.</p>
        <button onClick={() => router.push("/")} className="mt-4 text-blue-500 hover:underline text-sm">
          ← Back to notes
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Edit Note</h1>
      <NoteEditor
        title={title}
        content={content}
        onTitleChange={setTitle}
        onContentChange={setContent}
      />
      <div className="flex gap-3 mt-4">
        <button
          onClick={handleSave}
          disabled={!title.trim()}
          className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Save Changes
        </button>
        <button
          onClick={() => router.push("/")}
          className="px-5 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition-colors font-medium"
        >
          Cancel
        </button>
        <button
          onClick={handleDelete}
          className="ml-auto px-5 py-2 rounded-lg border border-red-300 text-red-600 hover:bg-red-50 transition-colors font-medium"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
