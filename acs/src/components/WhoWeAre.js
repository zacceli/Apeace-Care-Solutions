import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Container, Row, Col, Nav, Tab, Carousel } from "react-bootstrap"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHandshakeAngle, faHandHoldingHeart, faCompass, faBriefcase } from "@fortawesome/free-solid-svg-icons"
import AOS from "aos"
import "./WhoWeAre.css"

const WhoWeAre = () => {
	useEffect(() => {
		AOS.init()
	}, [])

	const [index, setIndex] = useState(0)

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex)
	}

	return (
		<>
			<section className="breadcrumb">
				<Container>
					<div className="inner-container">
						<span>
							<Link to="/">Home</Link>
							&nbsp;&rarr; Who We Are
						</span>
					</div>
				</Container>
			</section>
			<section
				className="top-content"
				data-aos="fade-up">
				<div className="content">
					<Container>
						<Row
							xs={1}
							lg={2}>
							<Col
								className="content-col"
								xl={6}>
								<Container>
									<Row className="mb-3">
										<h1>Redefining Care Services</h1>
									</Row>
									<Row>
										<p style={{ fontSize: "20px" }}>
											We Strongly believe that CARE matters and we take pride in placing the utmost value to care
											service render to our customers. We are committed to offering care with passion rather than
											simply performing tasks out of a sense of duty.
										</p>
									</Row>
								</Container>
							</Col>
							<Col
								className="img-col"
								xl={6}>
								<div className="img-wrap">
									<figure>
										<img
											src="/caring.jpeg"
											alt="Home"
											className="homeImage"
										/>
									</figure>
								</div>
							</Col>
						</Row>
					</Container>
				</div>
			</section>
			<section
				className="mission-vision py-5"
				data-aos="fade-up">
				<Container>
					<Row>
						<h2 className="my-3">Our Vision Statement</h2>
						<p className="my-4">
							Our Philosophy is to provide a high quality care service to your valuable customers. We aim to strive to maintain and
							improve your clients overall happiness and ensuring each client satisfied journey experience with us.
						</p>
					</Row>
					<Row>
						<h2 className="my-3">Our Mission Statement</h2>
						<p className="my-4">
							Delivering highest standard of personalized care and support with compassion, dignity and utmost respect. We place the
							highest value to Care.
						</p>
					</Row>
				</Container>
			</section>
			<section
				className="tab-container"
				data-aos="fade-up">
				<Container className="values-container">
					<Tab.Container
						id="left-tabs-example"
						defaultActiveKey="first">
						<Row className="values-inner-container">
							<Col className="tabs-col">
								<Row className="tabs-row">
									<Col
										sm={6}
										md={10}
										className="tabs mx-auto">
										<Row>
											<h2>Our values</h2>
										</Row>
										<Row>
											<Nav
												variant="pills"
												className="flex-column">
												<Nav.Item className="my-2">
													<Nav.Link eventKey="first">Respect</Nav.Link>
												</Nav.Item>
												<Nav.Item className="my-2">
													<Nav.Link eventKey="second">Care and Compassion</Nav.Link>
												</Nav.Item>
												<Nav.Item className="my-2">
													<Nav.Link eventKey="third">Integrity</Nav.Link>
												</Nav.Item>
												<Nav.Item className="my-2">
													<Nav.Link eventKey="fourth">Professionalism</Nav.Link>
												</Nav.Item>
											</Nav>
										</Row>
									</Col>
									<Col
										sm={6}
										md={2}></Col>
								</Row>
							</Col>
							<Col sm={6}>
								<Tab.Content>
									<Tab.Pane eventKey="first">
										<div className="circle-shape">
											<FontAwesomeIcon
												icon={faHandshakeAngle}
												size="4x"
											/>
											<h3>Respect</h3>
											<p>
												We respect the rights of our patients, clients and employees to be treated with
												dignity, empathy and equality, having due regard for differences in culture,
												philosophy and outlook.
											</p>
										</div>
									</Tab.Pane>
									<Tab.Pane eventKey="second">
										<div className="circle-shape">
											<FontAwesomeIcon
												icon={faHandHoldingHeart}
												size="4x"
											/>
											<h3>Care and Compassion</h3>
											<p>
												We aim to deliver services that are caring and compassionate, where health, healing
												and well-being and empowerment of all are supported, reliable, effective, and
												whenever possible, maintain a continuity of care.
											</p>
										</div>
									</Tab.Pane>
									<Tab.Pane eventKey="third">
										<div className="circle-shape">
											<FontAwesomeIcon
												icon={faCompass}
												size="4x"
											/>
											<h3>Integrity</h3>
											<p>
												Our communications are effective and open in all we do and our behaviour at work is
												ethical, honest and responsible at all times.
											</p>
										</div>
									</Tab.Pane>
									<Tab.Pane eventKey="fourth">
										<div className="circle-shape">
											<FontAwesomeIcon
												icon={faBriefcase}
												size="4x"
											/>
											<h3>Professionalism</h3>
											<p>
												We will work cooperatively with patients, clients and other agencies, ensuring our
												practice is safe, and proactive and supports continuous learning and improvement
												with the care we give.
											</p>
										</div>
									</Tab.Pane>
								</Tab.Content>
							</Col>
						</Row>
					</Tab.Container>
				</Container>
			</section>
			<section className="slider">
				<h2>Our values</h2>
				<Carousel
					activeIndex={index}
					onSelect={handleSelect}>
					<Carousel.Item>
						<div className="img-wrapper">
							<img
								src="respect-img.jpg"
								alt="Respect"
							/>

							<div className="circle-shape">
								<FontAwesomeIcon
									icon={faHandshakeAngle}
									size="4x"
								/>
							</div>
							<div className="inner-content">
								<h3>Respect</h3>
								<p>
									We respect the rights of our patients, clients and employees to be treated with dignity, empathy and
									equality, having due regard for differences in culture, philosophy and outlook.
								</p>
							</div>
						</div>
					</Carousel.Item>
					<Carousel.Item>
						<div className="img-wrapper">
							<img
								src="care-img.jpg"
								alt="Care and Compassion"
							/>

							<div className="circle-shape">
								<FontAwesomeIcon
									icon={faHandHoldingHeart}
									size="4x"
								/>
							</div>
							<div className="inner-content">
								<h3>Care and Compassion</h3>
								<p>
									We aim to deliver services that are caring and compassionate, where health, healing and well-being and
									empowerment of all are supported, reliable, effective, and whenever possible, maintain a continuity of care.
								</p>
							</div>
						</div>
					</Carousel.Item>
					<Carousel.Item>
						<div className="img-wrapper">
							<img
								src="integrity-img.jpg"
								alt="Integrity"
							/>

							<div className="circle-shape">
								<FontAwesomeIcon
									icon={faCompass}
									size="4x"
								/>
							</div>
							<div className="inner-content">
								<h3>Integrity</h3>
								<p>
									Our communications are effective and open in all we do and our behaviour at work is ethical, honest and
									responsible at all times.
								</p>
							</div>
						</div>
					</Carousel.Item>
					<Carousel.Item>
						<div className="img-wrapper">
							<img
								src="professionalism-img.jpg"
								alt="Professionalism"
							/>

							<div className="circle-shape">
								<FontAwesomeIcon
									icon={faBriefcase}
									size="4x"
								/>
							</div>
							<div className="inner-content">
								<h3>Professionalism</h3>
								<p>
									We will work cooperatively with patients, clients and other agencies, ensuring our practice is safe, and
									proactive and supports continuous learning and improvement with the care we give.
								</p>
							</div>
						</div>
					</Carousel.Item>
				</Carousel>
			</section>
		</>
	)
}

export default WhoWeAre
