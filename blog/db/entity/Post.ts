import { User } from "./User";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  @ManyToOne(() => User, (user: User) => user.posts)
  author!: User;

  @Column()
  title!: string;

  @Column()
  content!: string;

  @Column()
  createdAt!: Date;

  @Column()
  updatedAt!: Date;

  @Column()
  published!: boolean;
}
