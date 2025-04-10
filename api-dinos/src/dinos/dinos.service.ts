import { Injectable } from '@nestjs/common';
import { CreateDinoInput } from './dto/create-dino.input';
import { UpdateDinoInput } from './dto/update-dino.input';

@Injectable()
export class DinosService {
  create(createDinoInput: CreateDinoInput) {
    return 'This action adds a new dino';
  }

  findAll() {
    return `This action returns all dinos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dino`;
  }

  update(id: number, updateDinoInput: UpdateDinoInput) {
    return `This action updates a #${id} dino`;
  }

  remove(id: number) {
    return `This action removes a #${id} dino`;
  }
}
