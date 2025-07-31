import { Test, TestingModule } from '@nestjs/testing';
import { ReportingManageService } from './reporting-manage.service';

describe('ReportingManageService', () => {
  let service: ReportingManageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReportingManageService],
    }).compile();

    service = module.get<ReportingManageService>(ReportingManageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
