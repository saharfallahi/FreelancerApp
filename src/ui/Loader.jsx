import { ThreeDots } from "react-loader-spinner";

function Loader(width = "50", heigth = "20") {
  return (
    <ThreeDots
      visible={true}
      height={heigth}
      width={width}
      color="rgb(var(--color-primary-900))"
      radius="9"
      wrapperStyle={{
        display: "flex",
        justifyContent: "center",
      }}
    />
  );
}

export default Loader;
