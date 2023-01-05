interface AuthTokenData {
  id: number;
  name: {
    first_name: string;
    last_name: string;
  };
  email: string;
  color: string;
}

interface AuthTokenMeta {
  rememberMe: boolean;
  iat: number;
  exp: number;
  aud: string;
  iss: string;
  sub: string;
}

export interface AuthToken {
  data: AuthTokenData | null;
  meta: AuthTokenMeta;
}

export type LoggedUserDataProps = {
  loggedUserData: AuthTokenData | null;
};
