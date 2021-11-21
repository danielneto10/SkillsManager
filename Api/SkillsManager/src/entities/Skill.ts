import { IsNotEmpty } from 'class-validator';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './User';

@Entity({ name: 'skill' })
export class Skill {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  @IsNotEmpty()
  name: string;

  @Column({ type: 'varchar' })
  @IsNotEmpty()
  descr: string;

  @ManyToMany(() => User, (user) => user.skills, { onDelete: 'CASCADE' })
  users: User[];
}
