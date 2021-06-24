const { join } = require('path');

const outputAs = { outputAs: 'class' };

const userDefinitions = {
  typePaths: ['src/graphql/user/schema.graphql'],
  path: join(process.cwd(), 'src/graphql/user/index.ts'),
  ...outputAs,
};

module.exports = { userDefinitions }
