import { Injectable } from '@nestjs/common';
import { CreateComplientManageDto } from './dto/create-complient-manage.dto';
import { UpdateComplientManageDto } from './dto/update-complient-manage.dto';

@Injectable()
export class ComplientManageService {
  create(createComplientManageDto: CreateComplientManageDto) {
    return 'This action adds a new complientManage';
  }

  findAll() {
    return `This action returns all complientManage`;
  }

  findOne(id: number) {
    return `This action returns a #${id} complientManage`;
  }

  update(id: number, updateComplientManageDto: UpdateComplientManageDto) {
    return `This action updates a #${id} complientManage`;
  }

  remove(id: number) {
    return `This action removes a #${id} complientManage`;
  }
}
