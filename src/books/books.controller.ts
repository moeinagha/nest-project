import CreateBookDto from './dto/create-book.dto';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BooksService } from './books.service';
import EditBook from './dto/edit-book.dto';

@Controller('book')
export class BooksController {
    constructor(private readonly booksService: BooksService) {};

    @Post('post')
    postBook(@Body() bookDetails: CreateBookDto) {
        return this.booksService.insert(bookDetails);
    }

    @Get()
    getAllBooks() {
        return this.booksService.getAllBooks();
    }

    @Put()
    editBook(@Body() book: EditBook) {
        return this.booksService.editBook(book);
    }

    @Delete(':id')
    removeBook(@Param('id') id: number) {
        return this.booksService.deleteBook(id);
    }
}