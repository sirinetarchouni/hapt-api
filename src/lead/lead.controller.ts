import { Controller, Get } from '@nestjs/common';
import { LeadService } from './lead.service';

@Controller('lead')
export class LeadController {Service
  constructor(private  readonly LeadService: LeadService ){}
    @Get()
    getlead(): string {
      return  this.LeadService.getlead();
    }
  }
