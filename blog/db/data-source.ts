"use server";
import { DataSource, Repository } from "typeorm";
import type { DataSourceOptions } from "typeorm";
import { User } from "./entity/User";
import { Post } from "./entity/Post";

let postgressOptions: DataSourceOptions = {
  type: "postgres",
  host: "localhost",
  port: 5432,
  synchronize: true,
  logging: false,
  entities: [User, Post],
  migrations: [],
  subscribers: [],
};

if (import.meta.env.VITE_MODE === "DEVELOPMENT") {
  console.log("DEVELOPMENT");
  postgressOptions = {
    ...postgressOptions,
    username: import.meta.env.VITE_DEVELOPMENT_DB_USERNAME,
    password: import.meta.env.VITE_DEVELOPMENT_DB_PASSWORD,
    database: import.meta.env.VITE_DEVELOPMENT_DB
  };
} else if (import.meta.env.VITE_MODE === "PRODUCTION") {
  console.log("PRODUCTION");
} else {
  console.log("UNKNOWN");
}

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
