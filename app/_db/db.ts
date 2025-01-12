import {
  WeddingApplicationEntry,
  WeddingApplicationFormData,
} from "@/app/_lib/types";
import fs from "fs";
import "server-only";

const dbPath = "./app/_db/applications.json";

const persistApplications = (applications: WeddingApplicationEntry[]) =>
  fs.writeFileSync(
    dbPath,
    JSON.stringify(
      {
        applications,
      },
      null,
      2
    )
  );

export const addApplicationToDb = async (
  formData: WeddingApplicationFormData
) => {
  const applications = getApplications();
  applications.push({
    ...formData,
    submittedApplicationAt: new Date().toISOString(),
  });
  persistApplications(applications);
};

export const getApplications = () => {
  if (!fs.existsSync(dbPath)) {
    fs.writeFile(
      dbPath,
      JSON.stringify({ applications: [] }),
      { flag: "a+" },
      (err) => {
        if (err) {
          console.error(err);
        }
        return [];
      }
    );
    return [];
  }
  const data = fs.readFileSync(dbPath, "utf-8");
  return JSON.parse(data).applications as WeddingApplicationEntry[];
};
