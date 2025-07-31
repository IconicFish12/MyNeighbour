import { Module } from '@nestjs/common';
import { AmentyBookingService } from './amenty-booking.service';
import { AmentyBookingController } from './amenty-booking.controller';

@Module({
  controllers: [AmentyBookingController],
  providers: [AmentyBookingService],
})
export class AmentyBookingModule {}
