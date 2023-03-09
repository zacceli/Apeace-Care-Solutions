import { Link, NavLink } from "react-router-dom"
import { useState, useEffect } from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"
import "./Navbar.css"

function NavbarH() {
	const [scrollTop, setScrollTop] = useState(0)

	useEffect(() => {
		const handleScroll = (event) => {
			setScrollTop(window.scrollY)
		}

		window.addEventListener("scroll", handleScroll)

		return () => {
			window.removeEventListener("scroll", handleScroll)
		}
	}, [])

	const [showAbout, setShowAbout] = useState(false)
	const [showServices, setShowServices] = useState(false)
	const showAboutDropdown = (e) => {
		setShowAbout(!showAbout)
	}
	const hideAboutDropdown = (e) => {
		setShowAbout(false)
	}
	const showServicesDropdown = (e) => {
		setShowServices(!showServices)
	}
	const hideServicesDropdown = (e) => {
		setShowServices(false)
	}

	return (
		<Navbar
			variant="light"
			className="navbar-custom"
			expand="lg"
			fixed="top">
			<Container fluid>
				<Navbar.Brand>
					<Link to="/">
						<div
							className="logo"
							style={{ height: scrollTop > 80 ? "50px" : "100px" }}>
							<img
								src=""
								alt="logo"
							/>
						</div>
					</Link>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbar-dark-example" />
				<Navbar.Collapse id="navbar-dark-example">
					<Nav>
						<NavDropdown
							id="nav-dropdown-dark-example"
							show={showAbout}
							onMouseEnter={showAboutDropdown}
							onMouseLeave={hideAboutDropdown}
							cssclass="e-carat-hide"
							title={<span>About Us</span>}
							menuVariant="Light">
							<NavDropdown.Item>
								<Link to="who-we-are">
									<span>Who We Are</span>
								</Link>
							</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">
								<span>Why Apeace Care Solutions</span>
							</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">
								<span>Vision & Mission Statements</span>
							</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.4">
								<span>Our Team</span>
							</NavDropdown.Item>
						</NavDropdown>
						<NavDropdown
							id="nav-dropdown-dark-example"
							show={showServices}
							onMouseEnter={showServicesDropdown}
							onMouseLeave={hideServicesDropdown}
							title={<span>Services</span>}
							menuVariant="Light">
							<NavDropdown.Item href="#action/3.1">
								<span>Live In Care</span>
							</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">
								<span>Domiciliary Care</span>
							</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">
								<span>Dementia Care</span>
							</NavDropdown.Item>

							<NavDropdown.Item href="#action/3.4">
								<span>Children Care</span>
							</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.5">
								<span>Respite Care</span>
							</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.6">
								<span>Learning Disability Care</span>
							</NavDropdown.Item>
						</NavDropdown>
						<Nav.Link href="#Careers">
							<span>Careers</span>
						</Nav.Link>
						<NavLink
							to="contact-us"
							className="nav-link">
							<span>Contact Us</span>
						</NavLink>
					</Nav>
					<div className="contacts-bar">
						<Container className="contacts-bar-container">
							<Row style={{ padding: "0px" }}>
								<span>Phone Number</span>
							</Row>
							<Row style={{ padding: "0px" }}>
								<span>
									<a href="mailto:admin@apeacecaresolutions.com">admin@apeacecaresolutions.com</a>
								</span>
							</Row>
						</Container>
					</div>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default NavbarH
