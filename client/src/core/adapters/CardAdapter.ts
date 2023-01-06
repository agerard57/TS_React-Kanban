import { CardDto } from '../dto';
import { Card } from '../interfaces';
import { adaptUserDtoToUser } from './UserAdapter';

export const adaptCardDtoToCard = (cardDto: CardDto): Card => {
  const card: Card = {
    id: cardDto.id,
    title: cardDto.title,
    author: adaptUserDtoToUser(cardDto.author),
    listId: cardDto.list_id,
    description: cardDto.description
  };
  return card;
};
