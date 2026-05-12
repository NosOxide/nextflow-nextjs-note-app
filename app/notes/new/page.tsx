"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import NoteEditor from "@/components/NoteEditor";
import { saveNote } from "@/lib/notes";

export default function NewNotePage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSave = () => {
    if (!title.trim()) return;
    saveNote({ title: title.trim(), content: content.trim() });
    router.push("/");
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">New Note</h1>
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
          Save Note
        </button>
        <button
          onClick={() => router.push("/")}
          className="px-5 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition-colors font-medium"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
