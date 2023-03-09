import "./ContactUs.css"
import ContactForm from "./ContactForm"
import AOS from "aos"
import "aos/dist/aos.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone, faEnvelope, faMapLocationDot } from "@fortawesome/free-solid-svg-icons"
import { useEffect } from "react"

const ContactUs = () => {
	useEffect(() => {
		AOS.init()
	}, [])

	return (
		<>
			<section
				className="page"
				data-aos="fade-left">
				<div className="left">
					<div className="directory">
						<span>Home &rarr; Contact Us</span>
					</div>
				</div>
				<div className="right">
					<div className="contact-icons">
						<div>
							<div className="icon-box">
								<div className="icon">
									<FontAwesomeIcon
										icon={faPhone}
										size="xl"
									/>
								</div>
							</div>
							<div className="icon-text">
								<span>Phone Number</span>
							</div>
						</div>
						<div>
							<div className="icon-box">
								<div className="icon">
									<FontAwesomeIcon
										icon={faEnvelope}
										size="xl"
									/>
								</div>
							</div>
							<div className="icon-text">
								<span>admin@apeacecaresolutions.com</span>
							</div>
						</div>
						<div>
							<div className="icon-box">
								<div className="icon">
									<FontAwesomeIcon
										icon={faMapLocationDot}
										size="xl"
									/>
								</div>
							</div>
							<div className="icon-text">
								<span>10 Newburgh Road, Grays, Essex</span>
							</div>
						</div>
					</div>
					<div className="contact-form-box">
						<div className="contact-form-img">
							<img
								src="/caring.jpeg"
								alt="contact-form-img"
							/>
						</div>
						<div className="contact-form">
							<ContactForm />
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default ContactUs
