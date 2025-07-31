import { Controller } from '@nestjs/common';
import { CommunicationManageService } from './communication-manage.service';

@Controller('communication-manage')
export class CommunicationManageController {
  constructor(private readonly communicationManageService: CommunicationManageService) {}
}
