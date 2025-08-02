import { AppDataSource } from "db/data-source";
import { User } from "db/entity/User";
import { Post } from "db/entity/Post";
import React, { useState } from "react";
import { Button } from "~/components/ui/button";

export default function Home() {
  const [count, setCount] = useState(0);
  AppDataSource.initialize()
  .then(async () => {
    console.log("Inserting a new user into the database...");
    const user = new User();
    user.firstName = "Timber";
    user.lastName = "Saw";
    const post = new Post();
    post.title = "Hello World";
    post.content = "This is a test post";
    post.createdAt = new Date();
    post.updatedAt = new Date();
    post.published = true;
    post.author = user;
    user.posts = [post];
    await AppDataSource.manager.save(user);
    console.log("Saved a new user with id: " + user.id);

    console.log("Loading users from the database...");
    const users = await AppDataSource.manager.find(User);
    console.log("Loaded users: ", users);

    console.log(
      "Here you can setup and run express / fastify / any other framework."
    );
  })
  .catch((error) => console.log(error));

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Hello World</h1>
      <Button variant="outline" onClick={() => setCount(count + 1)}>
        Click me
      </Button>
      <p>Count: {count}</p>
    </div>
  );
}
