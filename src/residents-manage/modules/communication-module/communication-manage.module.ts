import { Module } from '@nestjs/common';
import { CommunicationManageService } from './communication-manage.service';
import { CommunicationManageController } from './communication-manage.controller';

@Module({
  controllers: [CommunicationManageController],
  providers: [CommunicationManageService],
})
export class CommunicationManageModule {}
