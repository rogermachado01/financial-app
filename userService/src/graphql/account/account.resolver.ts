import { IResolvers } from 'apollo-server-express';
import { PrismaAccountData } from 'src/modules/account.module';
import { IQuery } from './index';

const returnApiType = <T>(dataSource: any, name: string): T => {
  return dataSource[name] as T;
};

const AccountResolver = {
  Query: <IQuery>{
    account: (parent, args, { dataSources }, info) => {
      const api = returnApiType<PrismaAccountData>(dataSources, 'accountAPI')
        .db;
      console.log(api.account);

      return {
        id: 'asdasd',
      };
    },
  },
} as IResolvers<any, any> | IResolvers<any, any>[];

export { AccountResolver };
