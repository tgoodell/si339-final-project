<script setup>
const props = defineProps(['tags'])

function tagLink(tag) {
    return '/tags/' + tag.toLowerCase()
}
</script>

<template>
    <div class="tags">
        <a v-for="tag in tags" :href="tagLink(tag)" class="tag">{{ tag }}</a>
    </div>
</template>