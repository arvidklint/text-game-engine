import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getInitialOutput(): Array<string> {
    return ['This is the initial output', 'Another line'];
  }
}
