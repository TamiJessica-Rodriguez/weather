import { useCallback, useEffect, useState } from "react";
import MiddleImage from "./assets/logoCool.webp";

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
    <div>
      <div className="flex justify-around h-80">
        <img
          src={MiddleImage}
          alt=""
          className="h-full w-4/5 border border-slate-400"
        />
      </div>
      -
      <div className="flex justify-around border border-blue-950 h-80 gap-2 p-3 flex-col mt-10 rounded-sm bg-white">
        <div className="flex flex-row items-center text-blue-950 p-3 gap-4">
          <div className="flex-1 border h-50 p-3 hover:bg-slate-400 border-blue-950 bg-slate-200">
            <h2 className="font-extrabold">Find the best places to eat</h2>
            <p>
              4.3 million restaurants - everything from streetfood to fine
              dining
            </p>
          </div>
          <div className="flex-1 border h-50 p-3 hover:bg-slate-400 bg-slate-200 border-blue-950">
            <h2 className="font-extrabold">Find the best places to eat</h2>
            <p className="flex-1">
              4.3 million restaurants - everything from streetfood to fine
              dining
            </p>
          </div>
        </div>
        <div className="flex flex-row  text-blue-950 p-3 gap-4 items-center">
          <div className="flex-1 border p-3 gap-4 hover:bg-slate-400 border-blue-950 bg-slate-200">
            <h2 className="font-extrabold">Find the best places to eat</h2>
            <p>
              4.3 million restaurants - everything from streetfood to fine
              dining
            </p>
          </div>
          <div className="flex-1 border p-3 gap-4 hover:bg-slate-400 border-blue-950 bg-slate-200">
            <h2 className="font-extrabold">Find the best places to eat</h2>
            <p>
              4.3 million restaurants - everything from streetfood to fine
              dining
            </p>
          </div>
        </div>
      </div>
      <div className="slideshow-container flex justify-center items-center mt-10">
        <button onClick={prevSlide}>Previous</button>
        <img
          src={images[currentImageIndex]}
          alt={`Slide ${currentImageIndex + 1}`}
          className="slideshow-image"
        />
        <button onClick={nextSlide}>Next</button>
      </div>
    </div>
  );
};

export default Slideshow;
