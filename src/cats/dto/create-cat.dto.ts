import { IsString, IsNumber } from 'class-validator';
export class CreateCatDto {
  @IsString()
  name: string;

  @IsString()
  breed: string;

  @IsNumber()
  age: number;
}
