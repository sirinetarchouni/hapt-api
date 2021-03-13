import { Injectable } from '@nestjs/common';

@Injectable()
export class LeadService {
    
    getlead(): string {
      return " lead";
    }
}
