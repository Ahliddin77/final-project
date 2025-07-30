import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { HeroDto } from './dto/hero.dto';
import * as path from 'path';
import * as fs from 'fs';

@Injectable()
export class HeroService {
  constructor(private prisma: PrismaService) {}

  createHero(data: HeroDto, imageUrl: string) {
    return this.prisma.hero.create({
      data: {
        title: data.title,
        subtitle: data.subtitle,
        imageUrl,
      },
    });
  }

  async updateHero(id: number, dto: Partial<HeroDto>, filename?: string) {
    const existingHero = await this.prisma.hero.findUnique({ where: { id } });

    if (!existingHero) {
      throw new NotFoundException('Hero not found');
    }

    if (filename && existingHero.imageUrl) {
      const oldPath = path.join(
        __dirname,
        '../../uploads',
        existingHero.imageUrl,
      );
      if (fs.existsSync(oldPath)) {
        fs.unlinkSync(oldPath);
      }
    }

    return this.prisma.hero.update({
      where: { id },
      data: {
        title: dto.title ?? existingHero.title,
        subtitle: dto.subtitle ?? existingHero.subtitle,
        imageUrl: filename ?? existingHero.imageUrl,
      },
    });
  }

  async deleteHero(id: number) {
    const hero = await this.prisma.hero.findUnique({ where: { id } });

    if (!hero) {
      throw new Error('Hero not found');
    }

    const imagePath = path.join(
      __dirname,
      '..',
      '..',
      'uploads',
      hero.imageUrl,
    );
    if (fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath);
    }

    return this.prisma.hero.delete({ where: { id } });
  }

  getAllHeroes() {
    return this.prisma.hero.findMany();
  }
}
