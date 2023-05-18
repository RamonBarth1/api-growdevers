import express, {Request,Response} from "express"
import { Growdever } from "../models/growdever";
import { growdevers } from "../database/growdevers";


export class GrowdeverController{
    public create(req:Request, res: Response) {
        try {
        
            const {nome, idade} = req.body
    
    
            if(!nome) {
                return res.status(400).send({
                    ok: false,
                    message: "ID não informado"
            })
        }
    
            if(!idade) {
                return res.status(400).send({
                    ok: false,
                    message: "ID não informado"
            })
        }
    
        
            
            const growdever = new Growdever(nome, idade);
    
            growdevers.push(growdever);
    
            return res.status(201).send({
                ok:true,
                message: "Growdever criado com sucesso",
                data: growdever,
            })
        
        }catch (error:any){
            return res.status(500).send({
                ok:false,
                message: error.toString(),
            })
        }
    }
}