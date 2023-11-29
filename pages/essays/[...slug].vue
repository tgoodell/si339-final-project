<script setup>

</script>

<template>
    <ContentDoc>
    <template v-slot="{ doc }">
      <article>
        <div class="post-header">
          <h1>{{ doc.title }}</h1>
          <DateParser :rawDate="doc.date" />
        </div>
        <hr>
        <ContentRenderer :value="doc" class="post-body" />
        <TagCards :tags="doc.tags" style="text-align: center" />
      </article>
    </template>
    <template #not-found>
      <Error404 />
    </template>
  </ContentDoc>
</template>