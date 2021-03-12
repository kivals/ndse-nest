import { IsString } from 'class-validator';

export class CreateBookDto {
  @IsString()
  readonly title: string;
  @IsString()
  readonly authors: string;
  readonly description: string;
  readonly favorite: boolean;
  readonly fileCover: string;
  readonly fileName: string;
  readonly fileBook: string;
}
