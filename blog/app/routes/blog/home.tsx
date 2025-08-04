import { Link, useLoaderData } from "react-router";
import type { Route } from "../../+types/root";
import React from "react";

import { getPostRepository } from "db/data-source";
import type { Post } from "db/entity/Post";

export async function clientLoader() {
  const postRepository = await getPostRepository();
  const posts = await postRepository?.find();
  return { posts };
}

const fallbackData = {
  posts: [
    {
      id: 1,
      title: "Welcome to My Blog",
      content:
        "This is the first post on my new blog. Stay tuned for more updates!",
      createdAt: new Date(),
    },
  ],
};

export default function BlogHome(loaderData: Route.ComponentProps) {
  const { posts } = (loaderData as unknown) || fallbackData;
  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <ul className="space-y-6">
        {posts.map((post: Post) => (
          <li key={post.id} className="border-b pb-4">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-gray-600 text-sm mb-2">
              {post.createdAt?.toLocaleDateString()}
            </p>
            <p className="text-gray-800">{post.content}</p>
            <Link to={`/blog/${post.id}`}>Read more</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
