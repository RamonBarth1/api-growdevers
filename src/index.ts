import express, {Request,Response} from "express"
import { growdevers } from "./database/growdevers";
import { Growdever } from "./models/growdever";
import { GrowdeverController } from "./controllers/growdever.controller";

const app = express();
app.use(express.json())
// Rotas de growdevers => /growdever
// GET https://localhost:3333/growdever?idade=20

app.get("/growdever", (req:Request, res: Response) => {
try {
    const{idade} = req.query;

    let result = growdevers;
    
    if(idade) {
     result = growdevers.filter(growdever => growdever.idade === Number(idade))
    }
    
    return res.status(200).send({
        ok:true,
        messaage: "Growdever listados com sucesso",
        data: result.map((growdever) => growdever.toJson()),
    });
    

}catch (error:any){
    return res.status(500).send({
        ok:false,
        message: error.toString(),
    })
}
})

//obter um growdever por ID
//GET https://localhost:3333/growdever
app.get("/growdever/:id", (req:Request, res: Response) => {
    try {
        const {id} = req.params;

        const result = growdevers.find(growdever => growdever.id === id);

        if(!result) {
            return res.status(404).send({
                ok: false,
                message: "Growdever não encontrado"
            })
        }

        return res.status(200).send({
            ok:true,
            messaage: "Growdever filtrado com sucesso",
            data: result,
        });
        
    
    }catch (error:any){
        return res.status(500).send({
            ok:false,
            message: error.toString(),
        })
    }
    
})

//Criar um growdever por ID
//GET https://localhost:3333/growdever

app.post("/growdever", (req ,res) => new GrowdeverController().create(req,res));

app.listen(3333, () => {
    console.log("Api bombando ");
    
})
