/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { LeadType } from '../lead.interface';

export type LeadDocument = Lead & mongoose.Document;

@Schema()
export class Lead {
  @Prop({ type: String, required: true })
  fullName: string;

  @Prop({ type: String })
  email?: string;

  @Prop({ type: Array })
  phone?: number[];

  @Prop({ type: String })
  interest?: string;

  @Prop({ type: Number })
  type?: LeadType;

  @Prop({ type: String })
  referer?: string;
}

export const LeadSchema = SchemaFactory.createForClass(Lead);
