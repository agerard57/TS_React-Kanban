import { Card } from './Card';
import { IBO } from './IBO';
import { PasswordlessUser } from './User';

export interface List extends IBO {
  author: PasswordlessUser;
  title: string;
  cards: Card[];
}
