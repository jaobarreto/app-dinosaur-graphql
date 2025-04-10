import { CreateDinoInput } from './create-dino.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateDinoInput extends PartialType(CreateDinoInput) {
  @Field()
  _id: string;
}
