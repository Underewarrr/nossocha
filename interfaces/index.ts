export type User = {
  id: number;
  username: string;
  name: string;
  role: string;
  email: string;
  password: string;
  balance: number;
  hasPremium: boolean;
};

export type Present = {
  id: number;
  name: string;
  present: string
  phone_number: string;
  acepted: boolean
}
