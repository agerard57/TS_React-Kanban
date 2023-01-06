import { IBO } from './IBO';

export interface PasswordlessUser extends IBO {
  name: {
    firstName: string;
    lastName: string;
  };
  email: string;
  color: string;
}

export interface User extends PasswordlessUser {
  password: string;
}
