import Footer from "./components/Footer"
import Hero from "./components/Hero";
import Whitelist from "./components/Whitelist";
import Telegram from "./components/Telegram";
import Signup from "./components/Signup";

const App = () => {
	return (
		<div className="bg-[#fff6e4] p-2 md:p-4 space-y-4">
			<Hero />
			<Whitelist />
			<Telegram />
			<Signup />
			<Footer />
		</div>
	);
};

export default App;
