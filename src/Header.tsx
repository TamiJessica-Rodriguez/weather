import "./Header.css";
import LogoImage from "./assets/globe-solo.png";

export default function Header() {
  return (
    <header className="flex flex-row h-20 items-center justify-start gap-4 p-3">
      <img src={LogoImage} alt="" className="h-14" />
      <div className=" text-3xl .bebas-neue-regular">EARTH MINGLE</div>
    </header>
  );
}
