export type User = {
  id: string;
  name: string;
  createdAt: string;  // ISO date string
  updatedAt: string;  // ISO date string
  email: string;
};

export type Address = {
  id: string;
  createdAt: string; // or Date if you parse it
  updatedAt: string; // or Date
  deleted: boolean;
  userId: string;
  street: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
};