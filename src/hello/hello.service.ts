import { Injectable } from '@nestjs/common';
import { PersonDto } from './dto/person.dto';

@Injectable()
export class HelloService {

    // async function welcome
    async welcome(person: PersonDto): Promise<string> {
        // check if the user exist in the DB
        let message: string;
        if (person.year) {
            let currentYear = new Date().getFullYear();
            console.log(`Welcome ${person.name} - Your birthday is ${person.year}`);
            message = `Welcome ${person.name} - Your are ${currentYear - person.year} years old!`;
        } else {
            console.log(`Welcome ${person.name} - Your birthday is Undefined`);
            message = `Welcome ${person.name} - Your birthday is Undefined!!!`;
        }
        return message;
    }
    
}
