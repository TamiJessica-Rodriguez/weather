import { useCallback, useEffect, useState } from "react";

const Slideshow = () => {
  // Bildkällor för bildspelet
  const images = [
    "https://images.unsplash.com/photo-1516822487734-69ff4b9bf49d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2FmYXJpJTIwYW5pbWFsc3xlbnwwfHwwfHx8MA%3D%3D",
    "https://media.istockphoto.com/id/1302843401/photo/happy-family-on-ski-resort.webp?b=1&s=170667a&w=0&k=20&c=RxYkmdyEbWrQdPiwMvJ-kGP44kfJ0kMVghmASZ286vw=",
    "https://images.unsplash.com/photo-1705094268283-ad709e0e1313?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FycmliZWFuJTIwYmVhY2h8ZW58MHx8MHx8fDA%3D",
  ];

  // State för att hålla koll på index för den aktuella bilden
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Funktion för att gå till nästa bild
  const nextSlide = useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  // Funktion för att gå till föregående bild
  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Automatisk bildspel
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 2000);

    return () => clearInterval(intervalId);
  }, [nextSlide]);

  return (
    <div className="slideshow-container">
      <button onClick={prevSlide}>Previous</button>
      <img
        src={images[currentImageIndex]}
        alt={`Slide ${currentImageIndex + 1}`}
        className="slideshow-image"
      />
      <button onClick={nextSlide}>Next</button>
    </div>
  );
};

export default Slideshow;
