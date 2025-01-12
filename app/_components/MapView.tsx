import { cn } from "@/app/_lib/utils";
import { FC } from "react";

const maps = {
  place: {
    embedSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2683.8985454623075!2d18.37534041274353!3d47.72521817108085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476a5aa0c613c585%3A0x56f927e22b444349!2sHilltop%20Borbirtok%20%26%20%C3%89tterem!5e0!3m2!1shu!2shu!4v1736691249522!5m2!1shu!2shu",
    address: "Hilltop Borbirtok, 2544 Neszmély, Melegeshegy",
    link: "https://hilltopborbirtok.hu",
  },
} as const;

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
