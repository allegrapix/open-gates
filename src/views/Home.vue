<template>
    <div class="main-container">
		<Banner />
		<About />
		<Details />
		<Separator />
    </div>
</template>
<script>
import Banner from "@/components/Banner";
import About from "@/components/About";
import Details from "@/components/Details";
import Separator from "@/components/Separator";
export default {
	components: {
		Banner,
		About,
		Details,
		Separator
	}
}
</script>
