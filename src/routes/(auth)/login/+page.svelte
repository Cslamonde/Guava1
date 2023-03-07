<script>
	import { FluidForm, TextInput, PasswordInput } from 'carbon-components-svelte';
	import { ButtonSet, Button } from 'carbon-components-svelte';
	import Login from 'carbon-icons-svelte/lib/Login.svelte';
	import { AspectRatio } from 'carbon-components-svelte';
	let password = '';
	let invalid = false;

	$: invalid = !/^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]{6,}$/.test(password);
</script>

<AspectRatio ratio="2*1">
	<FluidForm>
		<h2>Log in to your account</h2>
		<br />

		<TextInput labelText="User name" placeholder="Enter user name..." required />

		<PasswordInput
			bind:value={password}
			{invalid}
			invalidText="Your password must be at least 6 characters as well as contain at least one uppercase, one lowercase, and one number."
			required
			type="password"
			labelText="Password"
			placeholder="Enter password..."
		/>
	</FluidForm>
	<ButtonSet stacked>
		<Button icon={Login}>Log in</Button>
	</ButtonSet>
</AspectRatio>

<slot />
