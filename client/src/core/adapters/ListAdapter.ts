import { CardDto } from '../dto/CardDto';
import { ListDto } from '../dto/ListDto';
import { Card, List } from '../types';
import { adapteCardDtoToCard } from './CardAdapter';
import { adaptUserDtoToUser } from './UserAdapter';

export const adaptListDtoToList = (listDto: ListDto): List => {
  const cards: Card[] = listDto.card.map((card: CardDto) => {
    return adapteCardDtoToCard(card);
  });

  const list: List = {
    id: listDto.id,
    title: listDto.title,
    author: adaptUserDtoToUser(listDto.user),
    cards
  };

  return list;
};
