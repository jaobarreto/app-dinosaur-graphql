import { Module } from '@nestjs/common';
import { DinosService } from './dinos.service';
import { DinosResolver } from './dinos.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Dino, DinoSchema } from './entities/dino.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Dino.name, schema: DinoSchema }]),
  ],
  providers: [DinosResolver, DinosService],
})
export class DinosModule {}
