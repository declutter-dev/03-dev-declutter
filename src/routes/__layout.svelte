<nav>
	<ul>
	<li>
	<a href="/">Home</a>
	</li>
	<li>
	<a href="/about">About</a>
	</li>
	<li>
		<a href="/login">Login</a>
	</li>
	<li>
		<a href="/">Logout</a>
	</li>
<li>
	<a href="/settings">Settings</a>
	</li>
	</ul>
</nav>

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
		color:#344955;
		text-decoration: none;
	}
	a:hover {
		color:#f9aa33;
		background-color: #232f34;
		padding: 5px;
    border: 2px solid #4a6572;
	border-radius: 15px 50px 30px ;
    transition: .4s ease-in-out  ;
	width: 200px;
  height: 150px;

	}

</style>