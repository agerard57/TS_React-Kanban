import { CardDto } from '../dto/CardDto';
import { Card } from '../types';
import { adaptUserDtoToUser } from './UserAdapter';

export const adapteCardDtoToCard = (cardDto: CardDto): Card => {
  const card: Card = {
    id: cardDto.id,
    title: cardDto.title,
    author: adaptUserDtoToUser(cardDto.author),
    listId: cardDto.list_id,
    description: cardDto.description
  };
  return card;
};
