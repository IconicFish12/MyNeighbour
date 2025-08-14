import { Injectable } from '@nestjs/common';
import { CreateForumCommentManageDto } from 'src/dtos/requests/create/create-forum-comment-manage.dto';
import { UpdateForumCommentManageDto } from 'src/dtos/requests/update/update-forum-comment-manage.dto';

@Injectable()
export class ForumCommentManageService {
  create(createForumCommentManageDto: CreateForumCommentManageDto) {
    return 'This action adds a new forumCommentManage';
  }

  findAll() {
    return `This action returns all forumCommentManage`;
  }

  findOne(id: number) {
    return `This action returns a #${id} forumCommentManage`;
  }

  update(id: number, updateForumCommentManageDto: UpdateForumCommentManageDto) {
    return `This action updates a #${id} forumCommentManage`;
  }

  remove(id: number) {
    return `This action removes a #${id} forumCommentManage`;
  }
}
