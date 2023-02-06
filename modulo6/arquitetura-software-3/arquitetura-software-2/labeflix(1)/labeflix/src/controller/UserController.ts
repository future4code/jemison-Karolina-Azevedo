import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { User } from "../models/User";
import { createUserDTO } from "../models/userDTO";

export class UserController {
  async create(req: Request, res: Response):Promise<void> {
    try {
      const input: createUserDTO =  { 
        email: req.body.email, 
        name: req.body.name, 
        password: req.body.password 
      }

      const userBusiness = new UserBusiness();
      await userBusiness.create(input);

      res.status(201).send({ message: "Usuário cadastrado com sucesso" });
    } catch (error: any) {
      res.status(error.statusCode || 400).send(error.message || error.sqlMessage);
    }
  }
  public getUsers = async (req: Request, res: Response): Promise<void> => {
    try {

       const userBusiness = new UserBusiness()
       const users = await userBusiness.getUsers()

       res.status(201).send(users)
    } catch (error: any) {
      res.status(error.statusCode || 400).send(error.message || error.sqlMessage);
    }
 }
}
