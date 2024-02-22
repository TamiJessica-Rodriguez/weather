import { mockedPosts } from "./posts";

export default function TripOptions() {
  return (
    <div className="flex flex-col gap-8">
      {mockedPosts.map((post) => (
        <div key="post.id">
          <img src={post.url} className="w-full pb-2" />
          <h2 className=" px-2 text-xl font-bold">{post.title}</h2>
          <p className="px-2">{post.content}</p>
        </div>
      ))}
    </div>
  );
}
