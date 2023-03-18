<script>
	export let data;
	const { product } = data;
</script>

<h1>{product.title}</h1>
<p>{product.image}</p>
<p>{product.description}</p>
<p>${product.price.toFixed(2)}</p>
<!-- <p>{product.brand}</p> -->
