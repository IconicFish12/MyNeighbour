import { PartialType } from '@nestjs/mapped-types';
import { CreateSecurityManageDto } from '../../../dtos/requests/create/create-security-manage.dto';

export class UpdateSecurityManageDto extends PartialType(
  CreateSecurityManageDto,
) {}
