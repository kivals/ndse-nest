import { Test, TestingModule } from '@nestjs/testing';
import { BookService } from './book.service';
import { getModelToken } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book } from './entity/book.entity';

const mockBook = (mock?: Partial<Book>): Partial<Book> => ({
  _id: mock?.id || 'an uuid',
  title: mock?.title || 'Гарри поттер',
  authors: mock?.authors || 'Джоан Роулинг',
});

const bookArray = [
  mockBook(),
  mockBook({ id: '123', title: 'Война и мир', authors: 'Лев Толстой' }),
];

describe('BookService', () => {
  let service: BookService;
  let model: Model<Book>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BookService,
        {
          provide: getModelToken('Book'),
          useValue: {
            find: jest.fn(),
            findById: jest.fn(),
            create: jest.fn(),
            findByIdAndUpdate: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get(BookService);
    model = module.get(getModelToken('Book'));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return all books', async () => {
    jest.spyOn(model, 'find').mockReturnValue({
      exec: jest.fn().mockResolvedValue(bookArray),
    } as any);
    const books = await service.findAll();
    expect(books).toEqual(bookArray);
  });

  it('should getOne by id', async () => {
    jest.spyOn(model, 'findById').mockReturnValue({
      exec: jest.fn().mockResolvedValue(mockBook()),
    } as any);
    const book = mockBook();
    const foundedBook = await service.findById('an uuid');
    expect(book).toEqual(foundedBook);
  });

  it('should insert a new book', async () => {
    jest.spyOn(model, 'create').mockImplementationOnce(() =>
      Promise.resolve({
        _id: 'an uuid',
        title: 'Oliver Book',
        authors: 'Tabby',
      }),
    );
    const newBook = await service.create({
      title: 'Oliver Book',
      authors: 'Tabby',
    });

    expect(newBook).toEqual(
      mockBook({
        title: 'Oliver Book',
        authors: 'Tabby',
      }),
    );
  });

  it('should update a book successfully', async () => {
    const uuid = 'some uuid';
    jest.spyOn(model, 'findByIdAndUpdate').mockReturnValue({
      exec: jest.fn().mockResolvedValueOnce({
        _id: uuid,
        title: 'Oliver Book',
        authors: 'Tabby',
      }),
    } as any);
    const updatedBook = await service.update(uuid, {
      title: 'Oliver Book',
      authors: 'Tabby',
    });

    expect(updatedBook).toEqual({
      _id: uuid,
      title: 'Oliver Book',
      authors: 'Tabby',
    });
  });

  it('should throw exception', async () => {
    const uuid = 'some uuid';
    jest.spyOn(model, 'findByIdAndUpdate').mockReturnValue({
      exec: jest.fn().mockResolvedValueOnce(undefined),
    } as any);
    await expect(async () => {
      await service.update(uuid, {
        title: 'Oliver Book',
        authors: 'Tabby',
      });
    }).rejects.toThrow();
  });
});
