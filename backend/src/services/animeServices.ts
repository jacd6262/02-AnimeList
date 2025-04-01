import { IAnimeService, IUserRepository, User } from "../types/UsersTypes";

export class animeServices implements IAnimeService {
  private animeRepository: IUserRepository;

  constructor(animeRepository: IUserRepository) {
    this.animeRepository = animeRepository;
  }

  async createUser(user: User): Promise<User> {
    return this.animeRepository.create(user);
  }

  async findUsers(): Promise<User[]> {
    return this.animeRepository.find();
  }

  async findUsersById(id: number): Promise<User | null> {
    return this.animeRepository.findId(id);
  }

  async updateUser(id: number, user: Partial<User>): Promise<User | null> {
    return this.animeRepository.update(id, user);
  }

  async deleteUser(id: number): Promise<boolean> {
    return this.animeRepository.delete(id);
  }
}
