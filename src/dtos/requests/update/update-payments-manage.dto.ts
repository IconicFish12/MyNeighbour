import { PartialType } from '@nestjs/mapped-types';
import { CreatePaymentsManageDto } from './create-payments-manage.dto';

export class UpdatePaymentsManageDto extends PartialType(CreatePaymentsManageDto) {}
