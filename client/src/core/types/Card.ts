import { PasswordlessUser } from './User';

export interface Card {
  id: number;
  title: string;
  description: string;
  author: PasswordlessUser;
  listId?: number;
}
