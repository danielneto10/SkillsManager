export default {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: process.env.DB_USER, // Alterar aqui (Username do banco)
  password: process.env.DB_PASSWORD, //Alterar aqui (Senha do banco)
  database: 'skills_manager', //Alterar aqui (Nome do banco de dados)
  synchronize: false,
  logging: false,
  entities: ['src/entities/**/*.ts'],
  migrations: ['src/database/migrations/**/*.ts'],
  cli: {
    entitiesDir: 'src/entities',
    migrationsDir: 'src/database/migrations',
  },
};
