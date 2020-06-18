const baseUrl = process.env.API_URL;

const baseOptions = (env = process.env.NODE_ENV) => ({
  headers: { 'Content-Type': 'application/json' },
  credentials: env === 'development' ? 'include' : 'same-origin',
});

export { baseUrl, baseOptions };
