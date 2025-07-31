import { Module } from '@nestjs/common';
import { ReportingManageService } from './reporting-manage.service';
import { ReportingManageController } from './reporting-manage.controller';
import { FinancialReportModule } from './financial-report-module/financial-report.module';
import { OperationalReportModule } from './operational-report-module/operational-report.module';

@Module({
  imports: [FinancialReportModule, OperationalReportModule],
  controllers: [ReportingManageController],
  providers: [ReportingManageService],
})
export class ReportingManageModule {}
