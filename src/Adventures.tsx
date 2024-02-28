import { Link } from "react-router-dom";

export default function Adventures() {
  // Define the type for Trips
  type Trips = {
    id: string;
    title: string;
    url: string;
    description: string;
  };

  // Sample data for mockedAdventures
  const mockedAdventures: Trips[] = [
    {
      id: "1",
      title: "Surfing",
      url: "https://images.unsplash.com/photo-1682687218608-5e2522b04673?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
      description:
        "Dive into the exhilarating world of surfing on pristine waves, where every ride promises an unforgettable adventure...",
    },
    {
      id: "2",
      title: "Adventure 2",
      url: "https://images.unsplash.com/photo-1600466892162-a6b3a60cd9d9?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZsYW1lbmNvfGVufDB8fDB8fHww",
      description:
        "Celebrate the vibrant spirit of Flamenco at our city's Feria! Immerse yourself in the rhythm of traditional music...",
    },
    {
      id: "3",
      title: "Adventure 3",
      url: "https://media.istockphoto.com/id/1361421117/sv/foto/hiking-couple-climb-up-mountain-ridge.jpg?s=612x612&w=0&k=20&c=Tds4-DsgrCg3E61697QtzmYaqObjMrvcnesy2tLbEcI=",
      description:
        "Ascend to new heights right in the heart of the city! Experience the thrill of mountain climbing against a breathtaking urban backdrop...",
    },
    {
      id: "4",
      title: "Adventure 3",
      url: "https://media.istockphoto.com/id/1361421117/sv/foto/hiking-couple-climb-up-mountain-ridge.jpg?s=612x612&w=0&k=20&c=Tds4-DsgrCg3E61697QtzmYaqObjMrvcnesy2tLbEcI=",
      description:
        "Ascend to new heights right in the heart of the city! Experience the thrill of mountain climbing against a breathtaking urban backdrop...",
    },
    {
      id: "5",
      title: "Adventure 3",
      url: "https://media.istockphoto.com/id/1361421117/sv/foto/hiking-couple-climb-up-mountain-ridge.jpg?s=612x612&w=0&k=20&c=Tds4-DsgrCg3E61697QtzmYaqObjMrvcnesy2tLbEcI=",
      description:
        "Ascend to new heights right in the heart of the city! Experience the thrill of mountain climbing against a breathtaking urban backdrop...",
    },
    {
      id: "6",
      title: "Adventure 3",
      url: "https://media.istockphoto.com/id/1361421117/sv/foto/hiking-couple-climb-up-mountain-ridge.jpg?s=612x612&w=0&k=20&c=Tds4-DsgrCg3E61697QtzmYaqObjMrvcnesy2tLbEcI=",
      description:
        "Ascend to new heights right in the heart of the city! Experience the thrill of mountain climbing against a breathtaking urban backdrop...",
    },
    {
      id: "7",
      title: "Adventure 3",
      url: "https://media.istockphoto.com/id/1361421117/sv/foto/hiking-couple-climb-up-mountain-ridge.jpg?s=612x612&w=0&k=20&c=Tds4-DsgrCg3E61697QtzmYaqObjMrvcnesy2tLbEcI=",
      description:
        "Ascend to new heights right in the heart of the city! Experience the thrill of mountain climbing against a breathtaking urban backdrop...",
    },
    {
      id: "8",
      title: "Adventure 3",
      url: "https://media.istockphoto.com/id/1361421117/sv/foto/hiking-couple-climb-up-mountain-ridge.jpg?s=612x612&w=0&k=20&c=Tds4-DsgrCg3E61697QtzmYaqObjMrvcnesy2tLbEcI=",
      description:
        "Ascend to new heights right in the heart of the city! Experience the thrill of mountain climbing against a breathtaking urban backdrop...",
    },
    {
      id: "9",
      title: "Adventure 3",
      url: "https://media.istockphoto.com/id/1361421117/sv/foto/hiking-couple-climb-up-mountain-ridge.jpg?s=612x612&w=0&k=20&c=Tds4-DsgrCg3E61697QtzmYaqObjMrvcnesy2tLbEcI=",
      description:
        "Ascend to new heights right in the heart of the city! Experience the thrill of mountain climbing against a breathtaking urban backdrop...",
    },
    {
      id: "10",
      title: "Adventure 3",
      url: "https://media.istockphoto.com/id/1361421117/sv/foto/hiking-couple-climb-up-mountain-ridge.jpg?s=612x612&w=0&k=20&c=Tds4-DsgrCg3E61697QtzmYaqObjMrvcnesy2tLbEcI=",
      description:
        "Ascend to new heights right in the heart of the city! Experience the thrill of mountain climbing against a breathtaking urban backdrop...",
    },
    {
      id: "11",
      title: "Adventure 3",
      url: "https://media.istockphoto.com/id/1361421117/sv/foto/hiking-couple-climb-up-mountain-ridge.jpg?s=612x612&w=0&k=20&c=Tds4-DsgrCg3E61697QtzmYaqObjMrvcnesy2tLbEcI=",
      description:
        "Ascend to new heights right in the heart of the city! Experience the thrill of mountain climbing against a breathtaking urban backdrop...",
    },
    {
      id: "12",
      title: "Adventure 3",
      url: "https://media.istockphoto.com/id/1361421117/sv/foto/hiking-couple-climb-up-mountain-ridge.jpg?s=612x612&w=0&k=20&c=Tds4-DsgrCg3E61697QtzmYaqObjMrvcnesy2tLbEcI=",
      description:
        "Ascend to new heights right in the heart of the city! Experience the thrill of mountain climbing against a breathtaking urban backdrop...",
    },
  ];

  return (
    <div
      className="bg-cover bg-center bg-fixed flex justify-center flex-col m-3"
      // style={{ backgroundImage: `url(${AdventuresImage})` }}
    >
      <div className="grid grid-cols-4 gap-4 p-4 rounded-md border border-gray-800">
        {/* Iterate over mockedAdventures and render each adventure */}
        {mockedAdventures.map((adventure, index) => (
          <div
            className="flex flex-col gap-1 border border-gray-800 rounded-md p-4"
            key={index}
          >
            <h2 className="font-bold p-3">{adventure.title}</h2>
            <p className="p-3">{adventure.description}</p>
            <div className="bg-black border border-white p-4 h-64">
              <Link to="/Booking">
                <img
                  src={adventure.url}
                  alt={adventure.title}
                  className="w-full h-full object-cover"
                />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
