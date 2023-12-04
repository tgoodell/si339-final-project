<script setup>
const route = useRoute()
</script>

<template>
    <div class="default-container error404">
        <h1>404</h1>
        <p>Page <a :href="route.fullPath">{{ route.path }}</a> cannot be found. Try again!</p>
    </div>
</template>