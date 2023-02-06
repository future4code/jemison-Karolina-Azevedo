import { CustomError } from "./CustomError";

export class InvalidEmail extends CustomError {
    constructor(){
        super(400, "E-mail Inválido")
    }
}

export class InvalidPassword extends CustomError {
    constructor(){
        super(400, "Senha Inválida")
    }
}