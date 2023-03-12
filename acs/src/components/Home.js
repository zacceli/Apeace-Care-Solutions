import "./Home.css"
import { Link } from "react-router-dom"
import { Container, Row } from "react-bootstrap"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { useEffect } from "react"
import ModalDialog from "./ModalDialog"
import AOS from "aos"

const Home = () => {
	useEffect(() => {
		AOS.init()
	}, [])
	return (
		<div className="App">
			<ModalDialog />
			<section
				className="home-image-section"
				data-aos="fade-up">
				<Container className="home-image-section-container m-auto p-0">
					<Row>
						<div className="image">
							<img
								src="/caring.jpeg"
								alt="Home"
							/>
						</div>
						<div className="text-block">
							<h1>Placing value on your care</h1>
						</div>
					</Row>
				</Container>
			</section>
			<section
				className="section1"
				id="first-section"
				data-aos="fade-up">
				<Container>
					<div className="row-content">
						<div className="left-section">
							<figure>
								<img
									src="/caring.jpeg"
									alt="Home"
								/>
							</figure>
						</div>
						<div className="right-section">
							<p className="sub-heading">WHO WE ARE</p>
							<h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
							<p className="content">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae repudiandae assumenda minima obcaecati fuga inventore
								nulla magni aliquam amet? Voluptates adipisci velit enim assumenda accusamus natus! Doloribus atque excepturi
								accusamus.
							</p>
							<button className="btn">click here</button>
						</div>
					</div>
				</Container>
			</section>
			<section
				className="section1"
				data-aos="fade-up">
				<Container>
					<div
						className="row-content"
						style={{
							backgroundColor: "#f8b48f",
						}}>
						<div className="left-section">
							<figure>
								<img
									src="/caring.jpeg"
									alt="Home"
								/>
							</figure>
						</div>
						<div className="right-section">
							<p className="sub-heading">WHO WE ARE</p>
							<h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
							<p className="content">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae repudiandae assumenda minima obcaecati fuga inventore
								nulla magni aliquam amet? Voluptates adipisci velit enim assumenda accusamus natus! Doloribus atque excepturi
								accusamus.
							</p>
							<button className="btn">click here</button>
						</div>
					</div>
				</Container>
			</section>
			<section
				className="section1"
				data-aos="fade-up">
				<Container>
					<div className="row-content">
						<div className="left-section">
							<figure>
								<img
									src="/caring.jpeg"
									alt="Home"
								/>
							</figure>
						</div>
						<div className="right-section">
							<p className="sub-heading">WHO WE ARE</p>
							<h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
							<p className="content">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae repudiandae assumenda minima obcaecati fuga inventore
								nulla magni aliquam amet? Voluptates adipisci velit enim assumenda accusamus natus! Doloribus atque excepturi
								accusamus.
							</p>
							<button className="btn">click here</button>
						</div>
					</div>
				</Container>
			</section>
			<section
				className="section1"
				data-aos="fade-up">
				<Container>
					<div
						className="row-content"
						style={{
							backgroundColor: "#f8b48f",
						}}>
						<div className="left-section">
							<figure>
								<img
									src="/caring.jpeg"
									alt="Home"
								/>
							</figure>
						</div>
						<div className="right-section">
							<p className="sub-heading">WHO WE ARE</p>
							<h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
							<p className="content">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae repudiandae assumenda minima obcaecati fuga inventore
								nulla magni aliquam amet? Voluptates adipisci velit enim assumenda accusamus natus! Doloribus atque excepturi
								accusamus.
							</p>
							<button className="btn">click here</button>
						</div>
					</div>
				</Container>
			</section>
			<section
				className="list"
				data-aos="fade-up">
				<div className="services-inner-container">
					<div className="list-grid">
						<div className="coll">
							<div className="service-img">
								<figure>
									<img
										src="/caring.jpeg"
										alt="Home"
									/>
									<div className="hover-content">
										<div className="hover-text">
											<Link to="services/live-in-care">Know More</Link>
										</div>
									</div>
								</figure>
							</div>
							<h4>
								<Link to="services/live-in-care">Live In Care</Link>
							</h4>
						</div>

						<div className="coll">
							<div className="service-img">
								<figure>
									<img
										src="/caring.jpeg"
										alt="Home"
									/>
									<div className="hover-content">
										<div className="hover-text">
											<Link to="services/domiciliary-care">Know More</Link>
										</div>
									</div>
								</figure>
							</div>
							<h4>
								<Link to="services/domiciliary-care">Domiciliary Care</Link>
							</h4>
						</div>

						<div className="coll">
							<div className="service-img">
								<figure>
									<img
										src="/caring.jpeg"
										alt="Home"
									/>
									<div className="hover-content">
										<div className="hover-text">
											<Link to="services/dementia-care">Know More</Link>
										</div>
									</div>
								</figure>
							</div>
							<h4>
								<Link to="services/dementia-care">Dementia Care</Link>
							</h4>
						</div>

						<div className="coll">
							<div className="service-img">
								<figure>
									<img
										src="/caring.jpeg"
										alt="Home"
									/>
									<div className="hover-content">
										<div className="hover-text">
											<Link to="services/childen-care">Know More</Link>
										</div>
									</div>
								</figure>
							</div>
							<h4>
								<Link to="services/childen-care">Children Care</Link>
							</h4>
						</div>

						<div className="coll">
							<div className="service-img">
								<figure>
									<img
										src="/caring.jpeg"
										alt="Home"
									/>
									<div className="hover-content">
										<div className="hover-text">
											<Link to="services/Respite-care">Know More</Link>
										</div>
									</div>
								</figure>
							</div>
							<h4>
								<Link to="services/respite-care">Respite Care</Link>
							</h4>
						</div>

						<div className="coll">
							<div className="service-img">
								<figure>
									<img
										src="/caring.jpeg"
										alt="Home"
									/>
									<div className="hover-content">
										<div className="hover-text">
											<Link to="services/learning-disability-care">Know More</Link>
										</div>
									</div>
								</figure>
							</div>
							<h4>
								<Link to="services/learning-disability-care">Learning Disability Care</Link>
							</h4>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Home
