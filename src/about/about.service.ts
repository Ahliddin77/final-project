import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AboutDto } from './dto/about.dto';

@Injectable()
export class AboutService {
  constructor(private prisma: PrismaService) {}

  createAbout(data: AboutDto) {
    return this.prisma.about.create({
      data,
    });
  }

  getAllAbout() {
    return this.prisma.about.findMany();
  }

  update(id: number, dto: AboutDto) {
    return this.prisma.about.update({
      where: { id },
      data: dto,
    });
  }

  delete(id: number) {
    return this.prisma.about.delete({ where: { id } });
  }
}
