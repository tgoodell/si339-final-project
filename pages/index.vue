<script setup>
const { data } = await useAsyncData('', () => queryContent('/essays').sort({'date': -1}).find())
</script>

<template>
    <main class="default-container">
        <h1>Select Essays</h1>
        <div>
            <div v-for="post in data" class="post-preview">
                <h2><a :href="post._path">{{ post.title }}</a></h2>
                <DateParser :rawDate="post.date" />
                <ContentRenderer :value="post" :excerpt="true" />

                <div class="more-and-tags">
                    <!-- <div style="text-align: left;">
                        <TagCards :tags="post.tags" />
                    </div> -->
                    <div style="text-align: right">
                        <a :href="post._path" class="read-more">Read More &#8618;</a>
                    </div>
                </div>
            </div>
        </div>
    </main>
    
</template>