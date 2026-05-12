import Link from "next/link";
import { Note } from "@/lib/notes";

interface NoteCardProps {
  note: Note;
  onDelete: (id: string) => void;
}

export default function NoteCard({ note, onDelete }: NoteCardProps) {
  const snippet = note.content.length > 100
    ? note.content.slice(0, 100) + "…"
    : note.content;

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col gap-2 hover:shadow-md transition-shadow">
      <Link href={`/notes/${note.id}`} className="flex-1">
        <h2 className="font-semibold text-gray-900 text-base leading-snug hover:text-blue-600 transition-colors">
          {note.title}
        </h2>
        {snippet && (
          <p className="text-gray-500 text-sm mt-1 leading-relaxed">{snippet}</p>
        )}
      </Link>
      <div className="flex items-center justify-between mt-1">
        <span className="text-xs text-gray-400">
          {new Date(note.updatedAt).toLocaleDateString()}
        </span>
        <button
          onClick={() => onDelete(note.id)}
          className="text-xs text-red-400 hover:text-red-600 transition-colors"
          aria-label="Delete note"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
