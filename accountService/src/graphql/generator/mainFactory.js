const { GraphQLDefinitionsFactory } = require('@nestjs/graphql');
const { userDefinitions, accountDefinitions } = require('./index.js');

/* Function used to generate graphql Types for ts  */

const AccountTypeFactory = () =>
  new GraphQLDefinitionsFactory().generate({
    ...accountDefinitions,
    debug: true,
  });

const mainFactory = () => {
  AccountTypeFactory();
};

mainFactory();
