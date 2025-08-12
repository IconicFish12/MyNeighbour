import { Module } from '@nestjs/common';
import { ContactManageService } from './contact-manage.service';
import { ContactManageController } from './contact-manage.controller';

@Module({
  controllers: [ContactManageController],
  providers: [ContactManageService],
})
export class ContactManageModule {}
