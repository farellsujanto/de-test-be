import { Injectable } from '@nestjs/common';
import { SetOwnnerAsMasterDto } from 'src/cats/dto/set-owner-as-master.dto';
import { Owner } from '../graphql.schema';

@Injectable()
export class OwnersService {
  private readonly owners: Owner[] = [
    { id: 1, firstName: 'John', lastName: 'Lennon', isMaster: true, cats: [
        { id: 1, name: 'Snowball', yearAge: 4, monthAge: 0, },
        { id: 2, name: 'Blackly', yearAge: 2, monthAge: 3, },
    ] },
    { id: 2, firstName: 'Paul', lastName: 'McCartney', isMaster: false, cats: [
        { id: 3, name: 'Waffle', yearAge: 4, monthAge: 0, },
        { id: 4, name: 'Blueberry', yearAge: 2, monthAge: 3, },
    ] },
    { id: 3, firstName: 'Georgia', lastName: 'Harrison', isMaster: false, cats: [
        { id: 5, name: 'Strawberry', yearAge: 4, monthAge: 0, },
    ] },
    { id: 4, firstName: 'Ringo', lastName: 'Starr', isMaster: false, cats: [
        { id: 6, name: 'Mapple', yearAge: 2, monthAge: 3, },
    ] },
  ];

  setMaster(args: SetOwnnerAsMasterDto): Owner {
    // Remove previous master tag
    this.owners.find(owner => owner.isMaster === true).isMaster = false;
    // Add new master tag
    const newMaster = this.findOneById(args.id) ;
    newMaster.isMaster = true;
    return newMaster;
  }

  findAll(): Owner[] {
    return this.owners;
  }

  findOneById(id: number): Owner {
    return this.owners.find(owner => owner.id === id);
  }
}
