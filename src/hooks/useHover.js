import {useState} from 'react';

const useHover = () => {
	const [isHovering, setIsHovering] = useState(false);

	const onMouseEnter = () => {
		setIsHovering(true);
	};

	const onMouseLeave = () => {
		setIsHovering(false);
	};

	const hoverProps = {onMouseEnter, onMouseLeave};

	return [isHovering, hoverProps];
};

export default useHover;
