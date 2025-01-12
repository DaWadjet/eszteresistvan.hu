import ApplicationForm from "@/app/_components/ApplicationForm";

import Counter from "@/app/_components/Counter";
import MapView from "@/app/_components/MapView";

export const revalidate = 300;

export default function Home() {
  return (
    <div className="flex flex-col gap-5">
      <Counter />
      <ApplicationForm />
      <MapView show="place" />

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


4.Infok kis ikonokkal
Helyszin: Hilltop Borbirtok
2544 Neszmély, Melegeshegy (legyen link a helyre)
https://hilltopborbirtok.hu

Szallas
Bali Boutique Rooms 
2536 Nyergesújfalu, Bartók Béla u 20 (legyen link)
VAGY
Paskom Apartmanház
2536 Nyergesújfalu, Paskom u 33/B (legyen link)
https://www.booking.com/Share-wj0Pvt
https://www.booking.com/Share-6tVBvaZ

Logisztika
Ingyenes transzferbusz oda és vissza a szállásoktól
Tovàbbi információ hamarosan


Ajándék
A legnagyobb ajándék a részvételetek, azonban ha támogatnátok közös életünk kezdetét, az erre szánt összeget borítékba tegyétek!

4. FAQ 
Van dress code?

Igen, szeretnénk ha Ti is csinosan ünnepelnétek Velünk, kérlek formal dress code-ot kövessetek. Viseljetek bàtran bármit amiben jól érzitek magatokat, ugyanakkor a fehér szín kerülését szigorúan kérjük. A ceremónia kültéri, a vacsora és a buli pedig beltéren lesz, így érdemes vékony kabáttal készülni.
Ha nem vagy biztos benne, hogy megfelelő-e a választott ruha, keresd bátran a menyasszonyt kérdéseddel. :)

Hozhatok plusz egy főt?

Igen, szívesen látjuk kíserődet a nagy napunkon. Kérjük viszont, hogy a jelentkezési űrlapon jelezd augusztus 1-ig részvételi szándékát, hogy tudjunk készülni.

Meddig kell visszajeleznem?

Kérjük jelezz vissza augusztus 1-ig a jelentkezési űrlapon. Kérdéseddel bátran keresd Esztit vagy Istit, szívesen segítünk bármiben.

Hol tudok megszàllni? 

Sajnos az esküvő helyszínén korlátozott a szálláslehetőség, viszont a környéken több opció is adott.
Kérjük lehetőség szerint a nyergesújfalui Bali Boutique Room-ot vagy Paskom Apartmanházat válaszd, hiszen ezektől a szállásoktól biztosítjuk a  transzferbuszt.
A szállásfoglalás egyénileg történik, köszönjük előre is a segítségeteket!


Hogyan jutok az esküvő helyszínére?

Az esküvő helyszínére ingyenes transzferbuszt oda,-és hazafele is biztosítunk. A transzferbusz a nyergesújfalui Bali Boutique Room és Paskom Apartmanház szállásokon áll meg. Szeretnènk ha sokáig velünk ünnepelnél a nagy napon, így kérjük lehetőség szerint a kèt szállás közül válassz. Így nem kell aggódnod a logisztikán, bátran koccinthatsz velünk, hiszen az transzferbusz gondoskodik az utadról.

Mikor indul a transzferbusz? Hogy tudok rá jelentkezni?

A transzferbusz menetrendjét és minden hasznos információt a weboldalon fogunk közzétenni. Hazafele 4 órán át lesz elérhető a szolgáltatás, a helyszínre pedig egy gyűjtőjárat fog indulni. 

Autóval érkeznék a helyszínre tudok parkolni?

Igen, a helyszínen lehetséges az ingyenes parkolás, ugyanakkor felhívjuk figyelmed a transzferbusz lehetőségre, így nem kell aggódnod az utolsó pohár ital belefér-e.:)

Kérdés esetén keress bátran minket az alábbi elerhetőségek egyikén!
Eszti +36203721666
Isti +36707440909

Már nagyon várjuk hogy együtt ünnepeljünk!`}
    </div>
  );
}
