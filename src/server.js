import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';
import app from './app.js';

const PORT=process.env.PORT || 8080;
const MONGO_URL=process.env.MONGO_URL;

mongoose.connect(MONGO_URL)
    .then(()=>{
        console.log('MongoDB conectado');
        app.listen(PORT,()=>{
            console.log(`Listening on ${PORT}`);
        });
    })
    .catch(err=>console.error('Error MongoDB:',err));