const express=require('express');
const router=express.Router();
const Customer = require('../customerdata');
const joi=require('joi');
router.get('/customers/:id',async function(req,res){
    try{
        let customer=await Customer.findById(req.params.id);
        if(customer){
            console.log("Customer is present");
            return res.json(customer);
        }
        else{
            return res.status(404).send("Customer is not present");
        }
    }catch(error){
        console.log(error);
        return res.json("Something is wrong with the server");
    }    
})
router.put('/customers/:id',async function(req,res){
    try{
        const schema=joi.object({
            name:joi.string(),
            age:joi.number().min(1).max(100),
            address:joi.string()
        })
        const cust=await Customer.findById(req.params.id);
        
        if(!cust){
            return res.status(404).json("Customer is not found");
        }
        const {error} = schema.validate({
            name:req.body.name || cust.name,
            age:req.body.age || cust.age,
            name:req.body.address || cust.address
        })
        if(error){
            return res.status(400).send(error.details[0].message);
        }
        cust.name=req.body.name || cust.name;
        cust.age=req.body.age || cust.name;
        cust.address=req.body.address || cust.address;
        await cust.save();
        return res.status(201).json(cust);
    }catch(error){
        console.log(error);
        return res.json("Something is wrong with the server");
    }    
})

module.exports=router;