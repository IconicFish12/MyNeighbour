import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RouterModule } from '@nestjs/core';
import { DatabaseModule } from './common/database/database.module';
import { ResidentManageModule } from './residents-manage/modules/resident-manage.module';
import { HousingManageModule } from './housing-manage/modules/housing-manage.module';

@Module({
  imports: [
    ResidentManageModule,
    HousingManageModule,
    DatabaseModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    RouterModule.register([
      {
        path: 'resident-manage',
        module: ResidentManageModule,
        children: [],
      },
      {
        path: 'housing-manage',
        module: HousingManageModule,
        children: [],
      },
    ]),
  ],
})
export class AppModule {}
