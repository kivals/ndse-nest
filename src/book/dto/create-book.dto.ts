import {
  IsDefined,
  IsString,
  IsBoolean,
  MinLength,
  MaxLength,
  IsOptional,
} from 'class-validator';

export class CreateBookDto {
  @IsString()
  @MinLength(3)
  @MaxLength(255)
  @IsDefined()
  readonly title?: string;

  @IsString()
  @MinLength(3)
  @MaxLength(255)
  @IsDefined()
  readonly authors?: string;

  @IsString()
  @IsOptional()
  readonly description?: string;

  @IsBoolean()
  @IsOptional()
  readonly favorite?: boolean;

  @IsString()
  @IsOptional()
  readonly fileCover?: string;

  @IsString()
  @IsOptional()
  readonly fileName?: string;

  @IsString()
  @IsOptional()
  readonly fileBook?: string;
}
