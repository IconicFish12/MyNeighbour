import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/common/database/database.module';
import { AmentyBookingModule } from './amenityBooking-module/amenty-booking.module';
import { CitizenProfileManageModule } from './citizenProfile-module/citizen-profile-manage.module';
import { CommunicationManageModule } from './communication-module/communication-manage.module';
import { ComplientManageModule } from './complient-manage-module/complient-manage.module';
import { PaymentManageModule } from './payment-manage-module/payment-manage.module';

@Module({
  imports: [
    DatabaseModule,
    AmentyBookingModule,
    CitizenProfileManageModule,
    CommunicationManageModule,
    ComplientManageModule,
    PaymentManageModule,
  ],
  exports: [
    AmentyBookingModule,
    CitizenProfileManageModule,
    CommunicationManageModule,
    ComplientManageModule,
    PaymentManageModule,
  ],
})
export class ResidentManageModule {}
