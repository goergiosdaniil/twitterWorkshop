import { Router } from "express";

const router = Router();
// USER CRUD

//Create user
router.post('/',(req, res)=>{
    res.status(501).json({error:'Not Implemented '});
});

//List users
router.get('/',(req, res)=> {
    res.status(501).json({error:'Not Implemented '});
});

//Get one user
router.get('/:id',(req, res)=> {
    const {id} = req.params;
    res.status(501).json({error:`Not Implemented : ${id}`});
});

//Update one user
router.put('/:id',(req, res)=> {
    const {id} = req.params;
    res.status(501).json({error:`Not Implemented : ${id}`});
});

//Delete one user
router.delete('/:id',(req, res)=> {
    const {id} = req.params;
    res.status(501).json({error:`Not Implemented : ${id}`});
});

export default router;