"use client";

import { useUploadThing } from "@/lib/uploadthing-client";
import { deleteUploadedFile } from "@/lib/actions/upload.action";
import { useState } from "react";
import { ImageIcon, X } from "lucide-react";
import Image from "next/image";

type Props = {
  value: string;
  onChange: (url: string) => void;
};

export const ImageUpload = ({ value, onChange }: Props) => {
  const [preview, setPreview] = useState<string>(value);
  const [loading, setLoading] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const { startUpload } = useUploadThing("collectionImage");

  const handleFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setLoading(true);
    const res = await startUpload([file]);
    if (res?.[0]?.ufsUrl) {
      setPreview(res[0].ufsUrl);
      onChange(res[0].ufsUrl);
    }
    setLoading(false);
  };

  const handleRemove = async () => {
    if (!preview) return;
    setDeleting(true);
    await deleteUploadedFile(preview);
    setPreview("");
    onChange("");
    setDeleting(false);
  };

  return (
    <div className="space-y-2">
      {preview ? (
        <div className="relative w-full h-48 rounded-xl overflow-hidden border border-gray-200">
          <Image src={preview} alt="preview" fill className="object-cover" />
          <button
            type="button"
            onClick={handleRemove}
            disabled={deleting}
            className="absolute top-2 right-2 bg-white rounded-full p-1 shadow disabled:opacity-50"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <label className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors">
          {loading ? (
            <p className="text-sm text-gray-500">იტვირთება...</p>
          ) : (
            <>
              <ImageIcon className="w-8 h-8 text-gray-400 mb-2" />
              <p className="text-sm text-gray-500">სურათის ატვირთვა</p>
              <p className="text-xs text-gray-400 mt-1">
                PNG, JPG, WEBP · მაქს 4MB
              </p>
            </>
          )}
          <input
            type="file"
            accept="image/*"
            onChange={handleFile}
            className="hidden"
            disabled={loading}
          />
        </label>
      )}
    </div>
  );
};
