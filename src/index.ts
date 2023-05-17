import express, {Request,Response} from "express"
import { Growdever } from "./models/growdever";

const app = express()

app.get("/", (req:Request, res:Response) =>{
    console.log("Entrou na rota");
    const growdever1 = new Growdever("gr01", "Ramon", 12)
    res.status(200).send({ok: true, data: growdever1.toJson()})
});

app.listen(3333, () => {
    console.log("Api bombando ");
    
})
