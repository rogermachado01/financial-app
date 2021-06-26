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
  Mutation: {
    createAccount: async (parent, args, { dataSources }, info) => {
      const data = args.data;
      const api = returnApiType<PrismaAccountData>(dataSources, 'accountAPI')
        .db;

      const response = await api.account
        .create({ data })
        .catch((e) => console.log(e))
        .finally(async () => {
          await api.$disconnect();
        });

      return response;
    },
    setTransaction: async (parent, args, { dataSources }, info) => {
      const data = args.data;
      const api = returnApiType<PrismaAccountData>(dataSources, 'accountAPI')
        .db;
      console.log(data);
      const response = await api.transaction
        .create({ data })
        .catch((e) => console.log(e))
        .finally(async () => {
          await api.$disconnect();
        });
      console.log(response);
      return response;
    },
  },
} as IResolvers<any, any> | IResolvers<any, any>[];

export { AccountResolver };
