import { ObjectType, Field, Float } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type DinoDocument = Dino & Document;

@Schema()
@ObjectType()
export class Dino {
  @Field(() => String)
  _id: Types.ObjectId;

  @Prop({ required: true })
  @Field(() => String)
  nome: string;

  @Prop({ required: true, enum: ['Triássico', 'Jurássico', 'Cretáceo'] })
  @Field(() => String)
  periodo: string;

  @Prop({ required: true, enum: ['Herbívoro', 'Carnívoro', 'Onívoro'] })
  @Field(() => String)
  dieta: string;

  @Prop({ required: true })
  @Field(() => Float)
  comprimento: number;

  @Prop({ required: true })
  @Field(() => Float)
  peso: number;

  @Prop()
  @Field(() => String, { nullable: true })
  descricao?: string;

  @Prop()
  @Field(() => String, { nullable: true })
  imagemUrl?: string;
}

export const DinoSchema = SchemaFactory.createForClass(Dino);
