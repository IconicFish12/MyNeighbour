import { PartialType } from '@nestjs/mapped-types';
import { CreateUnitManageDto } from './create-unit-manage.dto';

export class UpdateUnitManageDto extends PartialType(CreateUnitManageDto) {}
