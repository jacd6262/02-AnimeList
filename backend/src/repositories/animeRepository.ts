import { animeModel } from "@models/animeModel";
import { IUserRepository, User } from "types/UsersTypes";

export class animeRepository implements IUserRepository {
  async create(data: User): Promise<User> {
    const newAnime = new animeModel(data);
    return await newAnime.save();
  }

  async find(): Promise<User[]> {
    return await animeModel.find().exec();
  }

  async findId(id: number): Promise<User | null> {
    return await animeModel.findById(id).exec();
  }

  async update(id: number, data: Partial<User>): Promise<User | null> {
    return await animeModel.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  async delete(id: number): Promise<boolean> {
    const deleted = await animeModel.findByIdAndDelete(id).exec();
    return deleted != null;
  }
}
