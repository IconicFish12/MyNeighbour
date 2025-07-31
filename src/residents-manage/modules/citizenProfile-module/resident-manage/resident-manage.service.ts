import { Injectable } from '@nestjs/common';
import { CreateResidentManageDto } from './dto/create-resident-manage.dto';
import { UpdateResidentManageDto } from './dto/update-resident-manage.dto';

@Injectable()
export class ResidentManageService {
  create(createResidentManageDto: CreateResidentManageDto) {
    return 'This action adds a new residentManage';
  }

  findAll() {
    return `This action returns all residentManage`;
  }

  findOne(id: number) {
    return `This action returns a #${id} residentManage`;
  }

  update(id: number, updateResidentManageDto: UpdateResidentManageDto) {
    return `This action updates a #${id} residentManage`;
  }

  remove(id: number) {
    return `This action removes a #${id} residentManage`;
  }
}
