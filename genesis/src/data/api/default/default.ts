import axios from 'axios';

export const authorization = (token: string) => ({
  Authorization: `Bearer ${token}`,
  'Cache-Control': 'no-cache',
});

export const getRequest = () => {
  const request = axios.create({
    timeout: 250000,
    baseURL: 'https://rolls.entrydsm.hs.kr/',
  });
  return request;
};

export const getRequestWithAccessToken = (
  token: string,
  type: 'json' | 'blob' | 'text' = 'json',
) => {
  const request = axios.create({
    timeout: 250000,
    baseURL: 'https://rolls.entrydsm.hs.kr/',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    responseType: type,
  });
  return request;
};
