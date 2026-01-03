import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';

import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionsRouter from './routes/adoption.router.js';
import sessionsRouter from './routes/sessions.router.js';
import mocksRouter from './routes/mocks.router.js';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';

const app=express();

app.use(express.json());
app.use(cookieParser());

app.use('/api/mocks', mocksRouter);
app.use('/api/users',usersRouter);
app.use('/api/pets',petsRouter);
app.use('/api/adoptions',adoptionsRouter);
app.use('/api/sessions',sessionsRouter);

const swaggerOptions={
    definition:{
        openapi:"3.0.1",
        info:{
            title:'Adoptme API',
            description:'Documentacionn del modulo Users'
        }
    },
    apis: ["./src/docs/*.yaml"]
};

const specs=swaggerJsdoc(swaggerOptions);
app.use('/api/docs',swaggerUi.serve, swaggerUi.setup(specs));

export default app;