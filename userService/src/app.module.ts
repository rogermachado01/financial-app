import { Module } from '@nestjs/common';
import { AccountModule } from './modules/account.module';
import { UserModule } from './modules/user.module';

@Module({
  imports: [UserModule, AccountModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
