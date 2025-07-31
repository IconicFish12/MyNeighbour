import { Test, TestingModule } from '@nestjs/testing';
import { ReportingManageController } from './reporting-manage.controller';
import { ReportingManageService } from './reporting-manage.service';

describe('ReportingManageController', () => {
  let controller: ReportingManageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReportingManageController],
      providers: [ReportingManageService],
    }).compile();

    controller = module.get<ReportingManageController>(ReportingManageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
