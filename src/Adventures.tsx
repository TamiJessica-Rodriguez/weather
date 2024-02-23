import AdventureImage from "./assets/mainBackground.webp";

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
      url: "https://images.unsplash.com/photo-1682686581484-a220483e6291?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
      description:
        "Dive into the exhilarating world of surfing on pristine waves, where every ride promises an unforgettable adventure. Whether you're a seasoned pro or a curious beginner, our surfing experience offers the perfect blend of excitement and relaxation. Feel the rush as you glide effortlessly on crystal-clear waters, surrounded by stunning coastal landscapes. Join us for an unforgettable journey where the ocean becomes your playground and every wave is a new opportunity to connect with nature and challenge your limits",
    },
    {
      id: "",
      title: "Adventure 2",
      url: "https://example.com/adventure2",
      description: "Description of Adventure 2",
    },
    {
      id: "",
      title: "Adventure 3",
      url: "https://example.com/adventure3",
      description: "Description of Adventure 3",
    },
  ];

  return (
    <div
      className="bg-cover bg-center bg-fixed h-screen flex justify-center"
      style={{ backgroundImage: `url(${AdventureImage})` }}
    >
      <div className="border container flex justify-center border-gray-800 bg-gray-500 m-4 rounded-md gap-4 flex">
        {/* Iterate over mockedAdventures and render each adventure */}
        {mockedAdventures.map((adventure, index) => (
          <div className="flex flex-col gap-4" key={index}>
            <h2 className="flex-1">{adventure.title}</h2>
            <p className="flex-1">{adventure.description}</p>
            <a className="flex-1" href={adventure.url}>
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
