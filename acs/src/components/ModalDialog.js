import { Modal, Button, Form, FormGroup } from "react-bootstrap"
import { useState } from "react"
import emailjs from "emailjs-com"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./ModalDialog.css"

const RadioInput = ({ label, value, checked, setter }) => {
	return (
		<Form.Check
			type="radio"
			label={label}
			checked={checked === value}
			onChange={() => setter(value)}
			required
		/>
	)
}

const ModalDialog = () => {
	const [isShow, invokeModal] = useState(true)
	const [page, changePage] = useState(0)
	const [careOptions, setCareOptions] = useState()
	const [careHours, setCareHours] = useState()
	const [postcode, setPostcode] = useState("")
	const [email, setEmail] = useState("")
	const [name, setName] = useState("")
	const [pNumber, setPNumber] = useState(0)

	const displayPage = () => {
		if (page === 0) {
			return (
				<div>
					<div>
						<p>Care in your community</p>
					</div>
					<div>
						<FormGroup>
							<RadioInput
								label="Care for loved one"
								value="care for loved one"
								checked={careOptions}
								setter={setCareOptions}
							/>

							<RadioInput
								label="Care for myself"
								value="care for myself"
								checked={careOptions}
								setter={setCareOptions}
							/>

							<RadioInput
								label="A career in care"
								value="a career in care"
								checked={careOptions}
								setter={setCareOptions}
							/>

							<RadioInput
								label="Other"
								value="other"
								checked={careOptions}
								setter={setCareOptions}
							/>
						</FormGroup>
					</div>
				</div>
			)
		} else if (page === 1) {
			return (
				<div>
					<div>
						<p>Weekly hours of care required:</p>
					</div>
					<div>
						<FormGroup>
							<RadioInput
								label="1-20 hours"
								value="1-20 hours"
								checked={careHours}
								setter={setCareHours}
							/>

							<RadioInput
								label="20-40 hours"
								value="20-40 hours"
								checked={careHours}
								setter={setCareHours}
							/>

							<RadioInput
								label="40-60 hours"
								value="40-60 hours"
								checked={careHours}
								setter={setCareHours}
							/>

							<RadioInput
								label="Live-in care"
								value="live-in care"
								checked={careHours}
								setter={setCareHours}
							/>

							<RadioInput
								label="Other"
								value="other"
								checked={careHours}
								setter={setCareHours}
							/>
						</FormGroup>
					</div>
				</div>
			)
		} else if (page === 2) {
			return (
				<div>
					<div>
						<p>Please enter your postcode so we can find our closest carers to you:</p>
					</div>
					<div>
						<Form.Control
							type="text"
							placeholder="Postcode"
							value={postcode}
							onChange={(event) => setPostcode(event.target.value)}
							required
						/>
					</div>
				</div>
			)
		} else if (page === 3) {
			return (
				<div>
					<div>
						<p>We would love to discuss your care needs further. Please enter your email address below.</p>
					</div>
					<div>
						<Form.Control
							type="email"
							placeholder="Enter your email"
							name="email"
							value={email}
							onChange={(event) => setEmail(event.target.value)}
							required
						/>
					</div>
				</div>
			)
		} else if (page === 4) {
			return (
				<div>
					<div>
						<p>Full name</p>
					</div>
					<div>
						<Form.Control
							type="text"
							placeholder="Enter your name"
							value={name}
							onChange={(event) => setName(event.target.value)}
							required
						/>
					</div>
				</div>
			)
		} else if (page === 5) {
			return (
				<div>
					<div>
						<p>Phone Number</p>
					</div>
					<div>
						<Form.Control
							type="number"
							placeholder="Number"
							value={pNumber}
							onChange={(event) => setPNumber(event.target.value)}
							required
						/>
					</div>
				</div>
			)
		} else if (page === 6) {
			return (
				<div>
					<div>
						<p>Thank you!</p>
					</div>
					<div>
						<p>We will be in touch soon!</p>
					</div>
				</div>
			)
		}
	}

	const nextPage = () => {
		if (page < 1 && !!careOptions) {
			changePage(page + 1)
		}
		if (page < 2 && !!careHours) {
			changePage(page + 1)
		}
		if (page < 3 && !!postcode) {
			changePage(page + 1)
		}
		if (page < 4 && !!email) {
			changePage(page + 1)
		}
		if (page < 5 && !!name) {
			changePage(page + 1)
		}
		if (page < 6 && !!pNumber) {
			changePage(page + 1)
		}
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		// go to https://dashboard.emailjs.com/admin to get your own user ID, service ID and template ID
		// change the values of the SERVICE_ID, TEMPLATE_ID and USER_ID to your own with the format
		// of "service_XXXXXX", "template_XXXXXX", templateParams, "XXXX_XXXXXX" respectively
		emailjs.send("", "", { email: email }, "").then(
			(result) => {
				console.log(result.text)
			},
			(error) => {
				console.log(error.text)
			}
		)
		console.log("submitted successfully")
	}

	const backPage = () => {
		if (page > 0) {
			changePage(page - 1)
		}
	}

	const initModal = () => {
		return invokeModal(!isShow)
	}
	return (
		<>
			<Modal show={isShow}>
				<Modal.Header
					closeButton
					onClick={initModal}>
					<Modal.Title>Company Logo</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form
						id="full-form"
						onSubmit={handleSubmit}>
						{displayPage()}
					</Form>
					{page > 0 && (
						<Button
							variant="danger"
							onClick={backPage}
							size="sm">
							Back
						</Button>
					)}
					{page < 6 ? (
						page === 5 ? (
							<Button
								variant="primary"
								type="submit"
								onClick={nextPage}
								size="sm"
								disabled={false}>
								Submit
							</Button>
						) : (
							<Button
								variant="primary"
								onClick={nextPage}
								size="sm"
								disabled={false}>
								Next
							</Button>
						)
					) : (
						<Button
							form="full-form"
							type="submit"
							variant="dark"
							onClick={initModal}
							size="sm">
							Ok, Close
						</Button>
					)}
				</Modal.Body>
			</Modal>
		</>
	)
}

export default ModalDialog
