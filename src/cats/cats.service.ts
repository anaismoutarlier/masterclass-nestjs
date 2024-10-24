import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';

@Injectable()
export class CatsService {
  private cats: (CreateCatDto & { id: number })[];
  private currentId: number;
  constructor() {
    this.cats = [];
    this.currentId = 1;
  }

  create(createCatDto: CreateCatDto) {
    const cat = {
      id: this.currentId++,
      ...createCatDto,
    };
    this.cats.push(cat);
    return cat;
  }

  findAll() {
    return this.cats;
  }

  findOne(id: number) {
    return this.cats.find((cat) => cat.id === id) || null;
  }

  update(id: number, updateCatDto: UpdateCatDto) {
    const index = this.cats.findIndex((cat) => cat.id === id);
    this.cats[index] = { ...this.cats[index], ...updateCatDto };
    return this.cats[index];
  }

  remove(id: number) {
    this.cats = this.cats.filter((cat) => cat.id !== id);
  }
}
