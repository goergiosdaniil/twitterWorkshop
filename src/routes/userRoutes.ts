import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();
// USER CRUD

//Create user
router.post('/',async (req, res)=>{
    const {email, name, username} = req.body;
    try{
        const result = await prisma.user.create({
            data: {
                email,
                name,
                username,
                bio: "hello I am new",
            },
        });
        res.json(result);
    } catch(e){
        res.status(400).json({error: "username and mail should be unieuq"});
    }
    
    
});

// List users
router.get('/',async (req, res)=> {
    const allUser = await prisma.user.findMany();
    res.json(allUser);
});

//Get one user
router.get('/:id',async (req, res)=> {
    const {id} = req.params;
    const user = await prisma.user.findUnique({ where: {id: Number(id)}})
    res.json(user);
});

//Update one user
router.put('/:id',async (req, res)=> {
    const {id} = req.params;
    const {bio,name,image} = req.body;
    try{
        const result = await prisma.user.update({
            where: {id: Number(id)},
            data:{bio,name,image}
        })
        res.json(result);
    } catch(e){
        res.status(400).json({error: "Failed to update"});
    }
});

//Delete one user
router.delete('/:id',async (req, res)=> {
    const {id} = req.params;
    try{
        const result = await prisma.user.delete({
            where: {id: Number(id)}
        })
        res.sendStatus(200);
    } catch(e){
        res.status(400).json({error: "Failed to delete"});

    }

});

export default router;