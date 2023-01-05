import { ListDto } from '../dto/ListDto';
import { List } from '../types';

export const adaptListDtoToList = (listDto: ListDto): List => {
  const list: List = {
    id: listDto.id,
    title: listDto.title,
    author: {
      id: listDto.user_id,
      name: {
        firstName: 'test',
        lastName: 'test'
      },
      email: 'test@gmail.com',
      color: '#ff0000'
    },
    cards: []
  };
  return list;
};
