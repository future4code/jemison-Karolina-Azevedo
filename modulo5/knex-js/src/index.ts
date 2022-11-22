import express, {Request, Response} from "express"

import { connection } from "./dataBase/connection"

import cors from 'cors'
import { send } from "process"

const app = express()

app.use(express.json())

app.use(cors())

const getActorByName = async (name: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE name = '${name}'
  `)

	return result[0][0]
}

app.get("/actor/name", async (req: Request, res: Response) => {
  try {
    const name = req.params.name

    console.log(await getActorByName(name))

    res.end()
  } catch (error) {
		
    res.status(500).send("Unexpected error")
  }
}) // bata no http://localhost:3003/users/001 e veja o que acontece no terminal

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});