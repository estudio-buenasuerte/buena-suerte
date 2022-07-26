const DEFAULT_PROPS = {
	auto: 'format',
	q: '100',
}

const sanityImageUrl = (src = '', props = {}) => {
	const updatedProps = {
		...DEFAULT_PROPS,
		...props,
	}

	const query = Object.entries(updatedProps).map(value => `${value[0]}=${value[1]}`)

	return `${src}?${query.join('&')}`
}

export default sanityImageUrl
