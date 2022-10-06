import { ReactNode } from "react";

interface Props {
  path: string;
  component: ReactNode;
}

const Route = ({ path, component }: Props) => {
  return (
    <div>
      <div>{component}</div>
    </div>
  );
};

export default Route;
