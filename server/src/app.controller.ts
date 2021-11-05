import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

interface IndexProps {
  initialOutput: Array<string>;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  index(): IndexProps {
    const initialOutput = this.appService.getInitialOutput();
    return {
      initialOutput,
    };
  }
}
