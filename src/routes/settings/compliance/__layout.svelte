<!-- src/routes/settings/compliance/__layout.svelte -->


<div class="sub-sub-menu">
    <ul>
        <li>
            <a href="/settings/compliance/termsofservice">Terms of Service</a>
</li>
        <li>
<a href="/settings/compliance/privacy-policy">Privacy Policy</a>
</li>
</ul>

</div>

<slot></slot>
<style>
	ul {
		display: flex;
		margin: 0;
		padding: 0;
		list-style: none;
	}
	li {
		margin-right: 20px;
		font-weight: bold;
	}
	a {
		color:sienna;
		text-decoration: none;
	}
	a:hover {
		color:saddlebrown;
	}


</style>
