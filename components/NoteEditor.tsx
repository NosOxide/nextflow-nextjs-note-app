interface NoteEditorProps {
  title: string;
  content: string;
  onTitleChange: (value: string) => void;
  onContentChange: (value: string) => void;
}

export default function NoteEditor({
  title,
  content,
  onTitleChange,
  onContentChange,
}: NoteEditorProps) {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <label htmlFor="note-title" className="block text-sm font-medium text-gray-700 mb-1">
          Title
        </label>
        <input
          id="note-title"
          type="text"
          value={title}
          onChange={(e) => onTitleChange(e.target.value)}
          placeholder="Note title"
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label htmlFor="note-content" className="block text-sm font-medium text-gray-700 mb-1">
          Content
        </label>
        <textarea
          id="note-content"
          value={content}
          onChange={(e) => onContentChange(e.target.value)}
          placeholder="Write your note here…"
          rows={10}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
        />
      </div>
    </div>
  );
}
