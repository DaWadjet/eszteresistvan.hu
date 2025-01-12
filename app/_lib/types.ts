import { z } from "zod";

export const weddingApplicationSchema = z.object({
  fullName: z.string().nonempty("Kérjük, add meg a teljes neved!"),
  email: z.string().email("Kérjük, add meg az e-mail címed!"),
  phoneNumber: z.string().nonempty("Kérjük, add meg a telefonszámod!"),
  otherGuests: z.string().optional(),
  foodRestrictions: z.string().optional(),
  comment: z.string().optional(),
});

export type WeddingApplicationFormData = z.infer<
  typeof weddingApplicationSchema
>;
export type WeddingApplicationEntry = WeddingApplicationFormData & {
  submittedApplicationAt: string;
};
