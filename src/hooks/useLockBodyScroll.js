import { useLayoutEffect } from 'react'

const useLockBodyScroll = boolean => {
	useLayoutEffect(() => {
		const originalStyle = window.getComputedStyle(document.body).overflow

		if (!!boolean) {
			document.body.style.overflow = 'hidden'
		}

		return () => (document.body.style.overflow = originalStyle)
	}, [boolean])
}

export default useLockBodyScroll
