import { Controller } from '@nestjs/common';
import { DirectoryManageService } from './directory-manage.service';

@Controller('directory-manage')
export class DirectoryManageController {
  constructor(private readonly directoryManageService: DirectoryManageService) {}
}
