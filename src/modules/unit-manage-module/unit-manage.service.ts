import { Injectable } from '@nestjs/common';
import { CreateUnitManageDto } from 'src/dtos/requests/create/create-unit-manage.dto';
import { UpdateUnitManageDto } from 'src/dtos/requests/update/update-unit-manage.dto';

@Injectable()
export class UnitManageService {
  create(createUnitManageDto: CreateUnitManageDto) {
    return 'This action adds a new unitManage';
  }

  findAll() {
    return `This action returns all unitManage`;
  }

  findOne(id: number) {
    return `This action returns a #${id} unitManage`;
  }

  update(id: number, updateUnitManageDto: UpdateUnitManageDto) {
    return `This action updates a #${id} unitManage`;
  }

  remove(id: number) {
    return `This action removes a #${id} unitManage`;
  }
}
