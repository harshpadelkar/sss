import Image from "next/image";
import logo from "./logo.png";

const Logo = (props) => {
  return (
    <Image
      style={{ color: "white" }}
      src={logo}
      alt="Picture of the author"
      width={120}
    />
  );
};

export default Logo;
