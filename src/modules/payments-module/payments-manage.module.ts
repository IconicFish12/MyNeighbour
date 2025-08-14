import { Module } from '@nestjs/common';
import { PaymentsManageService } from './payments-manage.service';
import { PaymentsManageController } from './payments-manage.controller';
import { BillingManageModule } from './billing-module/billing-manage.module';
import { LeasesManageModule } from './lease-module/leases-manage.module';
import { ResidentManageModule } from '../user-manage-module/resident-module/resident-manage.module';
import { UnitManageModule } from '../unit-manage-module/unit-manage.module';

@Module({
  imports: [
    BillingManageModule,
    LeasesManageModule,
    ResidentManageModule,
    UnitManageModule,
  ],
  controllers: [PaymentsManageController],
  providers: [PaymentsManageService],
  exports: [PaymentsManageService, BillingManageModule, LeasesManageModule],
})
export class PaymentsManageModule {}
