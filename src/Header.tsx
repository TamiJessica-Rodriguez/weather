import { useState } from "react";

export default function Header() {
  const [name, setName] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setName(inputValue);
    setInputValue("");
  };

  return (
    <header className="flex flew-row h-20">
      {name ? (
        <div className="flex items-center justify-center border border-gray-500 text-center w-2/6">
          Välkommen till min väderapplikation, {name}!
        </div>
      ) : (
        <div className="flex items-center justify-center border border-gray-300 text-center w-2/6">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Skriv ditt namn"
              value={inputValue}
              onChange={handleChange}
            />
            <button className="border border-gray-300" type="submit">
              Submit
            </button>
          </form>
        </div>
      )}
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
