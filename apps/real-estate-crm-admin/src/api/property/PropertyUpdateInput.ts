import { AppointmentUpdateManyWithoutPropertiesInput } from "./AppointmentUpdateManyWithoutPropertiesInput";

export type PropertyUpdateInput = {
  appointments?: AppointmentUpdateManyWithoutPropertiesInput;
  location?: string | null;
  name?: string | null;
  price?: number | null;
  status?: "Option1" | null;
};
