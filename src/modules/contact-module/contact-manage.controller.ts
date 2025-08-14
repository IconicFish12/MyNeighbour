import { Controller } from '@nestjs/common';
import { ContactManageService } from './contact-manage.service';

@Controller('contact-manage')
export class ContactManageController {
  constructor(private readonly contactManageService: ContactManageService) {}
}
