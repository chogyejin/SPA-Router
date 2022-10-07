import React from "react";
import { ReactElement, ReactNode, useEffect, useState } from "react";

interface Props {
  children: React.ReactNode;
}

const Router = ({ children }: Props) => {
  const [currentPath, setCurrentPath] = useState(location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(location.pathname);
    };

    window.addEventListener("popstate", onLocationChange);

    return () => {
      window.removeEventListener("popstate", onLocationChange);
    };
  }, []);

  const childrenWithProps = React.Children.map(children, (child) => {
    const newProps = {
      currentPath,
    };

    if (React.isValidElement(child)) {
      return React.cloneElement(child, newProps);
    }
  });

  return <div>{childrenWithProps}</div>;
};

export default Router;
