import { CardDto } from './CardDto';
import { UserDto } from './UserDto';

export interface ListDto {
  id: number;
  title: string;
  user_id: number;
  user: UserDto;
  card: CardDto[];
}
