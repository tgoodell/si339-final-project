<script setup>
function capitalize(inRoute) {
    return inRoute[0].toUpperCase() + inRoute.slice(1)
}

function masterCapitalize(inRoute) {
    if (inRoute.includes(" ")) {
        const res = inRoute.split(" ")
        return capitalize(res[0]) + " " + capitalize(res[1])
    }
    return capitalize(inRoute)
}

const route = useRoute()
const tag = masterCapitalize(route.path.split('/')[2].replace("%20", " "))

const { data } = await useAsyncData('', () => queryContent('/essays').where({'tags': { $contains: tag }}).sort({'date': -1}).find())
console.log(data.value.length)
</script>

<template>
    <main class="default-container">
        <div v-if="data.length > 0">
            <h1>Essays - {{ tag }}</h1>
            <div>
                <div v-for="post in data" class="post-preview">
                    <h2><a :href="post._path">{{ post.title }}</a></h2>
                    <DateParser :rawDate="post.date" />
                    <ContentRenderer :value="post" :excerpt="true" />

                    <div class="more-and-tags">
                        <div class="tags">
                            <TagCards :tags="post.tags" />
                        </div>
                        <div class="read-more">
                            <a :href="post._path" class="read-more">Read More &#8618;</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else>
            <Error404 />
        </div>
    </main>
    
</template>