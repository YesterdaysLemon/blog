import { Link, useLoaderData } from "react-router";
import type { Route } from "../../+types/root";
import React from "react";

import { getPostRepository } from "db/data-source";

export async function clientLoader({ params }: Route.ComponentProps) {
  const { postId } = params;
  const postRepository = await getPostRepository();
  const post = await postRepository?.findOne({ where: { id: Number(postId) } });
  return { post };
}
const fallbackData = { post: null };
export default function Post(loaderData: Route.ComponentProps) {
  const { post } = (loaderData as unknown) || fallbackData;
  return (
    <div>
      <h1>{post?.title}</h1>
      <p>{post?.content}</p>
      <Link to="/blog">Back to blog</Link>
    </div>
  );
}
