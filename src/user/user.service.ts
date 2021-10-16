import { Injectable } from '@nestjs/common';
import UserEntity from '../db/entity/user.entity';
import CreateUserDto from './dto/create-user.dto';
import BookEntity from '../db/entity/book.entity';
import EditNameUser from './dto/edit-name-user.dto';

@Injectable()
export class UserServices {

  async createUser(userDetails: CreateUserDto): Promise<UserEntity> {
    const userEntity: UserEntity = UserEntity.create();
    const { name } = userDetails;
    userEntity.name = name;
    await UserEntity.save(userEntity);
    return userEntity;
  }

  async getAllUsers(): Promise<UserEntity[]> {
    return await UserEntity.find({ relations: ['books'] });
  }

  async getBooksOfUser(userID: number): Promise<BookEntity[]> {
    const user: UserEntity = await UserEntity.findOne({where: {id: userID}, relations: ['books']});
    return user.books;
  }

  async editNameUser(id: number, nameUser: EditNameUser) {
    return await UserEntity.update(id, nameUser);
  }


}