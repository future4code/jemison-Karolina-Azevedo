import app from "./app";
import getAdressInfo from "./service/getAdressInfo";

app.post("/test", getAdressInfo)