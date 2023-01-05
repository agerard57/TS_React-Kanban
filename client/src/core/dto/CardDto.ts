import { UserDto } from './UserDto';

export interface CardDto {
  id: number;
  title: string;
  author_id: number;
  edited_by_id: number;
  list_id: number;
  description: string;
  author: UserDto;
}
