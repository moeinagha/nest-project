import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './User/user.module';
import { HelloModule } from './hello/hello.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import UserEntity from './db/entity/user.entity';
import { BooksModule } from './Books/books.module';
import { GenreModule } from './Genre/genre.module';
import BookEntity from './db/entity/book.entity';
import GenreEntity from './db/entity/genre.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [UserModule ,
            BooksModule,
            GenreModule,
            HelloModule,
    TypeOrmModule.forFeature(
      [UserEntity, BookEntity , GenreEntity],
    ),
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USERNAME,
      password: "125896347",
      autoLoadEntities: true,
      synchronize: true
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}