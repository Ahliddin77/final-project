import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PricingDto } from './dto/pricing.dto';

@Injectable()
export class PricingService {
  constructor(private prisma: PrismaService) {}

  createPricing(data: PricingDto) {
    return this.prisma.pricing.create({
      data,
    });
  }

  getAllPricing() {
    return this.prisma.pricing.findMany();
  }

  update(id: number, dto: PricingDto) {
    return this.prisma.pricing.update({
      where: { id },
      data: dto,
    });
  }

  delete(id: number) {
    return this.prisma.pricing.delete({ where: { id } });
  }
}
