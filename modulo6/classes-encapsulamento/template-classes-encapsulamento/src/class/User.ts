export class User {
   
    constructor (private email: string, private password: string){
        this.email = email;
        this.password = password
    }
    public getEmail(): string {
        return this.email;
    }
    public getPassword(): string {
        return this.password;
    }
    public setEmail(newEmail: string){
        this.email = newEmail;
    }
    public setPassword(newPassword: string){
        this.password = newPassword;
    }
}