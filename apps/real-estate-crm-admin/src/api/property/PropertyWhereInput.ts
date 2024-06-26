import { AppointmentListRelationFilter } from "../appointment/AppointmentListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type PropertyWhereInput = {
  appointments?: AppointmentListRelationFilter;
  id?: StringFilter;
  location?: StringNullableFilter;
  name?: StringNullableFilter;
  price?: FloatNullableFilter;
  status?: "Option1";
};
