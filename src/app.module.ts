import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RouterModule } from '@nestjs/core';
import { DatabaseModule } from './common/database/database.module';

@Module({
  imports: [
    DatabaseModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    RouterModule.register([
      {
        path: 'api',
        children: [],
      },
    ]),
  ],
})
export class AppModule {}
