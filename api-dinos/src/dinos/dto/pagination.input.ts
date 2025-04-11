import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class PaginationInput {
  @Field(() => Int, { nullable: true, defaultValue: 1 })
  page: number = 1;

  @Field(() => Int, { nullable: true, defaultValue: 10 })
  limit: number = 10;
}
