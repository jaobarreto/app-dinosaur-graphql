import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Dino {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
