"use client";

import { useUploadThing } from "@/lib/uploadthing-client";
import { deleteUploadedFile } from "@/lib/actions/upload.action";
import {
  addCollectionDocument,
  removeCollectionDocument,
} from "@/lib/actions/collection.action";
import { useState } from "react";
import { FileText, Trash2, Upload } from "lucide-react";

type Document = {
  id: string;
  name: string;
  url: string;
};

type Props = {
  collectionId: string;
  existing: Document[];
};

export const DocumentUpload = ({ collectionId, existing }: Props) => {
  const [documents, setDocuments] = useState<Document[]>(existing);
  const [loading, setLoading] = useState(false);
  const [deleting, setDeleting] = useState<string | null>(null);

  const { startUpload } = useUploadThing("collectionDocument");

  const handleFiles = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files ?? []);
    if (!files.length) return;

    setLoading(true);
    const res = await startUpload(files);

    if (res) {
      for (const file of res) {
        const doc = await addCollectionDocument({
          collectionId,
          name: file.name,
          url: file.ufsUrl,
        });
        if (doc) setDocuments((prev) => [...prev, doc]);
      }
    }

    setLoading(false);
    e.target.value = "";
  };

  const handleDelete = async (doc: Document) => {
    setDeleting(doc.id);
    await deleteUploadedFile(doc.url);
    await removeCollectionDocument(doc.id);
    setDocuments((prev) => prev.filter((d) => d.id !== doc.id));
    setDeleting(null);
  };

  return (
    <div className="space-y-3">
      {/* Existing documents */}
      {documents.length > 0 && (
        <div className="space-y-2">
          {documents.map((doc) => (
            <div
              key={doc.id}
              className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-xl px-4 py-3"
            >
              <div className="flex items-center gap-3">
                <FileText className="w-4 h-4 text-gray-400 shrink-0" />
                <p className="text-sm font-medium truncate max-w-[200px]">
                  {doc.name}
                </p>
              </div>
              <button
                onClick={() => handleDelete(doc)}
                disabled={deleting === doc.id}
                className="text-red-400 hover:text-red-600 transition-colors disabled:opacity-40"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Upload button */}
      <label className="flex items-center justify-center gap-2 w-full py-3 border-2 border-dashed border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors">
        {loading ? (
          <p className="text-sm text-gray-500">იტვირთება...</p>
        ) : (
          <>
            <Upload className="w-4 h-4 text-gray-400" />
            <p className="text-sm text-gray-500">დოკუმენტის ატვირთვა</p>
          </>
        )}
        <input
          type="file"
          accept="image/*,.pdf"
          multiple
          onChange={handleFiles}
          className="hidden"
          disabled={loading}
        />
      </label>
    </div>
  );
};
