import { Test, TestingModule } from '@nestjs/testing';
import { CommunicationManageController } from './communication-manage.controller';
import { CommunicationManageService } from './communication-manage.service';

describe('CommunicationManageController', () => {
  let controller: CommunicationManageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CommunicationManageController],
      providers: [CommunicationManageService],
    }).compile();

    controller = module.get<CommunicationManageController>(CommunicationManageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
