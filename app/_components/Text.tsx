import { cn } from "@/app/_lib/utils";
import { FC, PropsWithChildren } from "react";

const Text: FC<
  PropsWithChildren & {
    className?: string;
  }
> = ({ children, className }) => {
  return <p className={cn("font-libre italic", className)}>{children}</p>;
};

export default Text;
