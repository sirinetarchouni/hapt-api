import { Lead } from '../lead/lead.interface';
export enum UidType {
  CIN = 0,
  PASSPORT = 1,
  DRIVER_LIC = 2,
  MAT_FISC = 3,
  OTHER = 4,
}
export enum genderType {
  MALE = 'm',
  FEMALE = 'f',
}

export interface Client extends Lead {
  fullName: string;
  uid: {
    value: string;
    type: UidType;
  };
  gender?: genderType;

  birthDate?: Date;
  scolar: {
    level: number;
    diploma?: string;
  };
  note?: number;
  adresse: {
    street: string;
    city: string;
    zip: number;
  };
}
