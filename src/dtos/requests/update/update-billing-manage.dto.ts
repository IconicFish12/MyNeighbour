import { PartialType } from '@nestjs/mapped-types';
import { CreateBillingManageDto } from '../../../../dtos/requests/create/create-billing-manage.dto';

export class UpdateBillingManageDto extends PartialType(
  CreateBillingManageDto,
) {}
