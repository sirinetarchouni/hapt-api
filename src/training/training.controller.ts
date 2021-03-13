import { Controller,Get } from '@nestjs/common';
import { TrainingService } from './training.service';

@Controller('training')
export class TrainingController {
  constructor(private readonly TrainingService:TrainingService){}
    @Get()
    gettraining(): string {
      return this.TrainingService.gettraining();
    }
}
