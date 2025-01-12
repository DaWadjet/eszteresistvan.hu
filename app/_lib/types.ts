import { z } from "zod";

export const weddingApplicationSchema = z.object({
  applicantFullName: z.string().nonempty("Kérjük, add meg a teljes neved!"),
  applicantEmail: z.string().email("Kérjük, add meg az e-mail címed!"),
  applicantPhoneNumber: z.string().nonempty("Kérjük, add meg a telefonszámod!"),
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
