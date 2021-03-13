import { Injectable } from '@nestjs/common';

@Injectable()
export class TrainingService {
    gettraining(): string {
        return " hi training";
      }
}
