import { Module } from '@nestjs/common';
import { ComplientManageService } from './complient-manage.service';
import { ComplientManageController } from './complient-manage.controller';

@Module({
  controllers: [ComplientManageController],
  providers: [ComplientManageService],
})
export class ComplientManageModule {}
