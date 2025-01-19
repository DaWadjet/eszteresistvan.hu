"use server";
import AdminNotifierEmailTemplate from "@/app/_components/emails/AdminNotifierEmailTemplate";
import AffirmationEmailTemplate from "@/app/_components/emails/AffirmationEmailTemplate";
import {
  WeddingApplicationEntry,
  WeddingApplicationFormData,
} from "@/app/_lib/types";
import fs from "node:fs/promises";
import path from "node:path";
import { Resend } from "resend";
import "server-only";

const dbPath = `${process.cwd()}/app/_db/applications.json`;

const ensureDirectoryExists = async (filePath: string) => {
  const dir = path.dirname(filePath);
  try {
    await fs.mkdir(dir, { recursive: true });
  } catch (error) {
    if (
      error &&
      typeof error === "object" &&
      "code" in error &&
      error.code !== "EEXIST"
    ) {
      throw error;
    }
  }
};

const persistApplications = async (applications: WeddingApplicationEntry[]) => {
  await ensureDirectoryExists(dbPath);
  await fs.writeFile(dbPath, JSON.stringify({ applications }, null, 2), {
    flag: "w",
  });
};

export const addApplicationToDb = async (
  formData: WeddingApplicationFormData
) => {
  const applications = await getApplications();
  applications.push({
    ...formData,
    submittedApplicationAt: new Date().toISOString(),
  });
  await persistApplications(applications);
};

export const getApplications = async () => {
  try {
    await fs.access(dbPath);
    const data = await fs.readFile(dbPath, "utf-8");
    return JSON.parse(data).applications as WeddingApplicationEntry[];
  } catch (error) {
    if (
      error &&
      typeof error === "object" &&
      "code" in error &&
      error.code === "ENOENT"
    ) {
      await persistApplications([]);
      return [];
    }
    throw error;
  }
};

const hostEmails = process.env.HOST_EMAILS?.split(",") || [];
const loggingEmail = process.env.LOGGING_EMAIL || "";
const senderEmail = "noreply@eszteresistvan.hu";
const resend = new Resend(process.env.RESEND_API_KEY);
const isDev = process.env.NODE_ENV === "development";

export const submitApplication = async (
  formData: WeddingApplicationFormData
) => {
  try {
    // addApplicationToDb(formData);

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
            : [formData.email, loggingEmail].filter(Boolean),
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
