import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Lead, LeadType } from './lead.interface';
import { Lead as LeadSchema, LeadDocument } from './schemas/lead.schema';

const leads: Lead[] = [
  {
    fullName: 'sirine tarchouni',
    phone: '+216 27917331',
    email: 'sirinetarchouni48@gmail.com',
    type: LeadType.INDIVIDUAL,
  },
  {
    fullName: 'lili karima',
    phone: '+216 20501222',
    email: 'lilikarima@gmail.com',
    type: LeadType.INDIVIDUAL,
    referer: 'gehgjhrhrrkhrhao',
  },
  {
    fullName: 'anis loukr',
    phone: '+216 50505032',
    email: 'anislouker25@gmail.com',
    type: LeadType.COMPANY,
    interset: 'rfertezururcd',
    referer: 'fhgfhzeggz f',
  },
];
@Injectable()
export class LeadService {
  constructor(
    @InjectModel(LeadSchema.name) private leadModel: Model<LeadDocument>,
  ) {}

  async getleads(type: string): Promise<LeadDocument[]> {
    return this.leadModel
      .find({ type: type ? Number.parseInt(type) : undefined })
      .exec();
  }

  async createLead(lead: Lead): Promise<LeadDocument> {
    const newLead = new this.leadModel(lead);
    return newLead.save();
  }

  async updateLead(id: string, lead: LeadDocument): Promise<any> {
    return this.leadModel.updateOne({ _id: id }, lead).exec();
  }

  async deleteLead(id: string): Promise<any> {
    return this.leadModel.deleteOne({ _id: id }).exec();
  }
}
