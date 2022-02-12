<!-- src/routes/settings/__layout.svelte -->


<div class="submenu">
    <ul>
        <li><a href="/settings/compliance/">Compliance</a>
</li>
<li><a href="/settings/profile">Profile</a>
</li>
<li><a href="/settings/notifications">Notifications</a>
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
