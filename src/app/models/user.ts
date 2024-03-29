export interface Transaction {
  id: number;
  type: string;
  source: string;
  destination: string;
  amount: number;
  category: string;
  description: string;
  status: string;
  balance: number;
  date: number;
}
