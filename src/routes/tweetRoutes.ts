import { Router } from "express";
import { PrismaClient } from "@prisma/client";


const router = Router();
const prisma = new PrismaClient();

// Tweet CRUD

//Create Tweet
router.post('/',async (req, res)=>{
    const {content, image, userId} = req.body;
    try{
        const result = await prisma.tweet.create({
            data: {
                content,
                image,
                userId:Number(userId),
            },
        });

        res.json(result);
    } catch(e){
        res.status(400).json({error: "UserID should exist"});
    }
    
    
});

//List Tweet
router.get('/',async (req, res)=> {
    const allTweet = await prisma.tweet.findMany();
    res.json(allTweet);
});

//Get one Tweet
router.get('/:id',async (req, res)=> {
    const {id} = req.params;
    const tweet = await prisma.tweet.findUnique({ where: {id: Number(id)}})
    res.json(tweet);
});

//Update one Tweet
router.put('/:id',async (req, res)=> {
    const {id} = req.params;
    const {content,image} = req.body;
    try{
        const result = await prisma.tweet.update({
            where: {id: Number(id)},
            data:{content,image}
        })
        res.json(result);
    } catch(e){
        res.status(400).json({error: "Failed to update"});
    }
});

//Delete one Tweet
router.delete('/:id',async (req, res)=> {
    const {id} = req.params;
    try{
        const result = await prisma.tweet.delete({
            where: {id: Number(id)}
        })
        res.sendStatus(200);
    } catch(e){
        res.status(400).json({error: "Failed to delete"});

    }

});

export default router;