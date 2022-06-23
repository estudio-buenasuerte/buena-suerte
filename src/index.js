// Hooks
import useHover from './hooks/useHover.js'
import useIntersection from './hooks/useIntersection.js'
import useInterval from './hooks/useInterval.js'
import useKlaviyo from './hooks/useKlaviyo.js'
import useLockBodyScroll from './hooks/useLockBodyScroll.js'
import useToggle from './hooks/useToggle.js'
import usePrevious from './hooks/usePrevious.js'

// Utils
// import dotEnv from './utils/dot-env'
import emailRegex from './utils/emailRegex.js'
import isBrowser from './utils/isBrowser.js'
import sanityImage from './utils/sanityImage.js'

const printMsg = function () {
	console.log('This is a message from the demo package')
}

export {
	useHover,
	useIntersection,
	useInterval,
	useKlaviyo,
	useLockBodyScroll,
	useToggle,
	usePrevious,
	emailRegex,
	isBrowser,
	sanityImage,
	printMsg,
}
