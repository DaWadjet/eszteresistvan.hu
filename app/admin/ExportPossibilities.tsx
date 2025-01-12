"use client";
import { Button } from "@/app/_components/ui/button";
import { WeddingApplicationEntry } from "@/app/_lib/types";
import { FC } from "react";

const ExportPossibilities: FC<{ applications: WeddingApplicationEntry[] }> = ({
  applications,
}) => {
  const exportApplicationsAsCsv = () => {
    const csv = applications
      .map((application) => {
        return Object.values(application).join(",");
      })
      .join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "applications.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  const exportApplicationsAsJson = () => {
    const json = JSON.stringify(applications, null, 2);
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "applications.json";
    a.click();
    URL.revokeObjectURL(url);
  };
  return (
    <div className="flex gap-5 items-start">
      <Button onClick={exportApplicationsAsCsv}>Export as CSV</Button>
      <Button onClick={exportApplicationsAsJson}>Export as JSON</Button>
    </div>
  );
};

export default ExportPossibilities;
