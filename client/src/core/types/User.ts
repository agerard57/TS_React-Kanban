export interface PasswordlessUser {
  id: number;
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
