import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

import { HeroModule } from './hero/hero.module';
import { PricingModule } from './pricing/pricing.module';
import { AboutModule } from './about/about.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'),
      serveRoot: '/uploads',
    }),
    HeroModule,
    PricingModule,
    AboutModule,
  ],
})
export class AppModule {}
