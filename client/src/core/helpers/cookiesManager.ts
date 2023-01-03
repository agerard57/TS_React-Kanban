import Cookies from 'universal-cookie/cjs';

type CookiesManagerManager = {
  setCookie: (key: string, value: string, rememberMe: boolean) => void;
  getCookie: (key: string) => string;
  deleteCookie: (key: string) => void;
};

const cookies = new Cookies();

const setCookie = (key: string, value: string, rememberMe: boolean) => {
  // 1 month if rememberMe is true, session if false
  const maxAge = rememberMe ? 2628000 : undefined;
  cookies.set(key, value, {
    path: '/',
    maxAge
  });
};

const getCookie = (key: string) => cookies.get(key);

const deleteCookie = (key: string) => {
  cookies.remove(key, { path: '/' });
};

export const cookiesManager: CookiesManagerManager = {
  setCookie,
  getCookie,
  deleteCookie
};
