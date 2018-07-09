import { localStorageConfig } from '../../config/local-storage';

export const addUserData = data => {
  const local = {
    token: data.token
  };

  localStorage.setItem(localStorageConfig.USER_TOKEN, local.token);
};

export const removeUserData = () => {
  localStorage.removeItem(localStorageConfig.USER_TOKEN);
};

export const getToken = () => {
  return localStorage.getItem(localStorageConfig.USER_TOKEN);
};
