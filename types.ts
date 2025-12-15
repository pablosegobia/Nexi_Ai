import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ValueProp {
  title: string;
  description: string;
}

export enum AudienceType {
  BUSINESS = 'BUSINESS',
  PERSONAL = 'PERSONAL'
}