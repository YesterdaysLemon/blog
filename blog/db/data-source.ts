"use server";
import { DataSource, Repository } from "typeorm";
import type { DataSourceOptions } from "typeorm";
import { User } from "./entity/User";
import { Post } from "./entity/Post";

const postgressOptions: DataSourceOptions = {
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
};

let AppDataSource: DataSource | null = null;

export const getDataSource = async () => {
  try {
    if (!AppDataSource) {
      AppDataSource = new DataSource(postgressOptions);
    }

    if (!AppDataSource.isInitialized) {
      await AppDataSource.initialize();
    }
  } catch (error) {
    //console.error(error); 
  }
  return AppDataSource;
};

export const getPostRepository = async (): Promise<Repository<Post> | undefined> => {
  const dataSource = await getDataSource();
  return dataSource?.getRepository(Post) as Repository<Post> | undefined;
};
export const getUserRepository = async (): Promise<Repository<User> | undefined > => {
  const dataSource = await getDataSource();
  return dataSource?.getRepository(User) as Repository<User> | undefined;
};
