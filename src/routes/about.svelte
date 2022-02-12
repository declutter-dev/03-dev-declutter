<!-- src/routes/about.svelte -->
<h1>About</h1>
<script>
import Casagrimouch from '/src/images/casagrimouch.webp'
//import AjiMenu from '/tempmenu.png'
</script>
<!-- <img src={Casagrimouch} alt="una casa"/> -->
<img srcset={Casagrimouch} type="image/webp" alt="map of Guadalajara"/>
<div class="item">
<style>

h1 { 
	color:#344955;
}
img {
    max-width: 50%;
    height: auto;
}

.item {
    width: 120px;
    min-height: 120px;
    max-height: auto;
    float: left;
    margin: 30px;
    padding: 30px;
}
</style>
</div>
