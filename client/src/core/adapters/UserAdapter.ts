import { UserDto } from '../dto/UserDto';
import { User } from '../types';

export const adaptUserDtoToUser = (userDto: UserDto): User => {
  const user: User = {
    id: userDto.id,
    name: {
      firstName: userDto.firstname,
      lastName: userDto.surname
    },
    email: userDto.email,
    color: userDto.color,
    password: userDto.password
  };
  return user;
};
