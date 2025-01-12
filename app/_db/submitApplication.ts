"use server";

import AdminNotifierEmailTemplate from "@/app/_components/emails/AdminNotifierEmailTemplate";
import AffirmationEmailTemplate from "@/app/_components/emails/AffirmationEmailTemplate";
import { addApplicationToDb } from "@/app/_db/db";
import { WeddingApplicationFormData } from "@/app/_lib/types";
import { Resend } from "resend";

const hostEmails = process.env.HOST_EMAILS?.split(",") || [];
const loggingEmail = process.env.LOGGING_EMAIL || "";
const senderEmail = "noreply@eszteresistvan.hu";
const resend = new Resend(process.env.RESEND_API_KEY);
const isDev = process.env.NODE_ENV === "development";

const submitApplication = async (formData: WeddingApplicationFormData) => {
  try {
    addApplicationToDb(formData);

    if (isDev) {
      return {
        isSuccess: true,
      };
    }

    await Promise.allSettled([
      resend.emails.send({
        from: senderEmail,
        to: isDev
          ? [loggingEmail]
          : [...hostEmails, loggingEmail].filter(Boolean),
        bcc: [loggingEmail].filter(Boolean),
        subject: "Leadott jelentkezés",
        react: AdminNotifierEmailTemplate(formData),
      }),
      resend.emails.send({
        from: senderEmail,
        to:
          isDev && loggingEmail
            ? [loggingEmail]
            : [formData.applicantEmail, loggingEmail].filter(Boolean),
        bcc: [loggingEmail].filter(Boolean),
        subject: "Visszaigazolás a jelentkezésedről",
        react: AffirmationEmailTemplate(formData),
      }),
    ]);

    return {
      isSuccess: true,
    };
  } catch {
    return {
      isSuccess: false,
    };
  }
};

export default submitApplication;
