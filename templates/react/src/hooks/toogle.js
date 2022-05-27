import { useState } from 'react';
import { useCallback } from 'react/cjs/react.production.min';

export const useToggle = (defaultValue = false) => {
	const [baseState, setBaseState] = useState(defaultValue);

	const onToggleState = useCallback((value) => {
		setBaseState(value);
	}, []);

	return [baseState, onToggleState];
};
