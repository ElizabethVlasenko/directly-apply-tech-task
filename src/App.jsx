import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Signup from "./components/signup/Signup";

function App() {
  return (
    <>
      <Header />
      <main>
        <Signup />
      </main>
      <Footer />
    </>
  );
}

export default App;
