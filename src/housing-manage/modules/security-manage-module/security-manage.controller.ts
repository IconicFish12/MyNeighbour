import { Controller } from '@nestjs/common';
import { SecurityManageService } from './security-manage.service';

@Controller('security-manage')
export class SecurityManageController {
  constructor(private readonly securityManageService: SecurityManageService) {}
}
