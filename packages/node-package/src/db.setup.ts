import { DataSource } from "typeorm";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";
import { UserEntity } from "./entities";
import "dotenv/config";

export const AppDataSource = new DataSource({
  type: "mysql",
  database: "fitness",
  host: "localhost",
  username: "root",
  password: "",
  port: 3306,
  logging: false,
  synchronize: true,
  entities: [UserEntity],
  entitySkipConstructor: true,
  namingStrategy: new SnakeNamingStrategy(),
});
