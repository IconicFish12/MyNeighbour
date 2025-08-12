import { Module } from '@nestjs/common';
import { ForumPostManageService } from './forum-post-manage.service';
import { ForumPostManageController } from './forum-post-manage.controller';

@Module({
  controllers: [ForumPostManageController],
  providers: [ForumPostManageService],
})
export class ForumPostManageModule {}
