import path from "node:path";
import { DataSource, DataSourceOptions } from "typeorm";
import { Env } from "../../env";

const DbOptions: DataSourceOptions = {
  type: 'postgres' as const,
  host: 'localhost',
  port: Env.PORT,
  username: Env.DB_USERNAME,
  password: Env.DB_PASSWORD,
  database: Env.DB_DATABASE,
  entities: [path.join(__dirname, './', 'entity', '*.entity.{ts,js}')],
  migrations: [path.join(__dirname, './', 'migration', '*.{ts,js}')],
  synchronize: true,
}

export const DBConnection = new DataSource(DbOptions);