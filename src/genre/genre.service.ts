import { Injectable } from '@nestjs/common';
import CreateGenreDto from './dto/create-genre.dto';
import GenreEntity from '../db/entity/genre.entity';
import Editgenre from './dto/edit-genre.dto';

@Injectable()
export default class GenreServices {
    async insert(genreDetails: CreateGenreDto): Promise<GenreEntity> {
    const genreEntity: GenreEntity = GenreEntity.create();
    const { type } = genreDetails;
    genreEntity.type = type;
    await GenreEntity.save(genreEntity);

    return genreEntity;
  }
  
  async getAllGenre(): Promise<GenreEntity[]> {
    return await GenreEntity.find();
  }

  async editGenre(genre: Editgenre) {
    return await GenreEntity.update(genre.id, genre);
  }

  async deleteGenre(genreID: number) {
    return GenreEntity.delete(genreID);
  }
}