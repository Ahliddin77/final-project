import {
  Controller,
  Post,
  Get,
  Body,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { AboutDto } from './dto/about.dto';
import { AboutService } from './about.service';

@Controller('about')
export class AboutController {
  constructor(private aboutService: AboutService) {}

  @Post()
  createAbout(@Body() dto: AboutDto) {
    return this.aboutService.createAbout(dto);
  }

  @Get()
  getAllAbout() {
    return this.aboutService.getAllAbout();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: AboutDto) {
    return this.aboutService.update(+id, dto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.aboutService.delete(+id);
  }
}
