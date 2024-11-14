export type TRestaurant = {
  cnpj: string;
  name: string;
  email: string;
  phone: string;
}

export type TAuthContext = {
  user: TRestaurant | null;
  isAuthenticated: () => Promise<boolean>;
}