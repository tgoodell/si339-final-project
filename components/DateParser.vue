<script setup>
const props = defineProps(['rawDate'])

// [0] - Year
// [1] - Month
// [2] - Day
const splitDate = props.rawDate.split('-')

const months = [
    'Jan.',
    'Feb.',
    'Mar.',
    'Apr.',
    'May.',
    'June',
    'July',
    'Aug.',
    'Sept.',
    'Oct.',
    'Nov.',
    'Dec.',
]

const month = computed(() => {
    return months[parseInt(splitDate[1])-1]
})

const day = computed(() => {
    return splitDate[2]
})

const year = computed(() => {
    return splitDate[0]
})

const date = computed(() => {
    return day.value + ' ' + month.value + ' ' + year.value
})
</script>

<template>
<h3><i>{{ date }}</i></h3>
</template>