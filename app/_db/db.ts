"use server";
import {
  WeddingApplicationEntry,
  WeddingApplicationFormData,
} from "@/app/_lib/types";
import fs from "node:fs/promises";
import "server-only";

const dbPath = `${process.cwd()}/app/_db/applications.json`;

const ensureDirectoryExists = async (filePath: string) => {
  const dir = require("path").dirname(filePath);
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
