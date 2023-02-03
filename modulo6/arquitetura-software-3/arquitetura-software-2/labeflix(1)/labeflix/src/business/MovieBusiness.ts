import { v4 as generateId } from "uuid";
import { MovieDatabase } from "../data/MovieDatabase";
import { CustomError } from "../error/CustomError";

export class MovieBusiness {
  async create({ title, description, durationInMinutes, yearOfRelease }: any): Promise<void> {

    if (!title || !description || !durationInMinutes || !yearOfRelease) {
      throw new CustomError(400, "Dados inválidos");
    }

    const id = generateId();

    const movieDatabase = new MovieDatabase()

    const movieInput = {
      id: id,
      title: title,
      description: description,
      durationInMinutes: durationInMinutes,
      yearOfRelease: yearOfRelease,

    }
    await movieDatabase.create(movieInput);
  }
}
