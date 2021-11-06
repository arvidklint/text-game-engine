import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GameModule } from './game/game.module';
import { GameService } from './game/game.service';
import { StaticModule } from './static/static.module';

@Module({
  imports: [StaticModule, GameModule],
  controllers: [AppController],
  providers: [AppService, GameService],
})
export class AppModule {}
