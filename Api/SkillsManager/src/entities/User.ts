import { IsAlpha, IsAlphanumeric, IsEmail, MinLength } from 'class-validator';
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';
import { Skill } from './Skill';
import { SocialMedia } from './SocialMedia';
import * as bcrypt from 'bcryptjs';

@Entity({ name: 'user' })
export class User {
  @PrimaryColumn({ type: 'varchar', length: 80 })
  @IsAlphanumeric()
  @MinLength(3)
  userName: string;

  @Column({ type: 'varchar', length: 80 })
  @MinLength(3)
  name: string;

  @Column({ type: 'varchar', length: '180' })
  @IsEmail()
  email: string;

  @Column({ type: 'text', nullable: true })
  about: string;

  @Column({ type: 'varchar' })
  @MinLength(4)
  password: string;

  @Column({ type: 'blob', nullable: true })
  perfilPhoto: string;

  @Column({ type: 'varchar', nullable: true })
  password_reset_token: string;

  @Column({ type: 'boolean', default: false })
  admin: boolean = false;

  @OneToMany(() => SocialMedia, (socialMedia) => socialMedia.user)
  socialMedias: SocialMedia[];

  @ManyToMany(() => Skill, (skill) => skill.users, { onDelete: 'CASCADE' })
  @JoinTable()
  skills: Skill[];

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    this.password = bcrypt.hashSync(this.password, 10);
  }
}
