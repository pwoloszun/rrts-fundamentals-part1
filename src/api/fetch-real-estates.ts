import fetchEntities from './fetch-entities';

export interface RealEstate {
  id: number;
  street: string;
}

export default function fetchRealEstates(): Promise<RealEstate[]> {
  return fetchEntities<RealEstate>('/real-estates');
}
