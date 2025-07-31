import { PartialType } from '@nestjs/mapped-types';
import { CreateComplientManageDto } from './create-complient-manage.dto';

export class UpdateComplientManageDto extends PartialType(CreateComplientManageDto) {}
