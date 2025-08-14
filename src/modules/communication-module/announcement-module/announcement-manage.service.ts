import { Injectable } from '@nestjs/common';
import { CreateAnnouncementManageDto } from 'src/dtos/requests/create/create-announcement-manage.dto';
import { UpdateAnnouncementManageDto } from 'src/dtos/requests/update/update-announcement-manage.dto';
@Injectable()
export class AnnouncementManageService {
  create(createAnnouncementManageDto: CreateAnnouncementManageDto) {
    return 'This action adds a new announcementManage';
  }

  findAll() {
    return `This action returns all announcementManage`;
  }

  findOne(id: number) {
    return `This action returns a #${id} announcementManage`;
  }

  update(id: number, updateAnnouncementManageDto: UpdateAnnouncementManageDto) {
    return `This action updates a #${id} announcementManage`;
  }

  remove(id: number) {
    return `This action removes a #${id} announcementManage`;
  }
}
