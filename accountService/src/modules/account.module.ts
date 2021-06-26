import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AccountResolver } from 'src/graphql/account/account.resolver';
import { PrismaClient } from '@prisma/client';
import { DataSource } from 'apollo-datasource';
export class PrismaAccountData extends DataSource {
  db: PrismaClient;

  initialize() {
    this.db = new PrismaClient();
  }
}
@Module({
  imports: [
    GraphQLModule.forRootAsync({
      useFactory: () => ({
        typePaths: ['src/graphql/account/schema.graphql'],
        playground: true,
        path: 'graphql/account',
        dataSources: () => {
          return {
            accountAPI: new PrismaAccountData(),
          };
        },
        resolvers: AccountResolver,
      }),
    }),
  ],
})
export class AccountModule {}
