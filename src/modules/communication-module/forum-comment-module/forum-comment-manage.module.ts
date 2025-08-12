import { Module } from '@nestjs/common';
import { ForumCommentManageService } from './forum-comment-manage.service';
import { ForumCommentManageController } from './forum-comment-manage.controller';

@Module({
  controllers: [ForumCommentManageController],
  providers: [ForumCommentManageService],
})
export class ForumCommentManageModule {}
