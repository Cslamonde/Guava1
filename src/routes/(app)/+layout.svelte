<script>
	import 'carbon-components-svelte/css/all.css';

	import ShoppingCart from 'carbon-icons-svelte/lib/ShoppingCart.svelte';
	import { Search } from 'carbon-components-svelte';
	let expanded = false;

	import {
		Header,
		HeaderNav,
		HeaderNavItem,
		HeaderNavMenu,
		SideNav,
		SideNavItems,
		SideNavMenu,
		SideNavMenuItem,
		SideNavLink,
		SideNavDivider,
		SkipToContent,
		Content,
		Grid,
		Row,
		Column,
		Button,
		ButtonSet,
		Breadcrumb,
		BreadcrumbItem,
		OverflowMenu,
		OverflowMenuItem
	} from 'carbon-components-svelte';
	import Fade from 'carbon-icons-svelte/lib/Fade.svelte';

	let isSideNavOpen = false;
	let companyName = 'Guava';
</script>

<Header company={companyName} href="/" bind:isSideNavOpen>
	<svelte:fragment slot="skip-to-content">
		<SkipToContent />
	</svelte:fragment>
	<HeaderNav>
		<Search />
		<br />
		<strong>Expanded:</strong>
		{expanded}
		<HeaderNavItem href="/" text="Phones" />
		<HeaderNavItem href="/" text="Laptops" />
		<HeaderNavItem href="" text="Accessories" />
		<HeaderNavItem href="/login" text="Log in" />

		<Button kind="ghost" href="/signup">Sign up</Button>

		<ShoppingCart />
	</HeaderNav>
</Header>

<SideNav bind:isOpen={isSideNavOpen} rail>
	<SideNavItems>
		<SideNavLink icon={Fade} text="Phones" href="/" isSelected />
		<SideNavLink icon={Fade} text="Products" href="/Products" data-sveltekit-preload-data />
		<SideNavLink icon={Fade} text="Watches" href="/" />
		<SideNavMenu icon={Fade} text="Menu">
			<SideNavMenuItem href="/login" text="Login" />
			<SideNavMenuItem href="/signup" text="Signup" />
		</SideNavMenu>
		<SideNavDivider />
		<SideNavLink icon={Fade} text="Accesories" href="/" />
	</SideNavItems>
</SideNav>

<Content>
	<Grid>
		<Row>
			<Column>
				<Breadcrumb noTrailingSlash>
					<BreadcrumbItem href="/">Home</BreadcrumbItem>
					<BreadcrumbItem href="/">Phones</BreadcrumbItem>
					<BreadcrumbItem>
						<OverflowMenu>
							<OverflowMenuItem href="/api/data" text="Data" />
							<OverflowMenuItem href="/api/data/latest" text="Latest" />
						</OverflowMenu>
					</BreadcrumbItem>
					<BreadcrumbItem href="/api/data/latest/usage" isCurrentPage>Usage</BreadcrumbItem>
				</Breadcrumb>
			</Column>
		</Row>
	</Grid>
</Content>

<slot />
