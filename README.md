### Graphql Apollo sample

### Installation

`npm install`

### Graphql Playground

When the application is running, you can go to [http://localhost:3000/graphql](http://localhost:3000/graphql) to access the GraphQL Playground.  See [here](https://docs.nestjs.com/graphql/quick-start#playground) for more.

### Mutation Samples
#### Set Owner as Master
```
mutation {
  setOwnerAsMaster (
    setOwnerAsMasterInput: {
      id: 1
    },
  ) {
  	id,
    firstName,
    lastName,
    isMaster,
  },
}
```

#### Get Owners & Their Cats
```
query {
	owners {
    id,
    firstName,
    lastName,
    isMaster,
    cats {
      id,
      name,
      yearAge,
      monthAge,
    }
  }
}
```
