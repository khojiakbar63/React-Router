import "./style.scss";
import Container from "../../components/layouts/container";

const index = () => {
  return (
    <>
      <div className="bg-indigo-400">
        <Container>
          <h1 className="py-60 font-extrabold text-white text-center text-9xl">
            About
          </h1>
        </Container>
      </div>
    </>
  );
};

export default index;
