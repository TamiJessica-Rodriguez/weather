import LogoImage from "./assets/globe-solo.png";

export default function Header() {
  return (
    <header className="flex flex-row items-center justify-between gap-4 p-3 border-b border-b-blue-950 pb-7">
      <div className="flex flex-row items-center gap-4">
        <img
          src={LogoImage}
          alt=""
          className="h-14 border border-slate-400 rounded-full"
        />
        <div className="text-3xl .bebas-neue-regular text-blue-950 font-extrabold">
          EARTH MINGLE
        </div>
      </div>

      <div className="font-extrabold text-blue-950 text-2xl">
        SHARE YOUR EXPERIENCE
      </div>

      <button className="bg-blue-950 text-white py-2 px-4 rounded hover:bg-blue-800 transition duration-300 ease-in-out">
        Join now
      </button>
    </header>
  );
}
