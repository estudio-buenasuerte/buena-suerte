# buena-suerte

🤞 A small collection of convenient JavaScript utilities & helpers. Mostly used for React/Next.js/Gatsby

## Features

- 🔬 Tiny (<850b gzipped)
- 🚕 Convenient
- 🌲 Tree-shakeable

## Installation

```sh
npm i buena-suerte
```

## Usage

```js
import { useeInterval } from 'buena-suerte'

const [count, setCount] = useState(0);
const [delay, setDelay] = useState(1000);
const [isRunning, toggleIsRunning] = useState(true);

useInterval(
	() => {
		setCount(count + 1);
	},
	isRunning ? delay : null
);

```

## Functions

### `useInterval`

Use Interval to be used in React projects
