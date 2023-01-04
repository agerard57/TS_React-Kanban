import { privateAxios } from '../../core';

export const getProfilePicSrc = async (id: string) => {
  const url = `${process.env?.REACT_APP_API_URL}/banner/photo/${id}`;
  try {
    const response = await privateAxios.get(url);

    return response.data;
  } catch (error) {
    return [];
  }
};

export const getUserData = async (id: string) => {
  const url = `${process.env?.REACT_APP_API_URL}/banner/user/${id}`;
  try {
    const response = await privateAxios.get(url);

    return response.data;
  } catch (error) {
    return [];
  }
};
