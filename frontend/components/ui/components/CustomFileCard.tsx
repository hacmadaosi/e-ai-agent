"use client";

interface FileCardProps {
  file: File;
  onRemove?: () => void;
}

export default function FileCard({ file, onRemove }: FileCardProps) {
  const fileSizeKB = (file.size / 1024).toFixed(1);

  return (
    <div className="flex items-center justify-between gap-3 rounded-lg border bg-gray-50 px-3 py-2 text-sm">
      {/* File info */}
      <div className="min-w-0">
        <div className="truncate font-medium">
          {file.name}
        </div>
        <div className="text-xs text-gray-500">
          {fileSizeKB} KB
        </div>
      </div>

      {/* Remove button */}
      {onRemove && (
        <button
          type="button"
          onClick={onRemove}
          className="shrink-0 text-gray-400 hover:text-red-500"
        >
          ✕
        </button>
      )}
    </div>
  );
}
