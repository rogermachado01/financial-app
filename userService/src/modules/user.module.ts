import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { UserResolver } from 'src/graphql/user/user.resolver';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    GraphQLModule.forRootAsync({
      useFactory: () => ({
        typePaths: ['src/graphql/user/schema.graphql'],
        playground: true,
        path: 'graphql/user',
        resolvers: UserResolver,
      }),
    }),
    MongooseModule.forRoot('mongodb://teste:teste@localhost:27017'),
  ],
})
export class UserModule {}
