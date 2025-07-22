import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/common/database/database.module';

@Module({
  imports: [DatabaseModule],
  exports: [],
})
export class HousingManageModule {}
