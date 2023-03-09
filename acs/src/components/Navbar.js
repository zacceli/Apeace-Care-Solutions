import { Link, NavLink } from "react-router-dom"
import { useState, useEffect } from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"
import "bootstrap/dist/css/bootstrap.min.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import "./Navbar.css"
import { Col } from "react-bootstrap"

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
							<span style={{ fontSize: "10px" }}>Placing value on your care</span>
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
								<a href="tel:000000000" className="d-flex">
									<Col
										xs="auto"
										className="px-2">
										<FontAwesomeIcon icon={faPhone} />
									</Col>
									<Col
										className="d-none d-lg-flex"
										xs="auto">
										<span>Phone Number</span>
									</Col>
								</a>
							</Row>
							<Row style={{ padding: "0px" }}>
								<a href="mailto:admin@apeacecaresolutions.com" className="d-flex">
									<Col
										xs="auto"
										className="px-2">
										<FontAwesomeIcon icon={faEnvelope} />
									</Col>
									<Col
										className="d-none d-lg-flex"
										xs="auto">
										<span>admin@apeacecaresolutions.com</span>
									</Col>
								</a>
							</Row>
						</Container>
					</div>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default NavbarH
