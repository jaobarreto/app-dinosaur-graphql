import { InputType, Field, Float } from '@nestjs/graphql';

@InputType()
export class CreateDinoInput {
  @Field()
  nome: string;

  @Field()
  periodo: string;

  @Field()
  dieta: string;

  @Field(() => Float)
  comprimento: number;

  @Field(() => Float)
  peso: number;

  @Field({ nullable: true })
  descricao?: string;

  @Field({ nullable: true })
  imagemUrl?: string;
}
