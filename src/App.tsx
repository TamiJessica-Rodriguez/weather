import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

// import backgroundImage from "./assets/winterland.webp.jpg";

// const AppContainer = styled.div`
//   background-image: url(${backgroundImage});
//   background-size: cover;
//   background-position: center;
//   width: 100vw;
//   height: 100vh;
// `;

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
