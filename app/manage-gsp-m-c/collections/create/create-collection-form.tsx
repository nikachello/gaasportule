"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { City, SportCategory } from "@/lib/generated/prisma/client";
import { createCollection } from "@/lib/actions/collection.action";
import { ImageUpload } from "@/components/upload/image-upload";

type Props = {
  cities: City[];
  sports: SportCategory[];
};

export const CreateCollectionForm = ({ cities, sports }: Props) => {
  console.log(cities, sports);

  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    title: "",
    description: "",
    howWillHelp: "",
    goal: "",
    imageUrl: "",
    cityId: cities[0]?.id ?? "",
    sportId: sports[0]?.id ?? "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const result = await createCollection({
      ...form,
      goal: Number(form.goal) || 0, // safe conversion
    });

    if (result.error) {
      setError(result.error);
      setLoading(false);
      return;
    }

    router.push("/manage-gsp-m-c/collections");
  };

  const inputClass =
    "w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black transition-all";

  const labelClass = "text-sm font-medium text-gray-700";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="space-y-2">
        <label className={labelClass}>სათაური</label>
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          required
          placeholder="ქველმოქმედების სათაური"
          className={inputClass}
        />
      </div>

      <div className="space-y-2">
        <label className={labelClass}>აღწერა</label>
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="მოკლე აღწერა"
          rows={3}
          className={`${inputClass} resize-none`}
        />
      </div>

      <div className="space-y-2">
        <label className={labelClass}>როგორ დავეხმარებით</label>
        <textarea
          name="howWillHelp"
          value={form.howWillHelp}
          onChange={handleChange}
          placeholder="დეტალური გეგმა"
          rows={3}
          className={`${inputClass} resize-none`}
        />
      </div>

      <div className="space-y-2">
        <label className={labelClass}>მიზანი (₾)</label>
        <input
          name="goal"
          type="number"
          value={form.goal}
          onChange={handleChange}
          required
          min={1}
          step={1} // enforce integer
          placeholder="3000"
          className={inputClass}
        />
      </div>

      <div className="space-y-2">
        <label className={labelClass}>სურათი</label>
        <ImageUpload
          value={form.imageUrl}
          onChange={(url) => setForm((prev) => ({ ...prev, imageUrl: url }))}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className={labelClass}>ქალაქი</label>
          <select
            name="cityId"
            value={form.cityId}
            onChange={handleChange}
            className={inputClass}
          >
            {cities.map((city) => (
              <option key={city.id} value={city.id}>
                {city.name}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label className={labelClass}>სპორტი</label>
          <select
            name="sportId"
            value={form.sportId}
            onChange={handleChange}
            className={inputClass}
          >
            {sports.map((sport) => (
              <option key={sport.id} value={sport.id}>
                {sport.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {error && <p className="text-sm text-red-500">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-black text-white py-3 rounded-xl text-sm font-semibold disabled:opacity-40 hover:bg-gray-800 transition-colors"
      >
        {loading ? "იქმნება..." : "შექმნა"}
      </button>
    </form>
  );
};
