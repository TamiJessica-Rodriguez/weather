import React, { useState } from "react";
import ActivityForm from "./ActivityForm";

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
      setImage(null);
    }
  };

  return (
    <div className="md:h-screen text-blue-950 font-medium">
      <ActivityForm
        name={name}
        description={description}
        setImage={setImage}
        setName={setName}
        setDescription={setDescription}
        handleSubmit={handleSubmit}
      />
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
