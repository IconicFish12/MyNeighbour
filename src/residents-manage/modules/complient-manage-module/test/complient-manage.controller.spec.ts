import { Test, TestingModule } from '@nestjs/testing';
import { ComplientManageController } from './complient-manage.controller';
import { ComplientManageService } from './complient-manage.service';

describe('ComplientManageController', () => {
  let controller: ComplientManageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComplientManageController],
      providers: [ComplientManageService],
    }).compile();

    controller = module.get<ComplientManageController>(ComplientManageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
