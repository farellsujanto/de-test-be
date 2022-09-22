import { UseGuards } from '@nestjs/common';
import { Query, Parent, ResolveField, Resolver, Mutation, Args, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { Cat, Owner } from '../graphql.schema';
import { OwnersService } from '../owners/owners.service';
import { CatsGuard } from './cats.guard';
import { SetOwnnerAsMasterDto } from './dto/set-owner-as-master.dto';

const pubSub = new PubSub();

@Resolver('Cat')
export class CatOwnerResolver {
  constructor(private readonly ownersService: OwnersService) {}

  @Query('owners')
  @UseGuards(CatsGuard)
  async getOwners() {
    return this.ownersService.findAll();
  }

  @Mutation('setOwnerAsMaster')
  async create(@Args('setOwnerAsMasterInput') args: SetOwnnerAsMasterDto): Promise<Cat> {
    const createdCat = await this.ownersService.setMaster(args);
    pubSub.publish('newOwnerIsMaster', { catCreated: createdCat });
    return createdCat;
  }

  @ResolveField()
  async owner(@Parent() cat: Cat & { ownerId: number }): Promise<Owner> {
    return this.ownersService.findOneById(cat.ownerId);
  }

  @Subscription('newOwnerIsMaster')
  catCreated() {
    return pubSub.asyncIterator('newOwnerIsMaster');
  }
}
