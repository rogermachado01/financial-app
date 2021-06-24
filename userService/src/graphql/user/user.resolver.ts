import { IResolvers } from 'apollo-server-express';
import { IQuery } from '.';

const UserResolver = {
  Query: {
    user: (parent, args, ctx, info) => {
      return {};
    },
  },
} as IResolvers<any, any> | IResolvers<any, any>[];

export { UserResolver };
