import ApplicationForm from "@/app/_components/ApplicationForm";

import Counter from "@/app/_components/Counter";
import MapView from "@/app/_components/MapView";

export const revalidate = 300;

export default function Home() {
  return (
    <div className="flex flex-col gap-5">
      <Counter />
      <ApplicationForm />
      <MapView show="wedding" />

      {`     1. Boritokep
Szoveg: Eszti es Isti nagy napja (itt Eszti es Isti legyen elsodleges betutipussal, a nagy napja masodlagossal)
2025.10.10
Hilltop Borbirtok, Neszmély

Kep csitt csatt

2. Jelentkezési űrlap

3. menetrend

16:00 vendégvárás, falatkák & hideg fröccs
16:30 szertartás
17:30 csoportképek
18:30 vacsora
20:30 nyitótánc
22:30 torta
23:00 menyasszonytánc



Logisztika
Ingyenes transzferbusz oda és vissza a szállásoktól
Tovàbbi információ hamarosan


Ajándék
A legnagyobb ajándék a részvételetek, azonban ha támogatnátok közös életünk kezdetét, az erre szánt összeget borítékba tegyétek!



Kérdés esetén keress bátran minket az alábbi elerhetőségek egyikén!
Eszti +36203721666
Isti +36707440909

Már nagyon várjuk hogy együtt ünnepeljünk!`}
    </div>
  );
}
