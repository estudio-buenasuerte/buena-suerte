import scrollToElement from 'scroll-to-element'

export default (id, distance = -20, duration = 750) => {
	scrollToElement(`#${id}`, {
		offset: distance,
		ease: 'outSine',
		duration,
	})
}
