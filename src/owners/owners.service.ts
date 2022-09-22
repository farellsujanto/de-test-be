import { Injectable } from '@nestjs/common';
import { SetOwnnerAsMasterDto } from 'src/cats/dto/set-owner-as-master.dto';
import { Owner } from '../graphql.schema';

@Injectable()
export class OwnersService {
  private readonly owners: Owner[] = [
    { id: 1, firstName: 'John', lastName: 'Lennon', isMaster: true, },
    { id: 2, firstName: 'Paul', lastName: 'McCartney', isMaster: false, },
    { id: 3, firstName: 'Georgia', lastName: 'Harrison', isMaster: false, },
    { id: 4, firstName: 'Ringo', lastName: 'Starr', isMaster: false, },
  ];

  setMaster(args: SetOwnnerAsMasterDto): Owner {
    // Remove previous master tag
    this.owners.find(owner => owner.isMaster === true).isMaster = false;
    // Add new master tag
    const test = this.owners.find(owner => owner.id === args.id);
    test.isMaster = true;
    return test;
  }

  findAll(): Owner[] {
    return this.owners;
  }

  findOneById(id: number): Owner {
    return this.owners.find(owner => owner.id === id);
  }
}
