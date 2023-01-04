import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Header/Navbar";
import Routers from "./Routes/Routers";

function App() {
  return (
    <main>
      <Navbar />
      <Routers />
      <Footer />
    </main>
  );
}

export default App;
