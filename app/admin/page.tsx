import { getApplications } from "@/app/_db/applications";
import ExportPossibilities from "@/app/admin/ExportPossibilities";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const applications = await getApplications();

  return (
    <div>
      <Link href="/">Vissza az oldalra</Link>
      <h1>Admin Page</h1>
      <ul>
        {applications.map((application) => (
          <li key={application.id}>{application.fullName}</li>
        ))}
      </ul>
      <ExportPossibilities applications={applications} />
    </div>
  );
}
