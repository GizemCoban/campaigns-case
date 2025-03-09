export interface Campaign {
  id: string;
  title: string;
  description: string;
  points: number;
  date: Date;
}

export interface User {
    username: string;
    password: string;
}