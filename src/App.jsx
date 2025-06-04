import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Career from "./components/Career/Career";
import Footer from "./components/Footer/Footer";
import Skills from "./components/Skills/Skills";
import DarkModeToggle from "./components/DarkModeToggle";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <>
      <ThemeProvider>
        <Header />
        <DarkModeToggle />
        <Hero />
        <About />
        <Skills />
        {/* <Career /> */}
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
