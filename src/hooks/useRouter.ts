const useRouter = () => {
  const push = (path: string) => {
    history.pushState("", "", path);

    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };

  return { push };
};

export default useRouter;
