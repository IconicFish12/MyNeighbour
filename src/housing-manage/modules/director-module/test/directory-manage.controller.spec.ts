import { Test, TestingModule } from '@nestjs/testing';
import { DirectoryManageController } from './directory-manage.controller';
import { DirectoryManageService } from './directory-manage.service';

describe('DirectoryManageController', () => {
  let controller: DirectoryManageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DirectoryManageController],
      providers: [DirectoryManageService],
    }).compile();

    controller = module.get<DirectoryManageController>(DirectoryManageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
