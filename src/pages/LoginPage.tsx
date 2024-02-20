
// export default function LoginPage() {
  
//   return (
    
//   );
// }



// import { useState } from "react";
// import { useHistory } from "react-router-dom";

// export default function LoginPage() {
//   const [name, setName] = useState("");
//   const history = useHistory();

//   const handleSubmit = (event: Event) => {
//     event.preventDefault(); // Förhindrar standardformulär inlämning

//     // Kolla om namnet är giltigt (t.ex. inte tomt)
//     if (name.trim() !== "") {
//       // Spara namnet i lokal lagring för att komma ihåg användaren efter sidomladdning
//       localStorage.setItem("username", name);
//       // Omdirigera användaren till huvudsidan
//       history.push("/main");
//     } else {
//       alert("Vänligen ange ditt namn.");
//     }
//   };

//   return (
//     <div className="min-h-screen flex justify-center items-center">
//       <div className="bg-white p-8 rounded-lg shadow-md">
//         <h2 className="text-2xl font-bold mb-4">Logga in</h2>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             placeholder="Ange ditt namn"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-full"
//           />
//           <button
//             type="submit"
//             className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
//           >
//             Logga in
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }
