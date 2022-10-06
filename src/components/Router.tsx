import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Router = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default Router;
