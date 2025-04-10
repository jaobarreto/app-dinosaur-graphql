import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Dino, DinoDocument } from './entities/dino.entity';
import { CreateDinoInput } from './dto/create-dino.input';
import { UpdateDinoInput } from './dto/update-dino.input';

@Injectable()
export class DinosService {
  constructor(
    @InjectModel(Dino.name) private readonly dinoModel: Model<DinoDocument>,
  ) {}

  async create(createDinoInput: CreateDinoInput): Promise<Dino> {
    const createdDino = new this.dinoModel(createDinoInput);
    return createdDino.save();
  }

  async findAll(): Promise<Dino[]> {
    return this.dinoModel.find().exec();
  }

  async findOne(id: string): Promise<Dino> {
    const dino = await this.dinoModel.findById(id).exec();
    if (!dino) {
      throw new NotFoundException(`Dino com id ${id} não encontrado`);
    }
    return dino;
  }

  async update(id: string, updateDinoInput: UpdateDinoInput): Promise<Dino> {
    const updated = await this.dinoModel
      .findByIdAndUpdate(id, updateDinoInput, { new: true })
      .exec();
    if (!updated) {
      throw new NotFoundException(
        `Dino com id ${id} não encontrado para atualizar`,
      );
    }
    return updated;
  }

  async remove(id: string): Promise<Dino> {
    const deleted = await this.dinoModel.findByIdAndDelete(id).exec();
    if (!deleted) {
      throw new NotFoundException(
        `Dino com id ${id} não encontrado para deletar`,
      );
    }
    return deleted;
  }
}
