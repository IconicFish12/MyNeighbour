import { Test, TestingModule } from '@nestjs/testing';
import { DirectoryManageService } from './directory-manage.service';

describe('DirectoryManageService', () => {
  let service: DirectoryManageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DirectoryManageService],
    }).compile();

    service = module.get<DirectoryManageService>(DirectoryManageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
