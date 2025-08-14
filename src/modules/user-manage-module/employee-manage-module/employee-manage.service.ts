import { Injectable } from '@nestjs/common';
import { CreateEmployeeManageDto } from 'src/dtos/requests/create/create-employee-manage.dto';
import { UpdateEmployeeManageDto } from 'src/dtos/requests/update/update-employee-manage.dto';

@Injectable()
export class EmployeeManageService {
  create(createEmployeeManageDto: CreateEmployeeManageDto) {
    return 'This action adds a new employeeManage';
  }

  findAll() {
    return `This action returns all employeeManage`;
  }

  findOne(id: number) {
    return `This action returns a #${id} employeeManage`;
  }

  update(id: number, updateEmployeeManageDto: UpdateEmployeeManageDto) {
    return `This action updates a #${id} employeeManage`;
  }

  remove(id: number) {
    return `This action removes a #${id} employeeManage`;
  }
}
