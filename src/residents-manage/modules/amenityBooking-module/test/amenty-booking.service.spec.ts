import { Test, TestingModule } from '@nestjs/testing';
import { AmentyBookingService } from './amenty-booking.service';

describe('AmentyBookingService', () => {
  let service: AmentyBookingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AmentyBookingService],
    }).compile();

    service = module.get<AmentyBookingService>(AmentyBookingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
