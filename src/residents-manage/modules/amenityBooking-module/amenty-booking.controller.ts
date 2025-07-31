import { Controller } from '@nestjs/common';
import { AmentyBookingService } from './amenty-booking.service';

@Controller('amenty-booking')
export class AmentyBookingController {
  constructor(private readonly amentyBookingService: AmentyBookingService) {}
}
