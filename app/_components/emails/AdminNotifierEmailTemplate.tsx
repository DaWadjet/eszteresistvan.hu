import { WeddingApplicationFormData } from "@/app/_lib/types";

const AdminNotifierEmailTemplate = (props: WeddingApplicationFormData) => (
  <div>
    <h1>Kedves {props.fullName}!</h1>
    <p>
      Jelentkezésed megkaptuk, köszönjük hogy Velünk tartasz a Nagy Napunkon! A
      weboldalt további hasznos információkkal fogjuk frissíteni, köszönjük ha
      követed. Kérdés esetén keress bennünket bizalommal!
      <br />
      Már várjuk, hogy együtt ünnepeljünk!
      <br />
      <br />
      Szeretettel,
      <br />
      Eszter & István
    </p>
  </div>
);

export default AdminNotifierEmailTemplate;
