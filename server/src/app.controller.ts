import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { GameService } from './game/game.service';

interface IndexProps {
  initialOutput: Array<string>;
}

@Controller()
export class AppController {
  constructor(private readonly gameService: GameService) {}

  @Get()
  @Render('index')
  index(): IndexProps {
    const initialOutput = this.gameService.getInitialOutput();
    return {
      initialOutput,
    };
  }
}
