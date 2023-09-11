import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import express,{Request,Response} from "express"
const app =express()
const PORT=process.env.PORT || 5000;
import dotenv from "dotenv"
dotenv.config()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.get("users",async(req:Request,res:Response)=>{
    try{
        const samples= await prisma.sample.findMany()
        return res.json(samples)
    }catch(err){
        return res.status(500).json(err)
    }
})
app.post("users",async(req:Request,res:Response)=>{
    try{
        const {nombre,email}=req.body
        const newSample= await prisma.sample.create({
            data:{
                nombre,
                email
            }
        })
        return res.json(newSample)
    }catch(err){
        return res.status(500).json(err)
    }
})

app.get("/",(req:Request,res:Response)=>{
    return res.send("Home Page")
})

app.listen(PORT,()=>console.log("SERVER RUNNING"))

export default app