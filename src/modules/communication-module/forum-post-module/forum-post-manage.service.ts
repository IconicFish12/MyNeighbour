import { Injectable } from '@nestjs/common';
import { CreateForumPostManageDto } from '../../../dtos/requests/create/create-forum-post-manage.dto';
import { UpdateForumPostManageDto } from './dto/update-forum-post-manage.dto';

@Injectable()
export class ForumPostManageService {
  create(createForumPostManageDto: CreateForumPostManageDto) {
    return 'This action adds a new forumPostManage';
  }

  findAll() {
    return `This action returns all forumPostManage`;
  }

  findOne(id: number) {
    return `This action returns a #${id} forumPostManage`;
  }

  update(id: number, updateForumPostManageDto: UpdateForumPostManageDto) {
    return `This action updates a #${id} forumPostManage`;
  }

  remove(id: number) {
    return `This action removes a #${id} forumPostManage`;
  }
}
