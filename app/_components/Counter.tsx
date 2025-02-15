"use client";
import { getRemainingTimeInSeconds } from "@/app/_components/consts";
import { ComponentProps, FC, useEffect, useMemo, useState } from "react";
import SlotCounter from "react-slot-counter";

const Counter: FC = () => {
  const [remainingTimeInSeconds, setRemainingTime] = useState(
    getRemainingTimeInSeconds
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const { remainingDays, remainingHours, remainingMinutes, remainingSeconds } =
    useMemo(() => {
      return Object.entries({
        remainingDays: Math.floor(remainingTimeInSeconds / 86400),
        remainingHours: Math.floor((remainingTimeInSeconds % 86400) / 3600),
        remainingMinutes: Math.floor((remainingTimeInSeconds % 3600) / 60),
        remainingSeconds: remainingTimeInSeconds % 60,
      }).reduce((acc, [key, value]) => {
        acc[key] = value.toString().padStart(2, "0");
        return acc;
      }, {} as Record<string, string>);
    }, [remainingTimeInSeconds]);

  const props = {
    sequentialAnimationMode: true,
    duration: 0.25,
    startFromLastDigit: true,
    speed: 4,
    useMonospaceWidth: true,
  } satisfies Omit<ComponentProps<typeof SlotCounter>, "value">;

  if (remainingTimeInSeconds <= 0) {
    return (
      <h3 className="text-3xl sm:text-4xl animate-fadeIn font-normal italic font-libre">
        Elérkezett a nagy nap!
      </h3>
    );
  }

  return (
    <div className="flex flex-col items-center gap-2 animate-fadeInSlow">
      <div className="flex items-center font-normal font-libre italic justify-around px-8 text-3xl ">
        <div className="flex flex-col items-center gap-2">
          <SlotCounter value={remainingDays} {...props} />
          <span className="text-sm">nap</span>
        </div>
        <span className="mb-10 px-2.5">:</span>
        <div className="flex flex-col items-center gap-2">
          <SlotCounter value={remainingHours} {...props} />
          <span className="text-sm">óra</span>
        </div>
        <span className="mb-10 px-2.5">:</span>
        <div className="flex flex-col items-center gap-2">
          <SlotCounter value={remainingMinutes} {...props} />
          <span className="text-sm">perc</span>
        </div>
        <span className="mb-10 pl-2.5">:</span>
        <div className="flex flex-col items-center gap-2 ml-[-6px]">
          <SlotCounter value={remainingSeconds} {...props} />
          <span className="text-sm">másodperc</span>
        </div>
      </div>
      <h3 className="font-libre italic font-medium text-lg sm:text-base">
        2025. október 10., Neszmély
      </h3>
    </div>
  );
};

export default Counter;
