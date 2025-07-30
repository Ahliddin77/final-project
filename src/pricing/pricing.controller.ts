import {
  Controller,
  Post,
  Body,
  Get,
  Delete,
  Param,
  Patch,
} from '@nestjs/common';
import { PricingDto } from './dto/pricing.dto';
import { PricingService } from './pricing.service';

@Controller('pricing')
export class PricingController {
  constructor(private pricingService: PricingService) {}

  @Post()
  createPricing(@Body() dto: PricingDto) {
    return this.pricingService.createPricing(dto);
  }

  @Get()
  getAllPricing() {
    return this.pricingService.getAllPricing();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: PricingDto) {
    return this.pricingService.update(+id, dto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.pricingService.delete(+id);
  }
}
