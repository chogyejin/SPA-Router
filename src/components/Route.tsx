interface Props {
  path: string;
  component: React.ReactNode;
  currentPath?: string;
}

const Route = ({ path, component, currentPath }: Props) => {
  return path === currentPath ? <div>{component}</div> : null;
};

export default Route;
