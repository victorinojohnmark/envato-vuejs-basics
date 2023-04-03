<template>
    <a class="nav-link" aria-current="page" 
    :class="activeClasses"
    :href="page.link.url" 
    :title="`This link goes to the ${page.link.text} page`">{{ page.link.text }}</a>
</template>

<script>
export default {
    props: ['page', 'isActive'],
    computed: {
        activeClasses() {
            return {
                active: this.isActive,
                empasize: this.isActive
            }
        }
    }
}
</script>

<style scoped>
    .empasize {
        text-decoration: underline !important;
    }
</style>