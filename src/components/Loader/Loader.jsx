import { Circles } from "react-loader-spinner";
import "./Loader.css";

export function Loader() {
  return (
    <Circles
      height="150"
      width="150"
      color="#84BFFA"
      ariaLabel="circles-loading"
      wrapperStyle={{}}
      wrapperClass="loader"
      visible={true}
    />
  );
}
