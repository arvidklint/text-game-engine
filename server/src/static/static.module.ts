import { Module } from '@nestjs/common';
import { StaticService } from './static.service';
import { StaticController } from './static.controller';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../..', 'static/dist'),
      serveRoot: '/static',
    }),
  ],
  controllers: [StaticController],
  providers: [StaticService],
})
export class StaticModule {}
