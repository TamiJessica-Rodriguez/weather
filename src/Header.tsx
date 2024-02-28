import "./Header.css";
import LogoImage from "./assets/globe-solo.png";

export default function Header() {
  return (
    <header className="flex flex-row items-center justify-start gap-4 p-3 border-b border-slate-400 mb-4 pb-7">
      <img
        src={LogoImage}
        alt=""
        className="h-14 border border-slate-400 rounded-full"
      />
      <div className="text-3xl .bebas-neue-regular text-slate-200">
        EARTH MINGLE
      </div>
    </header>
  );
}
