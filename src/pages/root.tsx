import useRouter from "../hooks/useRouter";

const Root = () => {
  const { push } = useRouter();

  const handleClick = () => {
    console.log("about 페이지로");
    push("/about");
  };

  return (
    <div>
      <h1>Root</h1>
      <button onClick={handleClick}>go about</button>
    </div>
  );
};

export default Root;
