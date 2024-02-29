// Adventures.tsx
import { Link } from "react-router-dom";
import { mockedAdventures } from "./Adventures"; // Ensure this path matches the actual file location

export default function Adventures() {
  return (
    <div className="grid md:grid-cols-3 grid-cols-2 gap-3 p-2 rounded-md text-blue-950">
      {mockedAdventures.map((adventure, index) => (
        <div
          className="flex flex-col gap-1 border border-blue-950 font-medium rounded-md p-4"
          key={index}
        >
          <h2 className="font-extrabold p-3">{adventure.title}</h2>
          <p className="p-3">{adventure.description}</p>
          <div className="bg-black border border-white p-4 h-50">
            <Link to="/Booking">
              <img src={adventure.url} alt={adventure.title} className="" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

// import { Link } from "react-router-dom";

// export default function Adventures() {
//   // Define the type for Trips
//   type Trips = {
//     id: string;
//     title: string;
//     url: string;
//     description: string;
//   };

//   const mockedAdventures: Trips[] = [
//     {
//       id: "1",
//       title: "Surfing",
//       url: "https://images.unsplash.com/photo-1682687218608-5e2522b04673?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
//       description:
//         "Dive into the exhilarating world of surfing on pristine waves, where every ride promises an unforgettable adventure...",
//     },
    
//     {
//       id: "5",
//       title: "Adventure 3",
//       url: "https://media.istockphoto.com/id/1361421117/sv/foto/hiking-couple-climb-up-mountain-ridge.jpg?s=612x612&w=0&k=20&c=Tds4-DsgrCg3E61697QtzmYaqObjMrvcnesy2tLbEcI=",
//       description:
//         "Ascend to new heights right in the heart of the city! Experience the thrill of mountain climbing against a breathtaking urban backdrop...",
//     },
//     {
//       id: "6",
//       title: "Adventure 3",
//       url: "https://media.istockphoto.com/id/1361421117/sv/foto/hiking-couple-climb-up-mountain-ridge.jpg?s=612x612&w=0&k=20&c=Tds4-DsgrCg3E61697QtzmYaqObjMrvcnesy2tLbEcI=",
//       description:
//         "Ascend to new heights right in the heart of the city! Experience the thrill of mountain climbing against a breathtaking urban backdrop...",
//     },
//     {
//       id: "7",
//       title: "Adventure 3",
//       url: "https://media.istockphoto.com/id/1361421117/sv/foto/hiking-couple-climb-up-mountain-ridge.jpg?s=612x612&w=0&k=20&c=Tds4-DsgrCg3E61697QtzmYaqObjMrvcnesy2tLbEcI=",
//       description:
//         "Ascend to new heights right in the heart of the city! Experience the thrill of mountain climbing against a breathtaking urban backdrop...",
//     },
//     {
//       id: "8",
//       title: "Adventure 3",
//       url: "https://media.istockphoto.com/id/1361421117/sv/foto/hiking-couple-climb-up-mountain-ridge.jpg?s=612x612&w=0&k=20&c=Tds4-DsgrCg3E61697QtzmYaqObjMrvcnesy2tLbEcI=",
//       description:
//         "Ascend to new heights right in the heart of the city! Experience the thrill of mountain climbing against a breathtaking urban backdrop...",
//     },
//   ];

//   return (
//     <div className="grid md:grid-cols-3 grid-cols-2 gap-3 p-2 rounded-md text-blue-950">
//       {mockedAdventures.map((adventure, index) => (
//         <div
//           className="flex flex-col gap-1 border border-blue-950 font-medium rounded-md p-4"
//           key={index}
//         >
//           <h2 className="font-extrabold p-3">{adventure.title}</h2>
//           <p className="p-3">{adventure.description}</p>
//           <div className="bg-black border border-white p-4 h-50">
//             <Link to="/Booking">
//               <img src={adventure.url} alt={adventure.title} className="" />
//             </Link>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }
