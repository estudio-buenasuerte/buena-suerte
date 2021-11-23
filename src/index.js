// Hooks
export { default as useHover } from './hooks/useHover'
export { default as useIntersection } from './hooks/useIntersection'
export { default as useInterval } from './hooks/useInterval'
export { default as useKlaviyo } from './hooks/useKlaviyo'
export { default as useLockBodyScroll } from './hooks/useLockBodyScroll'
export { default as useToggle } from './hooks/useToggle'

// Utils
// import dotEnv from './utils/dot-env'
export { default as emailRegex } from './utils/emailRegex'
export { default as isBrowser } from './utils/isBrowser'
export { default as sanityImage } from './utils/sanityImage'

export const printMsg = function () {
	console.log('This is a message from the demo package')
}
