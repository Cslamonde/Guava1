<script>
	export let data;

	const { products } = data;
	import { Grid, Row, Column, ImageLoader } from 'carbon-components-svelte';
	import { Link } from 'carbon-components-svelte';
</script>

{#each products as product}
	<Grid>
		<Row>
			<Column sm={1} md={4} lg={8}>
				<ImageLoader src={product.image} alt={product.title} />
				<h2>
					<Link href="/Products/{product.id}" data-sveltekit-preload>
						{product.title}
					</Link>
				</h2>
				<p>{product.price}</p>
				<p>{product.description}</p>
			</Column>
		</Row>
	</Grid>
{/each}
