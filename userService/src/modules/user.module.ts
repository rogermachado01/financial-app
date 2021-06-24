import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { UserResolver } from 'src/graphql/user/user.resolver';

@Module({
  imports: [
    GraphQLModule.forRootAsync({
      useFactory: () => ({
        typePaths: ['src/graphql/user/schema.graphql'],
        playground: true,
        path: 'graphql',
        resolvers: UserResolver,
      }),
    }),
  ],
})
export class UserModule {}
