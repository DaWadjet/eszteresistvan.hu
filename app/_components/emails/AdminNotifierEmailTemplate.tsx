import { WeddingApplicationFormData } from "@/app/_lib/types";

const AdminNotifierEmailTemplate = (props: WeddingApplicationFormData) => {
  return (
    <div>
      <h1>Jelentkeztek esküvőre!</h1>
      <p>
        Jelentkezést adott le a következő személy:
        <br />
        <br />
        Teljes név: {props.fullName}
        <br />
        Email cím: {props.email}
        <br />
        Telefonszám: {props.phoneNumber}
        <br />
        További vendégek: {props.otherGuests || "--"}
        <br />
        Komment: {props.comment || "--"}
        <br />
        Érzékenység: {props.foodRestrictions || "--"}
        <br />
        <br />
        <br />
        Szeretettel,
        <br />
        Cecushka email szervere
      </p>
    </div>
  );
};

export default AdminNotifierEmailTemplate;
