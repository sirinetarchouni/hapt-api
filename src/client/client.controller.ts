import { Controller, Get, Param, Query } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientDocument } from './schemas/client.schema';
@Controller('client')
export class ClientController {
  constructor(private readonly ClientService: ClientService) {}

  @Get(':id')
  getclient(@Param('id') id: string): Promise<ClientDocument> {
    return this.ClientService.getclient(id);
  }

  @Get()
  getclients(
    @Query('name') name?: string,
    @Query('gender') gender?: string,
  ): Promise<ClientDocument[]> {
    return this.ClientService.getclients(name, gender);
  }
}
