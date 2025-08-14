import { Module } from '@nestjs/common';
import { BillingManageService } from './billing-manage.service';
import { BillingManageController } from './billing-manage.controller';

@Module({
  controllers: [BillingManageController],
  providers: [BillingManageService],
})
export class BillingManageModule {}
