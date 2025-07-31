import { Module } from '@nestjs/common';
import { SecurityManageService } from './security-manage.service';
import { SecurityManageController } from './security-manage.controller';

@Module({
  controllers: [SecurityManageController],
  providers: [SecurityManageService],
})
export class SecurityManageModule {}
