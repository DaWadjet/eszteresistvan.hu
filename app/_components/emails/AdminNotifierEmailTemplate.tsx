import { WeddingApplicationFormData } from "@/app/_lib/types";

const AdminNotifierEmailTemplate = (props: WeddingApplicationFormData) => (
  <div>
    <h1>Bonjour, {props.applicantFullName}!</h1>
  </div>
);

export default AdminNotifierEmailTemplate;
