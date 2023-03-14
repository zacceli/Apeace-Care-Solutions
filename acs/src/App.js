import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import ContactUs from "./components/ContactUs"
import Home from "./components/Home"
import NavbarH from "./components/Navbar"
import Footer from "./components/Footer"
import WhoWeAre from "./components/WhoWeAre"
import LiveInCare from "./components/LiveInCare"
import DomiciliaryCare from "./components/DomiciliaryCare"
import DementiaCare from "./components/DementiaCare"
import ChildrenCare from "./components/ChildrenCare"
import RespiteCare from "./components/RespiteCare"
import LearningDisabilityCare from "./components/LearningDisabilityCare"
import WhyApeace from "./components/WhyApeace"
import OurVision from "./components/OurVision"
import OurTeam from "./components/OurTeam"
import Career from "./components/Career"

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
					<Route
						path="why-apeace-care-solutions"
						element={<WhyApeace />}
					/>
					<Route
						path="our-vision"
						element={<OurVision />}
					/>
					<Route
						path="our-team"
						element={<OurTeam />}
					/>
					<Route
						path="careers"
						element={<Career />}
					/>
					<Route
						path="live-in-care"
						element={<LiveInCare />}
					/>
					<Route
						path="domiciliary-care"
						element={<DomiciliaryCare />}
					/>
					<Route
						path="dementia-care"
						element={<DementiaCare />}
					/>
					<Route
						path="children-care"
						element={<ChildrenCare />}
					/>
					<Route
						path="respite-care"
						element={<RespiteCare />}
					/>
					<Route
						path="learning-disability-care"
						element={<LearningDisabilityCare />}
					/>
				</Routes>
			</main>
			<Footer />
		</Router>
	)
}

export default App
