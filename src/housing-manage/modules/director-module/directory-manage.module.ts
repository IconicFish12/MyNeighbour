import { Module } from '@nestjs/common';
import { DirectoryManageService } from './directory-manage.service';
import { DirectoryManageController } from './directory-manage.controller';

@Module({
  controllers: [DirectoryManageController],
  providers: [DirectoryManageService],
})
export class DirectoryManageModule {}
