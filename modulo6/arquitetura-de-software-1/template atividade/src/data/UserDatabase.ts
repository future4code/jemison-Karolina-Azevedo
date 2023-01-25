import { BaseDatabase } from "./BaseDatabase";
import { User } from "../types/user";

export class UserDatabase extends BaseDatabase {

   createUser = async(user:User): Promise<void> => {
        try {
          await UserDatabase.connection
            .insert({
              id: user.id,
              email: user.email,
              name: user.name,
              password: user.password
            })
            .into('User_Arq');
        } catch (error:any) {
          throw new Error(error.sqlMessage || error.message);
        }
      }


async get(): Promise<User[]> {

  try {

      const users: User[] = [];

      const result = await UserDatabase.connection()
          .select("*")
          .from('User_Arq');

      for(let user of result){
          users.push(user);
      }

      return users;

  } catch (error:any) {
      throw new Error(error.sqlMessage || error.message);
  }
}
public async deleteUser(
  id: string
): Promise<void> {
  try {
    await UserDatabase.connection()
      .where({ id })
      .from('User_Arq')
      .delete()
      
  } catch (error:any) {
    throw new Error(error.sqlMessage || error.message);
  }
}

}