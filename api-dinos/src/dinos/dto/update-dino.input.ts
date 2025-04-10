import { CreateDinoInput } from './create-dino.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateDinoInput extends PartialType(CreateDinoInput) {
  @Field(() => Int)
  id: number;
}
