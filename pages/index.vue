<script setup>
const { data } = await useAsyncData('', () => queryContent('/essays').sort({'date': -1}).find())
</script>

<template>
    <title>SI 339 Final Project | Simple CMS</title>
    <main class="default-container">
        <h1>Select Essays</h1>
        <p>This is a website to demonstrate a rudimentary blog Content Management System. Below are select essays from my highschool days. Yes, I took some pretty awesome classes.</p>
        <hr>
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
    </main>
    
</template>