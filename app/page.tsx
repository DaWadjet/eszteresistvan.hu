import ApplicationForm from "@/app/_components/ApplicationForm";
import FAQ from "@/app/_components/FAQ";
import ImageOverlay from "@/app/_components/ImageOverlay";
import MainImage from "@/app/_components/MainImage";

import Section from "@/app/_components/Section";
import { Separator } from "@radix-ui/react-separator";
import {
  BookHeart,
  Bus,
  CalendarHeart,
  Gift,
  Heart,
  MapPinned,
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col font-playfair">
      <div className="w-full h-screen sm:h-[450px] relative overflow-clip">
        <MainImage />
        <ImageOverlay />
      </div>

      <div className="container px-4 sm:px-10 my-8 grow pb-16 mx-auto flex-col flex gap-12">
        <div className="gap-12 flex flex-col sm:flex-row sm:gap-0 mt-6">
          <Section
            icon={<BookHeart className="size-8 pt-1" />}
            title="Jelentkezés"
            className="sm:flex-1"
          >
            <div className="flex flex-col gap-6 sm:max-w-[400px]">
              <p className="text-base">
                Megtisztelnél minket, ha velünk ünnepelnél a nagy napunkon!
                Kérlek, részvételi szándékod az alábbi űrlap kitöltésével jelezd
                augusztus 1-ig!
              </p>
              <ApplicationForm />
            </div>
          </Section>
          <Section
            title="Menetrend"
            className="sm:flex-1"
            icon={<CalendarHeart className="size-8 pt-1" />}
          >
            <Separator
              orientation="vertical"
              className="w-0.5 h-7 mt-2 bg-camouflage-green rounded-sm"
            />
            <div className="flex flex-col items-center my-3">
              <p className="text-2xl text-kombu-green">16:00</p>
              <p className="text-camouflage-green text-xl">vendégvárás</p>
            </div>
            <Separator
              orientation="vertical"
              className="w-0.5 h-7 bg-camouflage-green rounded-sm"
            />
            <div className="flex flex-col items-center my-3">
              <p className="text-2xl text-kombu-green">16:30</p>
              <p className="text-camouflage-green text-xl">szertartás</p>
            </div>
            <Separator
              orientation="vertical"
              className="w-0.5 h-7 bg-camouflage-green rounded-sm"
            />
            <div className="flex flex-col items-center my-3">
              <p className="text-2xl text-kombu-green">17:30</p>
              <p className="text-camouflage-green text-xl">csoportképek</p>
            </div>
            <Separator
              orientation="vertical"
              className="w-0.5 h-7 bg-camouflage-green rounded-sm"
            />
            <div className="flex flex-col items-center my-3">
              <p className="text-2xl text-kombu-green">18:30</p>
              <p className="text-camouflage-green text-xl">vacsora</p>
            </div>
            <Separator
              orientation="vertical"
              className="w-0.5 h-7 bg-camouflage-green rounded-sm"
            />
            <div className="flex flex-col items-center my-3">
              <p className="text-2xl text-kombu-green">20:30</p>
              <p className="text-camouflage-green text-xl">nyitótánc</p>
            </div>
            <Separator
              orientation="vertical"
              className="w-0.5 h-7 bg-camouflage-green rounded-sm"
            />
            <div className="flex flex-col items-center my-3">
              <p className="text-2xl text-kombu-green">22:30</p>
              <p className="text-camouflage-green text-xl">tortavágás</p>
            </div>
            <Separator
              orientation="vertical"
              className="w-0.5 h-7 bg-camouflage-green rounded-sm"
            />
            <div className="flex flex-col items-center my-3">
              <p className="text-2xl text-kombu-green">23:00</p>
              <p className="text-camouflage-green text-xl">menyasszonytánc</p>
            </div>
          </Section>
        </div>
        <Separator
          className="w-full h-0.5 mt-6 bg-camouflage-green rounded-sm hidden sm:block"
          decorative
        />
        <Section title="Helyszín" icon={<MapPinned className="size-8 pt-1" />}>
          <div className="flex flex-col items-center gap-5 w-full">
            <p className="text-lg">
              Hilltop Borbirtok, 2544 Neszmély, Melegeshegy
            </p>
            <iframe
              className="h-[400px] sm:w-3/4 border-none rounded-md overflow-hidden"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42942.3767272977!2d18.3695522066053!3d47.7252181712012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476a5aa0c613c585%3A0x56f927e22b444349!2sHilltop%20Borbirtok%20%26%20%C3%89tterem!5e0!3m2!1shu!2shu!4v1738787362258!5m2!1shu!2shu"
              allowFullScreen
              loading="eager"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Section>
        <Separator
          className="w-full h-0.5 mt-6 bg-camouflage-green rounded-sm hidden sm:block"
          decorative
        />
        <div className="gap-12 flex flex-col items-center sm:items-start justify-center sm:flex-row-reverse sm:gap-24">
          <Section
            title="Logisztika"
            icon={<Bus className="size-8 pt-1" />}
            className="sm:flex-1 sm:max-w-[400px]"
          >
            Ingyenes transzferbusz oda és vissza a szállásoktól. További
            információ hamarosan!
          </Section>
          <Section
            title="Ajándék"
            icon={<Gift className="size-8 pt-1" />}
            className="sm:flex-1 sm:max-w-[400px]"
          >
            A legnagyobb ajándék a részvételetek, azonban ha támogatnátok közös
            életünk kezdetét, az erre szánt összeget borítékba tegyétek!
          </Section>
        </div>
        <Separator
          className="w-full h-0.5 mt-6 bg-camouflage-green rounded-sm hidden sm:block"
          decorative
        />
        <FAQ />
        <Separator
          className="w-full h-0.5 mt-6 bg-camouflage-green rounded-sm hidden sm:block"
          decorative
        />
        <div className="flex flex-col text-center items-center gap-6">
          <h4 className="font-semibold text-xl sm:text-2xl">
            Kérdés esetén bátran keress minket az alábbi elérhetőségek egyikén!
          </h4>
          <div className="flex flex-col gap-2 items-center">
            <p className="text-lg font-medium italic font-libre">
              Eszti: +36 20 372 1666
            </p>
            <p className="text-lg font-medium italic font-libre">
              Isti: +36 30 744 0909
            </p>
          </div>
          <p className="mt-4 flex text-xl font-semibold gap-4 flex-col items-center justify-center">
            Már nagyon várjuk, hogy együtt ünnepeljünk!
            <Heart className="size-8" />
          </p>
        </div>
      </div>
    </div>
  );
}
