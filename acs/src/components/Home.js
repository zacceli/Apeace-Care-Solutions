import "./Home.css"
import { useEffect } from "react"
import ModalDialog from "./ModalDialog"
import AOS from "aos"

const Home = () => {
	useEffect(() => {
		AOS.init()
	}, [])
	return (
		<div className="App">
			<br />
			<br />
			<br />
			<ModalDialog />
			<div
				data-aos="fade-left"
				style={{
					position: "relative",
				}}>
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						width: "90vw",
						height: "100%",
						margin: "auto",
						marginTop: "0",
					}}>
					<img
						src="/caring.jpeg"
						alt="Home"
						className="homeImage"
					/>
					<div className="text-block a">
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ducimus tempore possimus modi, laudantium vel aliquam
							quasi! Asperiores similique maxime dolores. Sed debitis, amet consequatur libero eveniet ad. Exercitationem, quaerat?
						</p>
					</div>
				</div>
			</div>
			<section
				className="section1"
				data-aos="fade-right">
				<div
					style={{
						position: "relative",
					}}>
					<div
						style={{
							display: "flex",
							justifyContent: "center",
							width: "100%",
							height: "100%",
							margin: "auto",
						}}>
						<p className="text-a">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae repudiandae assumenda minima obcaecati fuga inventore nulla
							magni aliquam amet? Voluptates adipisci velit enim assumenda accusamus natus! Doloribus atque excepturi accusamus.
							<br />
							<button>click here</button>
						</p>
						<div className="text">
							<img
								src="/caring.jpeg"
								alt="Home"
								className="homeImage"
							/>
						</div>
					</div>
				</div>
			</section>
			<section
				className="section1"
				data-aos="fade-left">
				<div
					style={{
						position: "relative",
					}}>
					<div
						style={{
							display: "flex",
							justifyContent: "center",
							width: "100%",
							height: "100%",
							margin: "auto",
						}}>
						<p className="text-a">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae repudiandae assumenda minima obcaecati fuga inventore nulla
							magni aliquam amet? Voluptates adipisci velit enim assumenda accusamus natus! Doloribus atque excepturi accusamus.
							<br />
							<button>click here</button>
						</p>
						<div className="text">
							<img
								src="/caring.jpeg"
								alt="Home"
								className="homeImage"
							/>
						</div>
					</div>
				</div>
			</section>
			<section
				className="section1"
				data-aos="fade-right">
				<div
					style={{
						position: "relative",
					}}>
					<div
						style={{
							display: "flex",
							justifyContent: "center",
							width: "100%",
							height: "100%",
							margin: "auto",
						}}>
						<p className="text-a">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae repudiandae assumenda minima obcaecati fuga inventore nulla
							magni aliquam amet? Voluptates adipisci velit enim assumenda accusamus natus! Doloribus atque excepturi accusamus.
							<br />
							<button>click here</button>
						</p>
						<div className="text">
							<img
								src="/caring.jpeg"
								alt="Home"
								className="homeImage"
							/>
						</div>
					</div>
				</div>
			</section>
			<section
				className="section1"
				data-aos="fade-left">
				<div
					style={{
						position: "relative",
					}}>
					<div
						style={{
							display: "flex",
							justifyContent: "center",
							width: "100%",
							height: "100%",
							margin: "auto",
						}}>
						<p className="text-a">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae repudiandae assumenda minima obcaecati fuga inventore nulla
							magni aliquam amet? Voluptates adipisci velit enim assumenda accusamus natus! Doloribus atque excepturi accusamus.
							<br />
							<button>click here</button>
						</p>
						<div className="text">
							<img
								src="/caring.jpeg"
								alt="Home"
								className="homeImage"
							/>
						</div>
					</div>
				</div>
			</section>
			<section
				className="list"
				data-aos="fade-right">
				<article>
					<div className="coll">
						<img
							src="/caring.jpeg"
							alt="Home"
							className="homeImage"
						/>
					</div>

					<h3>Live In Care</h3>
				</article>
				<article>
					<div className="coll">
						<img
							src="/caring.jpeg"
							alt="Home"
							className="homeImage"
						/>
					</div>
					<h3>Domiciliary Care</h3>
				</article>
				<article>
					<div className="coll">
						<img
							src="/caring.jpeg"
							alt="Home"
							className="homeImage"
						/>
					</div>
					<h3>Dementia Care</h3>
				</article>
				<article>
					<div className="coll">
						<img
							src="/caring.jpeg"
							alt="Home"
							className="homeImage"
						/>
					</div>
					<h3>Children Care</h3>
				</article>
				<article>
					<div className="coll">
						<img
							src="/caring.jpeg"
							alt="Home"
							className="homeImage"
						/>
					</div>
					<h3>Respite Care</h3>
				</article>
				<article>
					<div className="coll">
						<img
							src="/caring.jpeg"
							alt="Home"
							className="homeImage"
						/>
					</div>
					<h3>Learning Disability Care</h3>
				</article>
				<span></span>
				<button
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						width: "200px",
						height: "50px",
						margin: "auto",
					}}>
					click me
				</button>
			</section>
		</div>
	)
}

export default Home
