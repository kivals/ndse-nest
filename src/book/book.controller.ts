import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
  UsePipes,
} from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { ValidationPipe } from '../common/pipes/validation.pipe';
import { AuthGuard } from '@nestjs/passport';

@Controller('api/books')
export class BookController {
  constructor(private bookService: BookService) {}

  @Get()
  getAll() {
    return this.bookService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bookService.findById(id);
  }

  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() createBookDto: CreateBookDto) {
    return this.bookService.create(createBookDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  remove(@Param('id') id: string) {
    return this.bookService.remove(id);
  }
}
