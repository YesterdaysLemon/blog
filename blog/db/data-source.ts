import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/User";
import { Post } from "./entity/Post";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "test",
  password: "test",
  database: "test",
  synchronize: true,
  logging: false,
  entities: [User, Post],
  migrations: [],
  subscribers: [],
});

try {
  await AppDataSource.initialize()
} catch (error) {
  console.log(error)
}

export const PostRepository = AppDataSource.getRepository(Post);
export const UserRepository = AppDataSource.getRepository(User);