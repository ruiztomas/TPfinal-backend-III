import {Router} from 'express';
import bcrypt from 'bcrypt';
import {faker} from '@faker-js/faker';
import UserModel from '../dao/models/User.js';
import PetModel from "../dao/models/Pet.js";
import { generateMockUsers } from '../utils/mockingUsers.js';

const router=Router();
router.get('/mockingpets', async(req,res)=>{
    const pets=[];
    for(let i=0;i<100;i++){
        pets.push({
            name: faker.animal.dog(),
            species:'dog',
            age:faker.number.int({min:1, max:10})
        });
    }
    res.status(200).json({status:'success', payload:pets});
});

router.get('/mockingusers', (req,res)=>{
    const users=generateMockUsers(50);
    res.status(200).json({status: 'success', payload: users});
});

router.post('/generateData', async(req,res)=>{
    const {users, pets}=req.body;

    if(!users || !pets){
        return res.status(400).json({status:'error', message: 'Missing params'});
    }
    const mockUsers=generateMockUsers(users);
    const mockPets=Array.from({length: pets}).map(()=>({
        name: faker.animal.dog(),
        species: 'dog',
        age: faker.number.int({min:1, max:10})
    }));
    await UserModel.insertMany(mockUsers);
    await PetModel.insertMany(mockPets);

    res.status(201).json({status:'success', message:'Data generated'});
});

export default router;