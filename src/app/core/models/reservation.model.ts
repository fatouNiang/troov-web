
export interface Reservation {
  id: string;
  clientId: string;
  providerId: string;
  serviceId: string;
  date: string; // ISO
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  amount: number;
}
