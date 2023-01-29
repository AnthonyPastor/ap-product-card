import React, { useContext } from 'react';

import { ProductContext } from './ProductCard';
import styles from '../styles/styles.module.css';

export interface Props {
  className?: string;
  style?: React.CSSProperties;
}

export const ProductButtons = ({ className, style }: Props) => {
  const { increaseBy, decreaseBy, counter, isMaxReached } = useContext(
    ProductContext
  );

  return (
    <div className={`${styles.buttonsContainer} ${className}`} style={style}>
      <button className={styles.buttonMinus} onClick={() => decreaseBy(-1)}>
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button
        className={`${styles.buttonAdd} ${isMaxReached && styles.disabled}`}
        onClick={() => increaseBy(1)}
      >
        +
      </button>
    </div>
  );
};
