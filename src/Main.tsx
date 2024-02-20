export default function Main() {
  return (
    <main className="h-screen flex flex-col bg-emerald-100">
      <div className="flex flex-row h-10 bg-gray-600"></div>

      <div className="flex flex-row">
        {/* ASIDE */}
        <aside className=" p-2 flex flex-col border border-gray-300 w-1/5 gap-2">
          <div className="flex items-center h-20 border border-b-2 border-gray-400 pl-2">
            Översikt Väder
          </div>
          <div className="flex items-center h-20 border border-b-2 border-gray-400 pl-2">
            Varningar och brandrisk
          </div>
          <div className="flex items-center h-20 border border-b-2 border-gray-400 pl-2">
            Prognoser
          </div>
          <div className="flex items-center h-20 border border-b-2 border-gray-400 pl-2">
            Radar och sattelit
          </div>
          <div className="flex items-center h-20 border border-b-2 border-gray-400 pl-2">
            Observationer
          </div>
          <div className="flex items-center h-20 border border-b-2 border-gray-400 pl-2">
            Mark och vatten
          </div>
        </aside>

        {/* Main */}
        <div className="flex flex-1 flex-col border border-gray-300 w-4/5 gap-2 p-2">
          <div className="items-center flex border border-gray-400 h-20 p-2">
            Måndag
          </div>
          <div className="items-center flex border border-gray-400 h-20 p-2">
            Tisdag
          </div>
          <div className="items-center flex border border-gray-400 h-20 p-2">
            Onsdag
          </div>
          <div className="items-center flex border border-gray-400 h-20 p-2">
            Torsdag
          </div>
          <div className="items-center flex border border-gray-400 h-20 p-2">
            Fredag
          </div>
          <div className="items-center flex border border-gray-400 h-20 p-2">
            Lördag
          </div>
          <div className="items-center flex border border-gray-400 h-20 p-2">
            Söndag
          </div>
        </div>
        <div className="flex-1">div höger</div>
      </div>
    </main>
  );
}
