import { useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap"
import "./WhoWeAre.css"
import AOS from "aos"

const Career = () => {
	useEffect(() => {
		AOS.init()
	}, [])

	return (
		<>
			<section className="breadcrumb">
				<Container>
					<div className="inner-container">
						<span>Home &rarr; Career</span>
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
										<h1>Work For Us</h1>
									</Row>
									<Row>
										<p style={{ fontSize: "20px" }}>
											Looking for a change of employer or a new career? Move to Apeace Care and be part of a
											profession to be proud of. Every day you will be making a difference to somebody's life.
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
				className="content-sec"
				data-aos="fade-up">
				<Container>
					<div className="inner-container">
						<div className="content-wrap">
							<h2>Our Team</h2>
							<p style={{ textAlign: "left" }}>
								Dedicated, highly qualified carers and support workers, selected for their ability to deliver the highest standard
								of personalised care and support ensuring your dignity, privacy and individuality. They are carefully matched,
								specifically to meet your unique needs.
							</p>
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

export default Career
