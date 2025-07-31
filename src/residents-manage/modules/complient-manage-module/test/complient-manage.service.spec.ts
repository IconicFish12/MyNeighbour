import { Test, TestingModule } from '@nestjs/testing';
import { ComplientManageService } from './complient-manage.service';

describe('ComplientManageService', () => {
  let service: ComplientManageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ComplientManageService],
    }).compile();

    service = module.get<ComplientManageService>(ComplientManageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
