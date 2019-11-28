import { useState, useEffect } from 'react';

function useWinSize() {
	const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });

	useEffect(() => {
		function handleResize() {
			setWindowSize({ width: window.innerWidth, height: window.innerHeight });
		};

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
		
	}, []);

	return windowSize;
}
export default useWinSize;