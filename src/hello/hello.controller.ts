import { Body, Controller, Get, Header, HttpCode, Post, Query } from '@nestjs/common';
import { PersonDto } from './dto/person.dto';
import { HelloService } from './hello.service';
import { ApiResponse, ApiBearerAuth, ApiQuery } from '@nestjs/swagger';

@Controller('hello')
export class HelloController {
    constructor(private readonly helloService: HelloService) {};

    @ApiResponse({ status: 200, description: 'Say Hello!' })
    @Post('welcome')
    @Header('Content-Type', 'aplication/json')
    @HttpCode(400)
    async sayWelcome(@Body() personDto: PersonDto): Promise<{ data: string }> {
        let message = await this.helloService.welcome(personDto);
        return { data: message };
    }

    @ApiResponse({ status: 200 })
    @ApiQuery({
        name: 'name',
        required: true,
        type: String,
        // enum: ['Moein', 'Browser', 'Device']
    })
    @ApiQuery({
        name: 'year',
        required: false,
        type: Number,
        description: 'you can ignore this'
    })
    @Get('welcome')
    async sayWelcome_2(@Query('name') iname, @Query('year') iyear): Promise<{ data: string }> {
        let message = await this.helloService.welcome({ name: iname, year: iyear });
        return { data: message };
    }

}