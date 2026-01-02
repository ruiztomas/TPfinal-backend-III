import bcrypt from 'bcrypt';
import {faker} from '@faker-js/faker';

export const generateMockUsers=(qqty)=>{
    const users=[];
    const password=bcrypt.hashSync('coder123', 10);

    for (let i=0;i<qty;i++){
        users.push({
            first_name: faker.person.firstName(),
            last_name: faker.person.lastName(),
            email: faker.internet.email(),
            password,
            role: faker.helpers.arrayElement(['user', 'admin']),
            pets: []
        });
    }
    return users;
};