import { Test, TestingModule } from '@nestjs/testing';
import { AmentyBookingController } from './amenty-booking.controller';
import { AmentyBookingService } from './amenty-booking.service';

describe('AmentyBookingController', () => {
  let controller: AmentyBookingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AmentyBookingController],
      providers: [AmentyBookingService],
    }).compile();

    controller = module.get<AmentyBookingController>(AmentyBookingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
