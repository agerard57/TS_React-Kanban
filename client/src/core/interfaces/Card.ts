import { IBO } from './IBO';
import { PasswordlessUser } from './User';

export interface Card extends IBO {
  title: string;
  description: string;
  author: PasswordlessUser;
  listId?: number;
}
