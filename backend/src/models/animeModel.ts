import { User } from "types/UsersTypes";
import mongoose, { Schema } from "mongoose";

const AnimeSchema: Schema = new Schema<User>(
  {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const animeModel = mongoose.model<User>("anime", AnimeSchema);
