import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import MainBackground from "./assets/activities.webp";

function App() {
  return (
    <div
      className="bg-cover bg-center bg-fixed h-screen"
      style={{ backgroundImage: `url(${MainBackground})` }}
    >
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
