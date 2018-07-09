const querystring = require('querystring');

export const getQueryParamsUrl = params => {
  return `?${querystring.stringify(params)}`;
};
