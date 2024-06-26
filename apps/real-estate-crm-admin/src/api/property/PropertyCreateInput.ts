import { AppointmentCreateNestedManyWithoutPropertiesInput } from "./AppointmentCreateNestedManyWithoutPropertiesInput";

export type PropertyCreateInput = {
  appointments?: AppointmentCreateNestedManyWithoutPropertiesInput;
  location?: string | null;
  name?: string | null;
  price?: number | null;
  status?: "Option1" | null;
};
