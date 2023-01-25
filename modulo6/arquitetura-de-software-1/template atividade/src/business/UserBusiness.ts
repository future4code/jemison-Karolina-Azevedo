import { UserDatabase } from "../data/UserDatabase";
import { User } from "../types/user";

export class UserBusiness{

    async createUser(user: any): Promise<void> {
            try{

                const {email, name,password} = user
    
                if(!user.name || !user.email || !user.password ){
                    throw new Error("Please fill all the fields");
                }
    
                if(user.email.indexOf("@") === -1){
                    throw new Error("Invalid Email");
                }
    
                if(user.password.length < 6){
                    throw new Error("Password must have at least 6 characters");
                }
    
                const id: string = Date.now().toString()
              
                await new UserDatabase().createUser({
                    id,
                    email,
                    name,
                    password
                });
             
                
            }catch(error:any){
                throw new Error( error.message || "Error creating user. Please check your system administrator.");
            }
        }

    async get(): Promise<User[]>  {
				
        return await new UserDatabase().get();
    }

    async deleteUser(input: {id:string}) {
				
        if(!input.id){
            throw new Error("Insira um id!")
        }

return await new UserDatabase().deleteUser(input.id);
}
}

    