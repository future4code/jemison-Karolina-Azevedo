import { AuthenticationData } from "../model/user";
import * as jwt from "jsonwebtoken";

export class Authenticator {
    public generateToken = ({id}: AuthenticationData): string => {
        const token = jwt.sign(
            {
              id
            },
            process.env.JWT_KEY as string,
            {
              expiresIn: "1min"
            }
          );
          return token;
    }
    getTokenData = (token:string) => {
        const playload = jwt.verify(token, process.env.JWT_KEY as string )
        return playload
    }
}