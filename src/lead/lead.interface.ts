export enum LeadType {
  INDIVIDUAL = 0,
  COMPANY = 1,
}

export interface Lead {
  fullName?: string;
  email?: string;
  phone: string;
  type?: LeadType;
  interset?: string;
  referer?: string;
}
