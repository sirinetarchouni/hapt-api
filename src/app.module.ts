import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LeadModule } from './lead/lead.module';
import { ClientModule } from './client/client.module';
import { TrainingModule } from './training/training.module';


@Module({
  imports: [LeadModule, ClientModule, TrainingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
