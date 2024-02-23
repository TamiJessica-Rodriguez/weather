import AdventureImage from "./assets/gray.webp";

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
      id: "",
      title: "Surfing",
      url: "https://images.unsplash.com/photo-1682687218608-5e2522b04673?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
      description:
        "Dive into the exhilarating world of surfing on pristine waves, where every ride promises an unforgettable adventure. Whether you're a seasoned pro or a curious beginner, our surfing experience offers the perfect blend of excitement and relaxation. Feel the rush as you glide effortlessly on crystal-clear waters, surrounded by stunning coastal landscapes. Join us for an unforgettable journey where the ocean becomes your playground and every wave is a new opportunity to connect with nature and challenge your limits",
    },
    {
      id: "",
      title: "Adventure 2",
      url: "https://images.unsplash.com/photo-1600466892162-a6b3a60cd9d9?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZsYW1lbmNvfGVufDB8fDB8fHww",
      description:
        "Celebrate the vibrant spirit of Flamenco at our city's Feria! Immerse yourself in the rhythm of traditional music, the swirl of colorful dresses, and the passionate energy of Flamenco dancers. Join locals and travelers alike as we come together to revel in the rich cultural heritage of Flamenco, savor delicious Spanish cuisine, and create unforgettable memories under the starlit sky. Experience the heart and soul of Spain at our Flamenco Feria – where every moment is infused with the essence of fiesta!",
    },
    {
      id: "",
      title: "Adventure 3",
      url: "https://media.istockphoto.com/id/1361421117/sv/foto/hiking-couple-climb-up-mountain-ridge.jpg?s=612x612&w=0&k=20&c=Tds4-DsgrCg3E61697QtzmYaqObjMrvcnesy2tLbEcI=",
      description:
        "Ascend to new heights right in the heart of the city! Experience the thrill of mountain climbing against a breathtaking urban backdrop. From towering peaks to hidden crags, embark on an exhilarating adventure that combines the rush of outdoor exploration with the convenience of city living. Whether you're a seasoned climber or a beginner seeking an adrenaline-fueled challenge, our city's rugged terrain offers endless opportunities to conquer summits and discover the awe-inspiring beauty that lies just beyond the skyline. Get ready to elevate your urban adventure with mountain climbing like never before!",
    },
  ];

  return (
    <div
      className="bg-cover bg-center bg-fixed h-screen flex justify-center"
      style={{ backgroundImage: `url(${AdventureImage})` }}
    >
      <div className="border container flex justify-center border-gray-800 m-4 rounded-md gap-4 p-4 flex ">
        {/* Iterate over mockedAdventures and render each adventure */}
        {mockedAdventures.map((adventure, index) => (
          <div
            className="flex flex-col gap-4 border border-gray-800 rounded-md p-4"
            key={index}
          >
            <h2 className="font-bold p-3">{adventure.title}</h2>
            <p className="p-3">{adventure.description}</p>
            <div className="bg-black border border-white p-4">
              <img
                src={adventure.url}
                alt="Activity"
                className="w-full h-auto rounded-md"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
