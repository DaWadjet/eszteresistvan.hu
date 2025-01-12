import { redirect } from "next/navigation";
import { FC } from "react";

const NotFound: FC = () => {
  return redirect("/");
};

export default NotFound;
