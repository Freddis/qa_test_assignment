import {MysqlConnectionOptions} from "typeorm/driver/mysql/MysqlConnectionOptions";
import {User} from "./src/entities/User";
export const typeormConnectionOptions : MysqlConnectionOptions = {
  type: 'mysql',
  host: process.env.MYSQL_HOST,
  entities: [User],
  port: 3306,
  database: 'main',
  username: 'root',
  password: '',
  synchronize: true,
  logging: true,
}
