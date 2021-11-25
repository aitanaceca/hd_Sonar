module.exports = {
  development: {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_DATABASE,
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    dialect: process.env.DATABASE_DIALECT,
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 20000,
    },
    define: {
      timestamps: false
    },
  },
};
