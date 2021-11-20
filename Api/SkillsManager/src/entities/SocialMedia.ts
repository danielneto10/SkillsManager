import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './User';

@Entity({ name: 'social_media' })
export class SocialMedia {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  info: string;

  @ManyToOne(() => User, (user) => user.socialMedias)
  user: User;
}
