import Header from "./components/Header";
import Hero from "./components/Hero";
import Whitelist from "./components/Whitelist";
import Telegram from "./components/Telegram";
import Roadmap from "./components/Roadmap";
import Token from "./components/Token";
import Signup from "./components/Signup";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-[#fff6e4] p-2 md:p-4 space-y-4">
      <Header />
      <Hero />
      <Whitelist />
      <Telegram />
      <Roadmap />
      <Token />
      <Signup />
      <Footer />
    </div>
  );
};

export default App;
