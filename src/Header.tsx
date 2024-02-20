export default function Header() {
  return (
    <header className="flex flew-row h-20">
      <div className="flex items-center justify-center border border-gray-300 text-center w-2/6">
        Jessica väder app
      </div>
      <div className="flex items-center justify-center border w-1/6 border border-gray-300">
        Väder
      </div>
      <div className="flex w-1/6 border border-gray-300 items-center justify-center">
        Data
      </div>
      <div className="flex w-1/6 border border-gray-300 items-center justify-center">
        Proffesionella tjänster
      </div>
      <div className="flex w-1/6 border border-gray-300 items-center justify-center">
        Kunskapsplanen
      </div>
      <div className="flex w-1/6 border border-gray-300 items-center justify-center">
        Forskning
      </div>
    </header>
  );
}
