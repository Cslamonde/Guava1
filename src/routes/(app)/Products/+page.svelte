<script>
	export let data;
  
	const { products } = data;
	import { Grid, Row, Column, ImageLoader } from 'carbon-components-svelte';
	import { Link } from 'carbon-components-svelte';
  
	function getImageSrc(imageBase64) {
	  const binary = atob(imageBase64);
	  const bytes = new Uint8Array(binary.length);
	  for (let i = 0; i < binary.length; i++) {
		bytes[i] = binary.charCodeAt(i);
	  }
	  return URL.createObjectURL(new Blob([bytes], { type: 'image/jpeg' }));
	}
  </script>
  
  {#each products as product}
	<Grid>
	  <Row>
		<Column sm={1} md={4} lg={8}>
		  <!-- {console.log('HERE')}
		  {console.log(product)} -->
		  <img src={getImageSrc(product.image)} alt={product.name} />
		  <h2>
			<Link href="/Products/{product.id}" data-sveltekit-preload>
			  {product.name}
			</Link>
		  </h2>
		  <p>{product.price}</p>        
		  <p>{product.description}</p>
		</Column>
	  </Row>
	</Grid>
  {/each}
  