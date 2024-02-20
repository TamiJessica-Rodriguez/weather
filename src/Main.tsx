import { ArrowRightIcon } from "@heroicons/react/16/solid";

export default function Main() {
  return (
    <main className="h-full h-screen flex flex-col bg-emerald-100">

      <div className="flex flex-row">

        <div className="flex border border-gray-300 w-1/7">Start</div>
        
        <div className="flex border border-gray-300 w-6/7">
          <ArrowRightIcon />
          <div>Väder</div>
        </div>

      </div>

      <div className="flex flex-row">
        <aside className=" p-2 flex flex-col border border-gray-300 w-1/5 gap-2">
          <div className="text-center h-20 border border-b-2 border-gray-400">
            Översikt Väder
          </div>
          <div className="text-center h-20 border border-b-2 border-gray-400">
            Varningar och brandrisk
          </div>
          <div className="text-center h-20 border border-b-2 border-gray-400">
            Prognoser
          </div>
          <div className="text-center h-20 border border-b-2 border-gray-400">
            Radar och sattelit
          </div>
          <div className="text-center h-20 border border-b-2 border-gray-400">
            Observationer
          </div>
          <div className="text-center h-20 border border-b-2 border-gray-400">
            Mark och vatten
          </div>
        </aside>
        <div className="flex border border-gray-300 w-4/5">Hejsan</div>
      </div>
    </main>
  );
}
