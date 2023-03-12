import { useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap"
import "./WhoWeAre.css"
import AOS from "aos"

const LearningDisabilityCare = () => {
    useEffect(() => {
		AOS.init()
	}, [])

	return (
		<>
			<section className="breadcrumb">
				<Container>
					<div className="inner-container">
						<span>Home &rarr; Services &rarr; Learning Disability Care</span>
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
										<h1>Learning Disability Care</h1>
									</Row>
									<Row>
										<p style={{ fontSize: "20px" }}>TBC</p>
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
				className="content-sec"
				data-aos="fade-up">
				<Container>
					<div className="inner-container">
						<div className="content-wrap">
							<h2>Why Choose Us</h2>
							<ul>
								<li>A safe independent and well led services for local people, that delivers quality and peace of mind.</li>
								<li>A completely unique service tailored to meet individuals needs, preference and choice.</li>
								<li>
									All visits are monitored electronically, 24 hours a day, thus guaranteeing reliability. Spots checks are
									done to monitor if our staff are doing things correct.
								</li>
								<li>Verification on identity including eligibility to work in UK. Checks are also done in immunisation.</li>
								<li>
									Rigorous induction and ongoing trying, supervision and appraisal to ensure a knowledgeable and professional
									care team that can deliver personalised needs care.
								</li>
							</ul>
							<p>&nbsp;</p>
							<h3>Get in touch to find out more about our Care Services</h3>
							<a
								href="tel:0000000000"
								className="btn">
								Call Us
							</a>
						</div>
					</div>
				</Container>
			</section>
		</>
	)
}

export default LearningDisabilityCare