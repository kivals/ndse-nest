import { BookController } from './book.controller';
import { BookService } from './book.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('Book Controller', () => {
  let controller: BookController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BookController],
      providers: [
        {
          provide: BookService,
          useValue: {
            findAll: jest.fn().mockReturnValue([
              {
                title: 'Книга1',
                authors: 'Авторы1',
              },
              {
                title: 'Книга2',
                authors: 'Авторы2',
              },
            ]),
          },
        },
      ],
    }).compile();

    controller = module.get<BookController>(BookController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getAllBooks', () => {
    it('should get the list of books', () => {
      const retBooks = controller.getAll();
      expect(typeof retBooks).toBe('object');
      expect(retBooks[0].title).toBe('Книга1');
      expect(retBooks[1].authors).toBe('Авторы2');
    });
  });
});
