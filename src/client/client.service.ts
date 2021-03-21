import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Client, UidType, genderType } from './client.interface';
import {
  Client as ClientSchema,
  ClientDocument,
} from './schemas/client.schema';

const clients: Client[] = [
  {
    fullName: 'sirine tarchouni',
    adresse: {
      city: 'sousse',
      street: '07 rue dar el sais ',
      zip: 4000,
    },
    gender: genderType.FEMALE,

    phone: '+216 27917331',
    uid: { value: '12828180', type: UidType.CIN },
    scolar: { level: 3 },

    birthDate: new Date('25/08/1996'),
    note: 17,
  },
  {
    fullName: 'salma nouri',
    adresse: {
      city: 'ksar hlel',
      street: '09 rue dar el kmar ',
      zip: 3000,
    },
    gender: genderType.FEMALE,
    phone: '+216 52400331',
    uid: { value: '12128185', type: UidType.CIN },
    scolar: { level: 3 },

    birthDate: new Date('28/08/1997'),
    note: 19,
  },
  {
    fullName: 'zain abbessi',
    adresse: {
      city: 'tunis',
      street: '07 rue les oranges ',
      zip: 5000,
    },
    gender: genderType.MALE,
    phone: '+216 27917331',
    uid: { value: '10205080', type: UidType.CIN },
    scolar: { level: 3 },

    birthDate: new Date('11/03/1991'),
    note: 15,
  },
];
@Injectable()
export class ClientService {
  constructor(
    @InjectModel(ClientSchema.name) private clientModel: Model<ClientDocument>,
  ) {}

  getclient(id: string): Promise<ClientDocument> {
    return this.clientModel.findById({ 'uid.value': id }).exec();
  }

  getclients(name?: string, gender?: string): Promise<ClientDocument[]> {
    return this.clientModel.find().exec();
  }
}
