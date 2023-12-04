<template>
    <main class="default-container">
        <ContentDoc>
            <template v-slot="{ doc }">
                <article>
                    <div class="post-header">
                        <h1>{{ doc.title }}</h1>
                    </div>
                    <ContentRenderer :value="doc" class="post-body" />
                </article>
            </template>
            <template #not-found>
                <Error404 />
            </template>
        </ContentDoc>
    </main>
</template>