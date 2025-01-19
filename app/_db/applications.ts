"use server";
import { db } from "@/app/_db/drizzle";
import { applications } from "@/app/_db/schema";
import { WeddingApplicationEntry } from "@/app/_lib/types";

const isTestEnv = process.env.ENV !== "prod";

export const getApplications = async () => {
  const data = (await db.select().from(applications)).filter((entry) => {
    if (isTestEnv) {
      return entry.isTestEntry;
    } else {
      return !entry.isTestEntry;
    }
  });
  return data;
};

export const addApplication = async (application: WeddingApplicationEntry) => {
  await db.insert(applications).values({
    email: application.email,
    fullName: application.fullName,
    phoneNumber: application.phoneNumber,
    otherGuests: application.otherGuests,
    foodRestrictions: application.foodRestrictions,
    comment: application.comment,
    isFromWebsite: true,
    isTestEntry: isTestEnv,
  });
};
