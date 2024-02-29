// ActivityForm.tsx
import React, { ChangeEvent, useRef } from "react";

interface ActivityFormProps {
  name: string;
  description: string;
  setImage: (file: File | null) => void;
  setName: (name: string) => void;
  setDescription: (description: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

const ActivityForm: React.FC<ActivityFormProps> = ({
  name,
  description,
  setImage,
  setName,
  setDescription,
  handleSubmit,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="m-4 p-4 rounded-lg">
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Name of travel:
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700"
        >
          Description:
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="mt-1 p-2 border border-gray-300 rounded-md w-full h-24"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="image"
          className="block text-sm font-medium text-gray-700"
        >
          Image:
        </label>
        <input
          type="file"
          id="image"
          ref={fileInputRef}
          onChange={handleImageChange}
          accept="image/*"
          required
          className="mt-1 p-2 border border-gray-300 rounded-md"
        />
      </div>
      <button
        type="submit"
        className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Add
      </button>
    </form>
  );
};

export default ActivityForm;
