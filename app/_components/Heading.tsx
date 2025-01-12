import { cn } from "@/app/_lib/utils";
import { FC, PropsWithChildren } from "react";

const Heading: FC<
  PropsWithChildren & {
    className?: string;
  }
> = ({ children, className }) => {
  return <h3 className={cn("font-playfair italic", className)}>{children}</h3>;
};

export default Heading;
