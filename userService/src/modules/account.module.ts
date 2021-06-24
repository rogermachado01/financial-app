import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AccountResolver } from 'src/graphql/account/account.resolver';

@Module({
  imports: [
    GraphQLModule.forRootAsync({
      useFactory: () => ({
        typePaths: ['src/graphql/account/schema.graphql'],
        playground: true,
        path: 'graphql/account',
        resolvers: AccountResolver,
      }),
    }),
  ],
})
export class AccountModule {}
