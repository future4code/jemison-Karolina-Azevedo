import { UserDatabase } from "../data/UserDatabase"
import { v4 as generateId } from 'uuid'
import { createUserDTO } from "../models/userDTO"
import { User } from "../models/User"
import { CustomError } from "../error/CustomError"

export class UserBusiness {
  async create({ email, name, password }: createUserDTO):Promise<void> {
    if (!email || !name || !password) {
      throw new Error("Dados inválidos (email, name, password)")
    }

    const id:string = generateId()

    const users = {
      id,
      name,
      email,
      password
    }

    const userDatabase = new UserDatabase()
    await userDatabase.create(users)
  }
  public getUsers = async (): Promise<User[]> => {
    //instanciiar fora do try  
    try {
       const userDatabase = new UserDatabase()
       console.log("estou aki");
       
       return userDatabase.getUsers();
       
    } catch (error: any) {
       throw new CustomError(400, error.message)
    }
 }
}
