import {
  Controller,
  Post,
  Get,
  UploadedFile,
  UseInterceptors,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { HeroService } from './hero.service';
import { HeroDto } from './dto/hero.dto';

@Controller('hero')
export class HeroController {
  constructor(private heroService: HeroService) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const uniqueName = `${Date.now()}${extname(file.originalname)}`;
          cb(null, uniqueName);
        },
      }),
    }),
  )
  async createHero(
    @UploadedFile() file: Express.Multer.File,
    @Body() body: HeroDto,
  ) {
    return this.heroService.createHero(body, file.filename);
  }

  @Patch(':id')
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const uniqueName = `${Date.now()}${extname(file.originalname)}`;
          cb(null, uniqueName);
        },
      }),
    }),
  )
  async patchHero(
    @Param('id') id: string,
    @UploadedFile() file: Express.Multer.File,
    @Body() body: Partial<HeroDto>,
  ) {
    return this.heroService.updateHero(+id, body, file?.filename);
  }

  @Delete(':id')
  async deleteHero(@Param('id') id: string) {
    return this.heroService.deleteHero(+id);
  }

  @Get()
  getHeroes() {
    return this.heroService.getAllHeroes();
  }
}
