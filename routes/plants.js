const express =require('express');
const Plants =require('../models/plants');

const router = express.Router();
//Create
router.post('/post/plant',(req,res)=>{
    let newPlant =new Plants(req.body);
    newPlant.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            sucess:"post Saved Successfully"
        });
    });
});

//Read

router.get('/plants',(req,res)=>{
    Plants.find().exec((err,plants)=>{
        if(err){
            return res.status(400).json({
                error:err
            });   
        }
        return res.status(200).json({
            sucess:true,
            existingPlants:plants
        });
    });
});

//update 
router.put('/plant/update/:id',(req,res)=>{
     Plants.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,post)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({sucess:"Update successfully"});
        }
     );
});
//Delete
router.delete('/pt/delete/:id',(req,res)=>{
    Plants.findByIdAndRemove(req.params.id).exec((err,deleteplant)=>{
        if(err) return res.status(400).json({
            massege:"Delete unsuccessfull",err
        });
        return res.json({
            massege:"Delete Successful",deleteplant
        });
    });
});
module.exports = router;