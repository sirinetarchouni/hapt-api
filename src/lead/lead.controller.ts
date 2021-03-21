import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
  Query,
} from '@nestjs/common';
import { type } from 'os';
import { Lead } from './lead.interface';
import { LeadService } from './lead.service';
import { LeadDocument } from './schemas/lead.schema';

@Controller('lead')
export class LeadController {
  Service;
  constructor(private readonly LeadService: LeadService) {}

  @Get()
  getLeads(@Query('type') type?: string): Promise<LeadDocument[]> {
    return this.LeadService.getleads(type);
  }

  @Post()
  createLead(@Body() lead: Lead): Promise<LeadDocument> {
    return this.LeadService.createLead(lead);
  }
  @Put(':id')
  updateLead(
    @Body() lead: LeadDocument,
    @Param('id') id: string,
  ): Promise<any> {
    return this.LeadService.updateLead(id, lead);
  }
  @Delete(':id')
  deleteLead(@Param('id') id: string): Promise<any> {
    return this.LeadService.deleteLead(id);
  }
}
