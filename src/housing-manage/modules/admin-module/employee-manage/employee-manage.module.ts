import { Module } from '@nestjs/common';
import { EmployeeManageService } from './employee-manage.service';
import { EmployeeManageController } from './employee-manage.controller';

@Module({
  controllers: [EmployeeManageController],
  providers: [EmployeeManageService],
})
export class EmployeeManageModule {}
