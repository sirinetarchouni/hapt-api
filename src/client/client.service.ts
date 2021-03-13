import { Injectable } from '@nestjs/common';
import { Client, UidType } from './client.interface';

@Injectable()
export class ClientService {
  getclient(): Client {
    const c1: Client = {
      fullName: 'sirine tarchouni',
      adresse: {
        city: 'sousse',
        street: '07 rue dar el sais ',
        zip: 4000,
      },
      phone: '+216 27917331',
      uid: { value: '12828180', type: UidType.CIN },
      scolar: { level: 3 },

      birthDate: new Date('25/08/1996'),
      note: '17',
    };

    return c1;
  }
}
