import { Module } from '@nestjs/common';
import { ComplaintManageService } from './complaint-manage.service';
import { ComplaintManageController } from './complaint-manage.controller';

@Module({
  controllers: [ComplaintManageController],
  providers: [ComplaintManageService],
})
export class ComplaintManageModule {}
