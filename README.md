# AP-Product-Card-React

This package is a test of deploy on NPM

##### Anthony Pastor

## Installation

Run the command 
```
npm install ap-product-card-react
```
or
```
yarn add ap-product-card-react
```


## Usage
```
import { ProductCard } from 'ap-product-card-react'
```

```
<ProductCard
	product={product}
	initialValues={{
	count: 4,
	maxCount: 10,
	}}
>
	{({ reset, decreaseBy, increaseBy, isMaxCountReached, count }) => (
		<>
			<ProductCard.Image />
			<ProductCard.Title title={product.title} />
			<ProductCard.Buttons />
		</>
	)}
</ProductCard>
```
