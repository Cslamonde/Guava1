import { Product } from 'carbon-icons-svelte';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
	const fetchProducts = async () => {
		// http://localhost:8080/product/
		// http://localhost:8080/category/list
		// const productRes = await fetch('https://dummyjson.com/products?limit=10');
		// const productRes = await fetch('http://localhost:8080/product/');
		const productRes = await fetch('http://localhost:8081/listProducts');
		
		const productData = await productRes.json();
		console.log('Product data:', productData);

		// const products = productData.map(Product => ({
		// 	name: Product.name,
		// 	// imageURL: `http://localhost:3000/uploads/${Product.imageFilename}`,
		// 	imageURL: `http://localhost:8080/static/images/${Product.imageFilename}`,
		// 	description: Product.description,
		// 	price: Product.price,
		// 	brand: product.brand,
		// 	categoryId: Product.categoryId
		// }))
		// return productData.products;
		// return products;
		
		return productData.map(Product => ({
			name: Product.name,
			image: Product.image,
			description: Product.description,
			// brand: Product.brand,
			price: Product.price,			
			// categoryId: Product.categoryId
		}))
	};
	// const fetchUsers = async () => {
	// 	const usersRes = await fetch('https://dummyjson.com/users?limit=10');
	// 	const usersData = await usersRes.json();
	// 	return usersData.users;
	// };
	const products = await fetchProducts();

	return {
		products: fetchProducts(),
		// users: fetchUsers()
	};
	
}
