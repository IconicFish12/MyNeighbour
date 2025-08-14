import { PartialType } from '@nestjs/mapped-types';
import { CreateUserManageDto } from '../../../dtos/requests/create/create-user-manage.dto';

export class UpdateUserManageDto extends PartialType(CreateUserManageDto) {}
