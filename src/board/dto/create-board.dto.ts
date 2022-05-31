import { IsString } from 'class-validator';

export class CreateBoardDto {
  @IsString()
  author: string;

  @IsString()
  title: string;

  @IsString()
  contents: string;
}
