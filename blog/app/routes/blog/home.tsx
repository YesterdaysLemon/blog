
import React from "react";

const posts = [
  {
    id: 1,
    title: "Welcome to My Blog",
    summary: "This is the first post on my new blog. Stay tuned for more updates!",
    date: "2024-06-01",
  },
  {
    id: 2,
    title: "Second Post",
    summary: "Here's another post to show how the blog works.",
    date: "2024-06-02",
  },
];

export default function BlogHome() {
  return (


    <div className="max-w-2xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <ul className="space-y-6">
        {posts.map((post) => (
          <li key={post.id} className="border-b pb-4">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-gray-600 text-sm mb-2">{post.date}</p>
            <p className="text-gray-800">{post.summary}</p>
          </li>
        ))}
      </ul>
    </div>
     
  );
}