import { Module } from '@nestjs/common';
import { UnitManageService } from './unit-manage.service';
import { UnitManageController } from './unit-manage.controller';

@Module({
  controllers: [UnitManageController],
  providers: [UnitManageService],
})
export class UnitManageModule {}
