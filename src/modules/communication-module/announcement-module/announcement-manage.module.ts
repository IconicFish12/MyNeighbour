import { Module } from '@nestjs/common';
import { AnnouncementManageService } from './announcement-manage.service';
import { AnnouncementManageController } from './announcement-manage.controller';

@Module({
  controllers: [AnnouncementManageController],
  providers: [AnnouncementManageService],
})
export class AnnouncementManageModule {}
