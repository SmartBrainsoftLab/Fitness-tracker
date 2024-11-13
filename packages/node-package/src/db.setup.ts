import { DataSource } from "typeorm";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";
import { UserEntity } from "./entities";
import "dotenv/config";

export const AppDataSource = new DataSource({
  type: "mysql",
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
  logging: false,
  synchronize: true,
  entities: [UserEntity],
  entitySkipConstructor: true,
  namingStrategy: new SnakeNamingStrategy(),
});
