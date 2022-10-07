import useRouter from "../hooks/useRouter";

const About = () => {
  const { push } = useRouter();

  const handleClick = () => {
    console.log("root 페이지로");
    push("/");
  };

  return (
    <div>
      <h1>About</h1>
      <button onClick={handleClick}>go root</button>
    </div>
  );
};

export default About;
