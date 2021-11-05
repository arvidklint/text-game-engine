import { Controller } from '@nestjs/common';
import { StaticService } from './static.service';

@Controller('static')
export class StaticController {
  constructor(private readonly staticService: StaticService) {}
}
