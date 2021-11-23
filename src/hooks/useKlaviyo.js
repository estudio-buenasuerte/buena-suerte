import { useState, useEffect } from 'react'
import { email as emailRegex } from '../utils/emailRegex'
import { subscribe } from 'klaviyo-subscribe'

const useKlaviyo = klaviyoListId => {
	const [email, setEmail] = useState('')
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [isSuccess, setIsSuccess] = useState(false)
	const [showInvalidEmailError, setShowInvalidEmailError] = useState(false)
	const [networkError, setNetworkError] = useState(null)

	const onChange = event => {
		setEmail(event.target.value)
	}

	const onSubmit = async event => {
		event.preventDefault()

		const isEmailValid = emailRegex.test(email)

		if (!isEmailValid) {
			setShowInvalidEmailError(true)
			setIsSubmitting(false)
			setNetworkError(null)
			setIsSuccess(false)
			return
		}

		setShowInvalidEmailError(false)
		setIsSubmitting(true)

		try {
			const response = await subscribe(klaviyoListId, email)

			setIsSuccess(true)
			setNetworkError(null)
			setShowInvalidEmailError(false)
			setEmail('')
		} catch (error) {
			setNetworkError(error.msg)
		}

		setIsSubmitting(false)
	}

	// Validate when the email changes
	useEffect(() => {
		if (!showInvalidEmailError) return
		setShowInvalidEmailError(!emailRegex.test(email))
	}, [email])

	const inputProps = {
		value: email,
		onChange,
	}

	const formProps = {
		onSubmit,
	}

	return {
		formProps,
		inputProps,
		isSubmitting,
		isSuccess,
		showInvalidEmailError,
		networkError,
	}
}

export default useKlaviyo
