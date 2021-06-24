const { GraphQLDefinitionsFactory } = require('@nestjs/graphql');
const { userDefinitions, accountDefinitions } = require('./index.js');

/* Function used to generate graphql Types for ts  */
const UserTypeFactory = () =>
  new GraphQLDefinitionsFactory().generate({
    ...userDefinitions,
    debug: true,
  });

const AccountTypeFactory = () =>
  new GraphQLDefinitionsFactory().generate({
    ...accountDefinitions,
    debug: true,
  });

const mainFactory = () => {
  UserTypeFactory();
  AccountTypeFactory();
};

mainFactory();
