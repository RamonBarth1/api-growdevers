import express, {Request,Response} from "express"
import { growdevers } from "./database/growdevers";

const app = express();

// Rotas de growdevers => /growdever
// GET https://localhost:3333/growdever

app.get("/growdever", (req:Request, res: Response) => {
try {
    return res.status(200).send({
        ok:true,
        messaage: "Growdever listados com sucesso",
        data: growdevers.map((growdever) => growdever.toJson()),
    });
    

}catch (error:any){
    return res.status(500).send({
        ok:false,
        message: error.toString(),
    })
}
})

app.listen(3333, () => {
    console.log("Api bombando ");
    
})
