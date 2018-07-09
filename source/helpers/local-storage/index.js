import { localStorageConfig } from '../../config/local-storage';

export const addUserData = data => {
  const local = {
    token: data.token,
    username: data.username,
    email: data.email,
    accounts: JSON.stringify(data.accounts),
    groups: JSON.stringify(data.groups),
  };

  localStorage.setItem(localStorageConfig.USER_TOKEN, local.token);
  localStorage.setItem(localStorageConfig.USER_USERNAME, local.username);
  localStorage.setItem(localStorageConfig.USER_EMAIL, local.email);
  localStorage.setItem(localStorageConfig.USER_ACCOUNTS, local.accounts);
  localStorage.setItem(localStorageConfig.USER_GROUPS, local.groups);
};

export const removeUserData = () => {
  localStorage.removeItem(localStorageConfig.USER_TOKEN);
  localStorage.removeItem(localStorageConfig.USER_USERNAME);
  localStorage.removeItem(localStorageConfig.USER_EMAIL);
  localStorage.removeItem(localStorageConfig.USER_ACCOUNTS);
  localStorage.removeItem(localStorageConfig.USER_GROUPS);
};

export const getToken = () => {
  return localStorage.getItem(localStorageConfig.USER_TOKEN);
};
