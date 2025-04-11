import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class FilterDinoInput {
  @Field({ nullable: true })
  nome?: string;

  @Field({ nullable: true })
  periodo?: string;

  @Field({ nullable: true })
  dieta?: string;

  @Field({ nullable: true })
  comprimento?: number;

  @Field({ nullable: true })
  peso?: number;
}
