"use client";
import {
  ComponentProps,
  FC,
  PropsWithChildren,
  useEffect,
  useMemo,
  useState,
} from "react";
import SlotCounter from "react-slot-counter";

const weddingDate = new Date("2025-10-10");

const Counter: FC = () => {
  const [remainingTimeInSeconds, setRemainingTime] = useState(
    Math.floor((weddingDate.getTime() - Date.now()) / 1000)
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
    duration: 0.3,
    startFromLastDigit: true,
    speed: 4,
    useMonospaceWidth: true,
  } satisfies Omit<ComponentProps<typeof SlotCounter>, "value">;

  if (remainingTimeInSeconds <= 0) {
    return <div>It&apos;s time!</div>;
  }
  return (
    <div className="flex gap-3 text-lg items-center font-semibold">
      <SlotCounter value={remainingDays} {...props} />
      <SlotCounter value={remainingHours} {...props} />
      <SlotCounter value={remainingMinutes} {...props} />
      <SlotCounter value={remainingSeconds} {...props} />
    </div>
  );
};

function ClientOnly({ children }: PropsWithChildren) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return children;
}

const ClientOnlyCounter = () => (
  <ClientOnly>
    <Counter />
  </ClientOnly>
);

export default ClientOnlyCounter;
