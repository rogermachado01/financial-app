import { IResolvers } from 'apollo-server-express';
import { IQuery, IMutation, User, CreateUser } from '.';

const Mutation = {
  createUser: (parent, { data }, ctx, info): User => {
    console.log(data);
    return {
      email: data.email,
      password: data.password,
      id: 'asdasd',
    };
  },
};

const UserResolver = {
  Query: {
    user: (parent, args, ctx, info) => {
      return {};
    },
  },
  Mutation,
} as IResolvers<any, any> | IResolvers<any, any>[];

export { UserResolver };
