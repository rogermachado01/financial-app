const { join } = require('path');

const outputAs = { outputAs: 'Interface' };

const userDefinitions = {
  typePaths: ['src/graphql/user/schema.graphql'],
  path: join(process.cwd(), 'src/graphql/user/index.ts'),
  ...outputAs,
};

const accountDefinitions = {
  typePaths: ['src/graphql/account/schema.graphql'],
  path: join(process.cwd(), 'src/graphql/account/index.ts'),
  ...outputAs,
};

module.exports = { userDefinitions, accountDefinitions }
