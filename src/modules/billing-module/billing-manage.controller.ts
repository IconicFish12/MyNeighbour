import { Controller } from '@nestjs/common';
import { BillingManageService } from './billing-manage.service';

@Controller('billing-manage')
export class BillingManageController {
  constructor(private readonly billingManageService: BillingManageService) {}
}
