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
        <div className="flex items-center justify-between mb-1">
          <label htmlFor="note-content" className="text-sm font-medium text-gray-700">
            Content
          </label>
          <p className="text-xs text-gray-400">
            {content.length} character{content.length !== 1 ? 's' : ''}
          </p>
        </div>
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
