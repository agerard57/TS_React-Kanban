import { Card } from './Card';
import { PasswordlessUser } from './User';

export interface List {
  id: number;
  author: PasswordlessUser;
  title: string;
  cards: Card[];
}
