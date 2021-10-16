import BookEntity from '../db/entity/book.entity';
import CreateBookDto from './dto/create-book.dto';
import UserEntity from '../db/entity/user.entity';
import GenreEntity from '../db/entity/genre.entity';
import EditBook from './dto/edit-book.dto';

export class BooksService {

    async insert(bookDetails: CreateBookDto): Promise<BookEntity> {
        const { name , userID , genreIDs } = bookDetails;
        const book = new BookEntity();
        book.name = name;
        book.user = await UserEntity.findOne(userID) ;
        book.genres = [];
        for ( let i = 0; i < genreIDs.length ; i++)
        {
                    const genre = await GenreEntity.findOne(genreIDs[i]);
                    book.genres.push(genre);
        }
        await book.save();
        return book;
    }
    async getAllBooks(): Promise<BookEntity[] > {
        return BookEntity.find({ relations: ['user', 'genres'] });
    }

    async editBook(book: EditBook) {
        return await BookEntity.update(book.id, book);
    }

    async deleteBook(bookID: number) {
        return await BookEntity.delete(bookID);
    }
    
}