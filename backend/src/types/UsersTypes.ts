import { Repository } from "./RepositoryT";

export interface User {
  id: number;
  name: string;
}

export interface IUserRepository extends Repository<User> {}

export interface IAnimeService {
  createUser(user: User): Promise<User>;
  findUsers(): Promise<User[]>;
  findUsersById(id:number): Promise<User | null>
  updateUser(id:number, user: Partial<User>): Promise<User | null>
  deleteUser(id:number): Promise<boolean>
}
