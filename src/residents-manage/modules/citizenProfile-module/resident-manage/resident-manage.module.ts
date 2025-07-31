import { Module } from '@nestjs/common';
import { ResidentManageService } from './resident-manage.service';
import { ResidentManageController } from './resident-manage.controller';

@Module({
  controllers: [ResidentManageController],
  providers: [ResidentManageService],
})
export class ResidentManageModule {}
