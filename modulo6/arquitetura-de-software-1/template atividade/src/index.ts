import {app} from "./app"
import { UserController } from "./controller/UseController"

const userController = new UserController()

app.get("/", async function(){
   console.log("endpoint teste")
})

app.post('/createUser', userController.createUSer)

app.get('/all', userController.get)

app.delete('/:id', userController.deleteUser)


