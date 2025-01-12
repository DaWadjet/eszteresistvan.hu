import { getApplications } from "@/app/_db/db";
import ExportPossibilities from "@/app/admin/ExportPossibilities";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const applications = getApplications();

  return (
    <div>
      <Link href="/">Vissza az oldalra</Link>
      <h1>Admin Page</h1>
      <ul>
        {applications.map((application) => (
          <li key={application.submittedApplicationAt}>
            {application.fullName}
          </li>
        ))}
      </ul>
      <ExportPossibilities applications={applications} />
    </div>
  );
}
