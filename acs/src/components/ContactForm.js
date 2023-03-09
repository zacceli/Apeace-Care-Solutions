import { Button, Form } from "react-bootstrap"
import ReCAPTCHA from "react-google-recaptcha"
import { useRef, useState } from "react"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import axios from "axios"

const ContactForm = () => {
	const recaptchaRef = useRef(null)
	const [recaptchaToken, setRecaptchaToken] = useState(null)
	const [invalidCount, setInvalidCount] = useState(0)
	const [validated, setValidated] = useState(false)
	const nameRef = useRef(null)
	const emailRef = useRef(null)
	const numRef = useRef(null)
	const messageRef = useRef(null)

	const handleRecaptcha = (token) => {
		setRecaptchaToken(token)
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		e.stopPropagation()
		const token = recaptchaRef.current.getValue()
		recaptchaRef.current.reset()
		const form = e.currentTarget

		if (form.checkValidity() === false || !recaptchaToken) {
			setValidated(true)
			setInvalidCount((prevCount) => prevCount + 1)
			return
		}

		setValidated(false)
		console.log(token)

		console.log(process.env)

		await axios
			.post(process.env.REACT_APP_API_URL, { token })
			.then((res) => console.log(res))
			.catch((error) => {
				console.log(error)
			})
	}

	return (
		<Form
			noValidate
			validated={validated}
			onSubmit={handleSubmit}>
			<h1>Contact Us</h1>
			<Form.Group className={validated && !nameRef.current.value ? "invalid mb-3" : "mb-3"}>
				<Form.Control
					type="text"
					placeholder="Name"
					pattern="[A-Za-z]+"
					ref={nameRef}
					required
				/>
				<Form.Control.Feedback
					key={`name-feedback-${invalidCount}`}
					type="invalid">
					Please enter your name.
				</Form.Control.Feedback>
			</Form.Group>
			<Form.Group className={validated && !emailRef.current.value ? "invalid mb-3" : "mb-3"}>
				<Form.Control
					type="email"
					placeholder="Email"
					ref={emailRef}
					required
				/>
				<Form.Control.Feedback
					key={`email-feedback-${invalidCount}`}
					type="invalid">
					Please enter a valid email address.
				</Form.Control.Feedback>
			</Form.Group>
			<Form.Group className={validated && !numRef.current.value ? "invalid mb-3" : "mb-3"}>
				<Form.Control
					type="tel"
					placeholder="Phone Number"
					pattern="[A-Za-z0-9-]+"
					ref={numRef}
					required
				/>
				<Form.Control.Feedback
					key={`number-feedback-${invalidCount}`}
					type="invalid">
					Please enter a valid phone number.
				</Form.Control.Feedback>
			</Form.Group>
			<Form.Group className={validated && !messageRef.current.value ? "invalid mb-3" : "mb-3"}>
				<Form.Control
					as="textarea"
					rows={3}
					placeholder="Message"
					ref={messageRef}
					required
				/>
			</Form.Group>
			<div className="recaptcha mb-3">
				<ReCAPTCHA
					sitekey={process.env.REACT_APP_SITE_KEY}
					ref={recaptchaRef}
					onChange={handleRecaptcha}
					data-badge="inline"
				/>
			</div>
			<div className="form-btn">
				<Button
					variant="dark"
					type="submit"
					size="lg">
					Send
				</Button>
			</div>
		</Form>
	)
}

export default ContactForm
