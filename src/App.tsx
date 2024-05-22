import Footer from "./components/Footer";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Steps from "./components/Steps";

function App() {
  return (
    <div className="flex flex-col min-h-svh">
      <NavBar></NavBar>
      <main className="flex-1 md:px-20">
        <Header></Header>
        <section className="px-5 lg:px-0">
          <div className="flex flex-col items-center justify-center mt-10 md:mt-[-20px]">
            <h1 className="text-[32px] md:text-[48px] text-center font-medium mb-3">
              Wait! Your Order In Progress.
            </h1>
            <p className="text-center text-[#4D5254] md:text-[24px]">
              Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing
            </p>
          </div>
          <Steps></Steps>
        </section>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
