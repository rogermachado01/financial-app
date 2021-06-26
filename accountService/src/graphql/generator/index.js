const { join } = require('path');

const outputAs = { outputAs: 'Interface' };

const accountDefinitions = {
  typePaths: ['src/graphql/account/schema.graphql'],
  path: join(process.cwd(), 'src/graphql/account/index.ts'),
  ...outputAs,
};

module.exports = { accountDefinitions }
