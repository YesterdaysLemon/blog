import { User } from "./User";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import "reflect-metadata";

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => User, (user: User) => user.posts)
  @JoinColumn()
  author!: User;

  @Column("varchar")
  title!: string;

  @Column("text")
  content!: string;

  @Column("timestamp")
  createdAt!: Date;

  @Column("timestamp")
  updatedAt!: Date;

  @Column("boolean")
  published!: boolean;
}
