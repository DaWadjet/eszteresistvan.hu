"use client";
import { Button } from "@/app/_components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/_components/ui/form";
import { Input } from "@/app/_components/ui/input";
import { Textarea } from "@/app/_components/ui/textarea";
import { submitApplication } from "@/app/_db/actions";

import {
  WeddingApplicationFormData,
  weddingApplicationSchema,
} from "@/app/_lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2Icon } from "lucide-react";
import { FC, useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const ApplicationForm: FC = () => {
  const [isPending, startTransition] = useTransition();
  const applicantForm = useForm<WeddingApplicationFormData>({
    resolver: zodResolver(weddingApplicationSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      otherGuests: "",
      foodRestrictions: "",
      comment: "",
    },
  });

  const onSubmit = (values: WeddingApplicationFormData) => {
    startTransition(async () => {
      const { isSuccess } = await submitApplication(values);

      if (isSuccess) {
        applicantForm.reset();
        toast.success(
          "Sikeres jelentkezés! Köszönjük, hogy velünk ünnepelsz majd!"
        );
      } else {
        toast.error(
          "Hiba történt. Kérlek próbáld újra később vagy keresd az ifjú párt."
        );
      }
    });
  };

  return (
    <Form {...applicantForm}>
      <form
        onSubmit={applicantForm.handleSubmit(onSubmit)}
        className="space-y-8"
      >
        <p>
          Megtisztelnél minket, ha velünk ünnepelnél a nagy napunkon! Kérlek
          részvételi szándékod az alábbi űrlap kitöltésével jelezd augusztus
          1-ig!
        </p>
        <FormField
          control={applicantForm.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Kitöltő teljes neve*</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={applicantForm.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Kitöltő telefonszáma*</FormLabel>
              <FormControl>
                <Input {...field} type="tel" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={applicantForm.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Kitöltő e-mail címe*</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={applicantForm.control}
          name="otherGuests"
          render={({ field }) => (
            <FormItem>
              <FormLabel>További érkezők teljes neve</FormLabel>
              <FormControl>
                <Textarea {...field} rows={3} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={applicantForm.control}
          name="foodRestrictions"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Van-e bárkinek ételérzékenysége? Ha igen, mi?
              </FormLabel>
              <FormControl>
                <Textarea {...field} rows={3} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={applicantForm.control}
          name="comment"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Van bármi más, amit érdemesnek tartasz arra, hogy megoszd
                velünk?
              </FormLabel>
              `
              <FormControl>
                <Textarea {...field} rows={3} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isPending}>
          {isPending ? (
            <Loader2Icon className="text-foreground animate-spin" />
          ) : (
            "Jelentkezés elküldése"
          )}
        </Button>
      </form>
    </Form>
  );
};

export default ApplicationForm;
