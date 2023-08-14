const env = process.env.NODE_ENV || 'development';

const development = {
    env: env,
    port: 8000,
};

const production = {
    env: env,
    port: process.env.PORT || 8000,
};

const config = {
  development,
  production,
};

module.exports = config[env];
