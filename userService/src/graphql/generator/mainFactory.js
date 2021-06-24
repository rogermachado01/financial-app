const { GraphQLDefinitionsFactory } = require('@nestjs/graphql');
const { userDefinitions } = require('./index.js');

/* Function used to generate graphql Types for ts  */
const UserTypeFactory = () => new GraphQLDefinitionsFactory().generate({
    ...userDefinitions,
    debug: true,
});

const mainFactory = () => {
    UserTypeFactory()
}

mainFactory()