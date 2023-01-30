# AP-Product-Card

Este es un paquete de pruebas de despliegue en NPM

### Anthony Pastor

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
