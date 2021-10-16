import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { UserServices } from './user.service';
import CreateUserDto from './dto/create-user.dto';
import EditNameUser from './dto/edit-name-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly usersServices: UserServices) {}

  @Post('post')
  postUser( @Body() user: CreateUserDto) {
    return this.usersServices.createUser(user);
  }

  @Get()
  getAll() {
    return this.usersServices.getAllUsers();
  }

  @Get('books')
  getBooks( @Body('userID', ParseIntPipe) userID: number ) {
    return this.usersServices.getBooksOfUser(userID);
  }

  @Put(':id')
  editName(
    @Param('id') id: number,
    @Body() nameUser: EditNameUser
  ) {
    return this.usersServices.editNameUser(id, nameUser);
  }

}