import { useEffect, useRef, useState } from "react";
import { InitialValues, onChangeArgs, Product } from "../interfaces/interfaces";

interface Props {
	product: Product;
	onChange?: (args: onChangeArgs) => void;
	countValue?: number;
	initialValues?: InitialValues;
}

export const useProduct = ({
	onChange,
	product,
	countValue = 0,
	initialValues,
}: Props) => {
	const [counter, setCounter] = useState(initialValues?.count || countValue);

	const isControlled = useRef(!!onChange);
	const isMounted = useRef(false);

	useEffect(() => {
		if (!isMounted.current) return;

		setCounter(countValue);
	}, [countValue]);

	useEffect(() => {
		isMounted.current = true;
	}, []);

	const increaseBy = (value: number) => {
		if (isControlled.current && onChange) {
			return onChange({ count: value, product });
		}

		let newValue = Math.max(counter + value, 0);
		if (initialValues?.maxCount)
			newValue = Math.min(counter + value, initialValues?.maxCount);

		setCounter(newValue);
		if (onChange) onChange({ count: newValue, product });
	};

	const decreaseBy = (value: number) => {
		if (isControlled.current && onChange) {
			return onChange({ count: value, product });
		}

		const newValue = Math.max(counter + value, 0);

		setCounter(newValue);
		if (onChange) onChange({ count: newValue, product });
	};

	const reset = () => {
		setCounter(initialValues?.count || countValue);
	};

	return {
		counter,
		increaseBy,
		decreaseBy,
		maxCount: initialValues?.maxCount,
		reset,
	};
};
