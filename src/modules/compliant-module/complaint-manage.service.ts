import { Injectable } from '@nestjs/common';
import { CreateComplaintManageDto } from 'src/dtos/requests/create/create-complaint-manage.dto';
import { UpdateComplaintManageDto } from 'src/dtos/requests/update/update-complaint-manage.dto';

@Injectable()
export class ComplaintManageService {
  create(createComplaintManageDto: CreateComplaintManageDto) {
    return 'This action adds a new complaintManage';
  }

  findAll() {
    return `This action returns all complaintManage`;
  }

  findOne(id: number) {
    return `This action returns a #${id} complaintManage`;
  }

  update(id: number, updateComplaintManageDto: UpdateComplaintManageDto) {
    return `This action updates a #${id} complaintManage`;
  }

  remove(id: number) {
    return `This action removes a #${id} complaintManage`;
  }
}
