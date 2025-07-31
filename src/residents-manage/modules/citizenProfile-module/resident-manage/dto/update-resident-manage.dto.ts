import { PartialType } from '@nestjs/mapped-types';
import { CreateResidentManageDto } from './create-resident-manage.dto';

export class UpdateResidentManageDto extends PartialType(CreateResidentManageDto) {}
