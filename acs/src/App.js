import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import ContactUs from "./components/ContactUs"
import Home from "./components/Home"
import NavbarH from "./components/Navbar"
import Footer from "./components/Footer"
import WhoWeAre from "./components/WhoWeAre"

function App() {
	return (
		<Router>
			<NavbarH />
			<main>
				<Routes>
					<Route
						path="/"
						element={<Home />}
					/>
					<Route
						path="/contact-us"
						element={<ContactUs />}
					/>
					<Route
						path="who-we-are"
						element={<WhoWeAre />}
					/>
				</Routes>
			</main>
			<Footer />
		</Router>
	)
}

export default App
