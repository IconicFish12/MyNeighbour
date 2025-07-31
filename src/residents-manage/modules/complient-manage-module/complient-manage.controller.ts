import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ComplientManageService } from './complient-manage.service';
import { CreateComplientManageDto } from './dto/create-complient-manage.dto';
import { UpdateComplientManageDto } from './dto/update-complient-manage.dto';

@Controller('complient-manage')
export class ComplientManageController {
  constructor(private readonly complientManageService: ComplientManageService) {}

  @Post()
  create(@Body() createComplientManageDto: CreateComplientManageDto) {
    return this.complientManageService.create(createComplientManageDto);
  }

  @Get()
  findAll() {
    return this.complientManageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.complientManageService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateComplientManageDto: UpdateComplientManageDto) {
    return this.complientManageService.update(+id, updateComplientManageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.complientManageService.remove(+id);
  }
}
