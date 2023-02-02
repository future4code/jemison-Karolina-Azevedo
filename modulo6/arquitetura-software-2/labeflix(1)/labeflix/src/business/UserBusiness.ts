import { UserDatabase } from "../data/UserDatabase"
import { v4 as generateId } from 'uuid'

export class UserBusiness {
  async create({ email, name, password }: any):Promise<void> {
    if (!email || !name || !password) {
      throw new Error("Dados inválidos (email, name, password)")
    }

    const id = generateId()

    const userDatabase = new UserDatabase()
    await userDatabase.create({
      id,
      name,
      email,
      password
    })
  }
  public getUsers = async () => {
    //instanciiar fora do try  
    try {
       const userDatabase = new UserDatabase()
       console.log("estou aki");
       
       return userDatabase.getUsers();
       
    } catch (error: any) {
       throw new Error(error.message)
    }
 }
}
