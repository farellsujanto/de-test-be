import { Injectable } from '@nestjs/common';
import { Cat } from '../graphql.schema';

@Injectable()
export class CatsService {
  private readonly cats: Array<Cat & { ownerId?: number }> = [
    { id: 1, name: 'Snowball', yearAge: 4, monthAge: 0, ownerId: 1, },
    { id: 2, name: 'Blackly', yearAge: 2, monthAge: 3, ownerId: 1, },
    { id: 3, name: 'Waffle', yearAge: 4, monthAge: 0, ownerId: 2, },
    { id: 4, name: 'Blueberry', yearAge: 2, monthAge: 3, ownerId: 2, },
    { id: 5, name: 'Strawberry', yearAge: 4, monthAge: 0, ownerId: 3, },
    { id: 6, name: 'Mapple', yearAge: 2, monthAge: 3, ownerId: 4, },
  ];

  create(cat: Cat): Cat {
    cat.id = this.cats.length + 1;
    this.cats.push(cat);
    return cat;
  }

  findAll(): Cat[] {
    return this.cats;
  }

  findOneById(id: number): Cat {
    return this.cats.find(cat => cat.id === id);
  }
}
