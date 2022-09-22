
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreateCatInput {
    name?: Nullable<string>;
    yearAge?: Nullable<number>;
    monthAge?: Nullable<number>;
}

export class SetOwnerAsMasterInput {
    id?: Nullable<number>;
}

export abstract class IQuery {
    abstract cats(): Nullable<Nullable<Cat>[]> | Promise<Nullable<Nullable<Cat>[]>>;

    abstract cat(id: string): Nullable<Cat> | Promise<Nullable<Cat>>;

    abstract owner(id: string): Nullable<Owner> | Promise<Nullable<Owner>>;

    abstract owners(): Nullable<Nullable<Owner>[]> | Promise<Nullable<Nullable<Owner>[]>>;
}

export abstract class IMutation {
    abstract createCat(createCatInput?: Nullable<CreateCatInput>): Nullable<Cat> | Promise<Nullable<Cat>>;

    abstract setOwnerAsMaster(setOwnerAsMasterInput?: Nullable<SetOwnerAsMasterInput>): Nullable<Owner> | Promise<Nullable<Owner>>;
}

export abstract class ISubscription {
    abstract catCreated(): Nullable<Cat> | Promise<Nullable<Cat>>;

    abstract newOwnerIsMaster(): Nullable<Owner> | Promise<Nullable<Owner>>;
}

export class Owner {
    id: number;
    firstName: string;
    lastName: string;
    cats?: Nullable<Cat[]>;
    isMaster?: Nullable<boolean>;
}

export class Cat {
    id?: Nullable<number>;
    name?: Nullable<string>;
    yearAge?: Nullable<number>;
    monthAge?: Nullable<number>;
    owner?: Nullable<Owner>;
}

type Nullable<T> = T | null;
