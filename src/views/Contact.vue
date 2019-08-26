<template>
    <div class="main-container">
        <ContactForm/>
        <Separator />
    </div>
</template>
<script>
import ContactForm from "@/components/ContactForm";
import Separator from "@/components/Separator";
export default {
	components: {
        ContactForm,
        Separator
	}
}
</script>
