import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard, ProductButtons, ProductImage, ProductTitle } from '../.';

const product = {
  id: '1',
  title: 'Coffee mug',
  img: './coffee-mug.png',
};

const App = () => {
  return (
    <>
      <ProductCard
        product={product}
        initialValues={{
          count: 4,
          maxCount: 10,
        }}
      >
        {({ reset, decreaseBy, increaseBy, isMaxCountReached, count }) => (
          <>
            <ProductImage />
            <ProductTitle title={product.title} />
            <ProductButtons />
          </>
        )}
      </ProductCard>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
