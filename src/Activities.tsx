import React, { ChangeEvent, useRef, useState } from "react";

interface ActivityPost {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
}

const Activity: React.FC = () => {
  const [posts, setPosts] = useState<ActivityPost[]>([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (image) {
      const newPost: ActivityPost = {
        id: posts.length + 1,
        name,
        description,
        imageUrl: URL.createObjectURL(image),
      };
      setPosts((prevPosts) => [...prevPosts, newPost]);

      // Reset the form
      setName("");
      setDescription("");
      if (fileInputRef.current) fileInputRef.current.value = "";
      setImage(null);
    }
  };

  return (
    <div className="md:h-screen">
      <form
        onSubmit={handleSubmit}
        className="m-4 p-4 border border-gray-300 rounded-lg"
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Resans namn:
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
            Beskrivning:
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
            Bild:
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
          Lägg till post
        </button>
      </form>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="m-4 p-4 border border-gray-200 rounded-lg"
          >
            <h2 className="text-lg font-semibold">{post.name}</h2>
            <p className="text-gray-700">{post.description}</p>
            <img
              src={post.imageUrl}
              alt={post.name}
              className="mt-2 max-w-full h-auto rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activity;
