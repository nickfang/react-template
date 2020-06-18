import { baseUrl, baseOptions } from './base';

export const fetchUsers = query => fetch(`${baseUrl}/users${query}`, {
  ...baseOptions(),
  method: 'GET',
});

export const fetchUser = id => fetch(`${baseUrl}/users/${id}`, {
  ...baseOptions(),
  method: 'GET',
});

export const signIn = body => fetch(`${baseUrl}/users/signin`, {
  ...baseOptions(),
  method: 'POST',
  body: JSON.stringify(body),
});
