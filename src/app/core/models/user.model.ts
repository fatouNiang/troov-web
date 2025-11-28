
export interface User {
  id: string;
  role: 'client' | 'prestataire' | 'admin';
  email: string;
  phone?: string;
  displayName: string;
  avatarUrl?: string;
}
