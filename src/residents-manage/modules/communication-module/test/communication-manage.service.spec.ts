import { Test, TestingModule } from '@nestjs/testing';
import { CommunicationManageService } from './communication-manage.service';

describe('CommunicationManageService', () => {
  let service: CommunicationManageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommunicationManageService],
    }).compile();

    service = module.get<CommunicationManageService>(CommunicationManageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
