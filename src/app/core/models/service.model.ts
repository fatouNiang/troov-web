
export interface ServiceItem {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  price: number;
  durationMinutes: number;
  providerId: string;
  isActive: boolean;
  details: string[];
}

export interface Card {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
}
