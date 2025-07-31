import { Controller } from '@nestjs/common';
import { ReportingManageService } from './reporting-manage.service';

@Controller('reporting-manage')
export class ReportingManageController {
  constructor(private readonly reportingManageService: ReportingManageService) {}
}
