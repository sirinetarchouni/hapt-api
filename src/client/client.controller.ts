import { Controller, Get } from '@nestjs/common';
import { Client } from './client.interface';
import { ClientService } from './client.service';

@Controller('client')
export class ClientController {
  constructor(private readonly ClientService: ClientService) {}

  @Get()
  getclient(): Client {
    return this.ClientService.getclient();
  }
}
