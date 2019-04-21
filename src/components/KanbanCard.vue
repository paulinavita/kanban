<template>
  <div style="border-color:lightpink; border-style:dashed;" class="card">
    <h3 style="color:pink;"><img src="https://img.icons8.com/dusk/40/000000/rainbow.png">{{data.name}}<img style="transform: scale(-1,1);" src="https://img.icons8.com/dusk/40/000000/rainbow.png"> </h3>
    
    <ContentCard v-for="(item) in data.data" :key="item.id" :item="item" :name="data.name"></ContentCard>
  </div>
</template>

<script>
import ContentCard from "@/components/ContentCard.vue";
export default {
  name: "KanbanCard",
  components: {
    ContentCard
  },
  data: function() {
    return {};
  },
  props: ["data"],
  created() {
    this.cardTitle = this.title;
  }
};
</script>

<style scoped>

</style>
