module.exports = {
  development: {
    username: 'root',
    password: 'admin1234',
    database: 'hay_day',
    host: '127.0.0.1',
    port: 3306,
    dialect: 'mysql',
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
