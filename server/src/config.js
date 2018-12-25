export const {
  APP_PORT = 4000,
  NODE_ENV = "development",
  DB_USERNAME = "krishna",
  DB_PASSWORD = "test123",
  DB_HOST = "ds059644.mlab.com",
  DB_PORT = "59644",
  DB_NAME = "summit"
} = process.env;

export const IN_PROD = NODE_ENV === "production";
