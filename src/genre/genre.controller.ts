import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import GenreServices from './genre.service';
import CreateGenreDto from './dto/create-genre.dto';
import Editgenre from './dto/edit-genre.dto';

@Controller('genre')
export default class GenreController {
  constructor(private readonly genreServices: GenreServices) {}

  @Post('post')
  postGenre( @Body() genre: CreateGenreDto) {
    return this.genreServices.insert(genre);
  }

  @Get()
  getAll() {
    return this.genreServices.getAllGenre();
  }

  @Put()
  editGenre(@Body() genre: Editgenre) {
    return this.genreServices.editGenre(genre);
  }

  @Delete(':id')
  removeGenre(@Param('id') id: number) {
    return this.genreServices.deleteGenre(id);
  }
}