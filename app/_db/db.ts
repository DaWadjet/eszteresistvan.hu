import {
  WeddingApplicationEntry,
  WeddingApplicationFormData,
} from "@/app/_lib/types";
import fs from "fs";
import "server-only";

const dbPath = "./app/_db/applicants.json";

export const addApplicationToDb = async (
  formData: WeddingApplicationFormData
) => {
  const existingApplications = getApplications();
  existingApplications.push({
    ...formData,
    submittedApplicationAt: new Date().toISOString(),
  });
  fs.writeFileSync(
    dbPath,
    JSON.stringify(
      {
        applications: existingApplications,
      },
      null,
      2
    )
  );
};

export const getApplications = () => {
  if (!fs.existsSync(dbPath)) {
    fs.writeFileSync(
      dbPath,
      JSON.stringify(
        {
          applications: [],
        },
        null,
        2
      )
    );
  }
  const data = fs.readFileSync(dbPath, "utf-8");
  return JSON.parse(data).applications as WeddingApplicationEntry[];
};
