import { cn } from "@/app/_lib/utils";
import { FC } from "react";

const maps = {
  wedding: {
    embedSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2683.8985454623075!2d18.37534041274353!3d47.72521817108085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476a5aa0c613c585%3A0x56f927e22b444349!2sHilltop%20Borbirtok%20%26%20%C3%89tterem!5e0!3m2!1shu!2shu!4v1736691249522!5m2!1shu!2shu",
    address: "Hilltop Borbirtok, 2544 Neszmély, Melegeshegy",
    link: "https://hilltopborbirtok.hu",
  },

  apartment1: {
    embedSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2682.3084088425653!2d18.556594712744808!3d47.7560719710839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476a5d1ff9616cf3%3A0xc83de0158061b184!2sBali%20Boutique%20Rooms!5e0!3m2!1shu!2shu!4v1737283770722!5m2!1shu!2shu",
    address: "Bali Boutique Rooms, 2536 Nyergesújfalu, Bartók Béla u 20",
    link: "https://www.booking.com/Share-wj0Pvt",
  },
  apartment2: {
    embedSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2682.3084088425653!2d18.556594712744808!3d47.7560719710839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476a5d1ff9616cf3%3A0xc83de0158061b184!2sBali%20Boutique%20Rooms!5e0!3m2!1shu!2shu!4v1737283770722!5m2!1shu!2shu",
    address: "Paskom Apartmanház, 2536 Nyergesújfalu, Paskom u 33/B",
    link: "https://www.booking.com/Share-6tVBvaZ",
  },
} as const satisfies Record<
  string,
  { embedSrc: string; address: string; link?: string }
>;

const MapView: FC<{ show: keyof typeof maps; className?: string }> = ({
  show,
  className,
}) => {
  return (
    <iframe
      className={cn("h-[400px] w-[650px] border-none", className)}
      src={maps[show].embedSrc}
      allowFullScreen
      loading="eager"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
};

export default MapView;
