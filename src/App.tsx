import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import winterlandImage from "./assets/winterland.webp";

function App() {
  return (
    <div
      className="bg-cover bg-center h-20 bg-no-repeat"
      style={{ backgroundImage: `url(${winterlandImage})` }}
    >
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
