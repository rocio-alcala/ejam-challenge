import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="flex flex-col min-h-svh">
      <NavBar></NavBar>
      <main className="flex-1 px-20"></main>
      <Footer></Footer>
    </div>
  );
}

export default App;
