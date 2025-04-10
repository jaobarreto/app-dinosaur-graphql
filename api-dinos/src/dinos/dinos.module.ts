import { Module } from '@nestjs/common';
import { DinosService } from './dinos.service';
import { DinosResolver } from './dinos.resolver';

@Module({
  providers: [DinosResolver, DinosService],
})
export class DinosModule {}
