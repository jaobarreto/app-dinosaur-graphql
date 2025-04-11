import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { DinosService } from './dinos.service';
import { Dino } from './entities/dino.entity';
import { CreateDinoInput } from './dto/create-dino.input';
import { UpdateDinoInput } from './dto/update-dino.input';
import { FilterDinoInput } from './dto/filter-dino.input';
import { PaginationInput } from './dto/pagination.input';

@Resolver(() => Dino)
export class DinosResolver {
  constructor(private readonly dinosService: DinosService) {}

  @Mutation(() => Dino)
  createDino(@Args('createDinoInput') createDinoInput: CreateDinoInput) {
    return this.dinosService.create(createDinoInput);
  }

  @Query(() => [Dino], { name: 'dinos' })
  findAll(
    @Args('filter', { nullable: true }) filter?: FilterDinoInput,
    @Args('pagination', { nullable: true }) pagination?: PaginationInput,
  ) {
    return this.dinosService.findAll(filter, pagination);
  }

  @Query(() => Dino, { name: 'dino' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.dinosService.findOne(id);
  }

  @Mutation(() => Dino)
  updateDino(
    @Args('id', { type: () => String }) id: string,
    @Args('updateDinoInput') updateDinoInput: UpdateDinoInput,
  ) {
    return this.dinosService.update(id, updateDinoInput);
  }

  @Mutation(() => Dino)
  removeDino(@Args('id', { type: () => String }) id: string) {
    return this.dinosService.remove(id);
  }
}
