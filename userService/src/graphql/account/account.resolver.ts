import { IResolvers } from 'apollo-server-express';
import { IQuery } from './index';

const AccountResolver = {
  Query: <IQuery>{
    account: (parent, args, ctx, info) => {
      return {};
    },
  },
} as IResolvers<any, any> | IResolvers<any, any>[];

export { AccountResolver };
