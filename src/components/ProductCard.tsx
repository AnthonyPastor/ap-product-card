import React, { createContext, useCallback } from 'react';

import { useProduct } from '../hooks/useProduct';
import {
  InitialValues,
  onChangeArgs,
  Product,
  ProductCardHandlers,
  ProductContextProps,
} from '../interfaces/interfaces';

import styles from '../styles/styles.module.css';

export const ProductContext = createContext({} as ProductContextProps);

const { Provider } = ProductContext;

export interface Props {
  product: Product;
  // children?: ReactElement[] | ReactElement ;
  children?: (args: ProductCardHandlers) => JSX.Element;
  className?: string;
  style?: React.CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  countValue?: number;
  initialValues?: InitialValues;
}

export const ProductCard = ({
  product,
  children,
  className,
  style,
  onChange,
  countValue,
  initialValues,
}: Props) => {
  const { counter, increaseBy, decreaseBy, maxCount, reset } = useProduct({
    product,
    onChange,
    countValue,
    initialValues,
  });

  const isMaxReached = useCallback(() => {
    return counter === maxCount;
  }, [counter, maxCount]);

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        decreaseBy,
        product,
        maxCount,
        isMaxReached: isMaxReached(),
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children &&
          children({
            count: counter,
            isMaxCountReached: isMaxReached(),
            increaseBy,
            decreaseBy,
            product,
            maxCount,
            reset,
          })}
      </div>
    </Provider>
  );
};
