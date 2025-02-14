"use client";
import dynamic from "next/dynamic";
import { FC } from "react";

const Counter = dynamic(() => import("@/app/_components/Counter"), {
  ssr: false,
});

const ImageOverlay: FC = () => {
  return (
    <div className="absolute inset-0 h-screen sm:h-[450px] w-full flex flex-col sm:gap-10 gap-8 items-center justify-center text-kombu-green animate-fadeIn">
      <div className="flex flex-col items-center justify-center gap-2 h-[84px] sm:h-28 pb-2 sm:pt-1">
        <h1 className="text-4xl text-[42px] font-playfair sm:text-6xl text-center font-normal">
          Eszter és István
        </h1>
        <h2 className="font-libre text-xl font-medium italic">nagy napja</h2>
      </div>

      <div className="w-full h-28 flex items-center justify-center">
        <Counter />
      </div>
    </div>
  );
};

export default ImageOverlay;
