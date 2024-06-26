import { Appointment } from "../appointment/Appointment";

export type Property = {
  appointments?: Array<Appointment>;
  createdAt: Date;
  id: string;
  location: string | null;
  name: string | null;
  price: number | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
