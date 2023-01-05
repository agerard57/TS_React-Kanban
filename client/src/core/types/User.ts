export interface PasswordlessUser {
  id: number;
  name: {
    first_name: string;
    lastName: string;
  };
  email: string;
  color: string;
}

export interface User extends PasswordlessUser {
  password: string;
}
