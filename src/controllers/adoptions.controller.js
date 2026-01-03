import { adoptionsService, petsService, usersService } from "../services/index.js";
import mongoose from "mongoose";

const isValidId=(id)=>mongoose.Types.ObjectId.isValid(id);
const getAllAdoptions=async(req,res)=>{
    try{ 
        const result=await adoptionsService.getAll();
        res.send({status:"success",payload:result});
    }catch(error){
        res.status(500).send({status:"error", error: error.message});
    }
};

const getAdoption = async(req,res)=>{
    try{
        const adoptionId = req.params.aid;
        if(!mongoose.Types.ObjectId.isValid(adoptionId)) {
            return res.status(400).send({ status: "error", error: "Invalid ID" });
        }
        const adoption = await adoptionsService.getBy({_id:adoptionId});
        if(!adoption) return res.status(404).send({status:"error",error:"Adoption not found"});
        res.send({status:"success",payload:adoption});
    }catch(error){
        res.status(500).send({status:"error", error: error.message});
    }
};

const createAdoption = async(req,res)=>{
    try{
        const {uid,pid} = req.params;
        if(!uid | !pid)
            return res
                .status(400)
                .send({status:"error", error:"uid and pid are required"});
        if(!mongoose.Types.ObjectId.isValid(uid) || !mongoose.Types.ObjectId.isValid(pid)){
            return res.status(400).send({ status: "error", error: "Invalid uid or pid" });
        }
        const user = await usersService.getUserById(uid);
        if(!user) 
            return res.status(404).send({status:"error", error:"user Not found"});
        const pet = await petsService.getBy({_id:pid});
        if(!pet)
            return res.status(404).send({status:"error",error:"Pet not found"});
        if(pet.adopted) 
            return res.status(400).send({status:"error",error:"Pet is already adopted"});
        user.pets.push(pet._id);
        await usersService.update(user._id,{pets:user.pets})
        await petsService.update(pet._id,{adopted:true,owner:user._id})
        const newAdoption=await adoptionsService.create({
            owner: user._id,
            pet: pet._id,
        });
        res.status(201).send({status:"success", payload: newAdoption})
    }catch(error){
        res.status(500).send({status:"error", error: error.message});
    }
};
const deleteAdoption = async (req, res) => {
  try {
    const adoptionId = req.params.aid;
    const deleted = await adoptionsService.delete(adoptionId);
    if (!deleted)
      return res
        .status(404)
        .send({ status: "error", error: "Adoption not found" });

    res.send({ status: "success", payload: deleted });
  } catch (error) {
    res.status(500).send({ status: "error", error: error.message });
  }
};

export default {
    createAdoption,
    getAllAdoptions,
    getAdoption,
    deleteAdoption
}