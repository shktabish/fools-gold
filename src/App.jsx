import Footer from "./components/Footer"
import Signup from "./components/Signup"
import Whitelist from "./components/Whitelist"

const App = () => {
  return (
	<div className="bg-[#fff6e4] p-2 md:p-4 space-y-4" >
		<Whitelist />
		<Signup />
		<Footer />
	</div>
  )
}

export default App