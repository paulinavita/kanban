<template>
  <div class="home">
    <section class="snow-bg"><MainHeader></MainHeader></section>

    <div class="container">
      <div class="row">
      <div v-for="(data,index) in taskLists" :key="index"  class="col-sm">
        <KanbanCard :data="data"></KanbanCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MainHeader from "@/components/MainHeader.vue";
import KanbanCard from "@/components/KanbanCard.vue";
import database from "../assets/config.js";

const tasks = [
  {
    name: "Backlog",
    data: []
  },
  {
    name: "To-Do",
    data: []
  },
  {
    name: "On-Going",
    data: []
  },
  {
    name: "Finished",
    data: []
  }
];
var leadsRef = database.ref("/");
leadsRef.on("value", function(snapshot) {
  tasks[0].data = [];
  tasks[1].data = [];
  tasks[2].data = [];
  tasks[3].data = [];
  snapshot.forEach(function(childSnapshot) {
    if (childSnapshot.val().status === "Backlog") {
      const obj = childSnapshot.val();
      obj.id = childSnapshot.key;
      tasks[0].data.push(obj);
    } else if (childSnapshot.val().status === "To-Do") {
      const obj = childSnapshot.val();
      obj.id = childSnapshot.key;
      tasks[1].data.push(obj);
    } else if (childSnapshot.val().status === "On-Going") {
      const obj = childSnapshot.val();
      obj.id = childSnapshot.key;
      tasks[2].data.push(obj);
    } else {
      const obj = childSnapshot.val();
      obj.id = childSnapshot.key;
      tasks[3].data.push(obj);
    }
  });
});

export default {
  name: "home",
  components: {
    MainHeader,
    KanbanCard
  },
  data: function() {
    return {
      taskLists: tasks
    };
  },
};
</script>

<style>


.snow-bg {
   display: block;
   z-index: 2;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   background-image: url('http://www.mcctours.com.my/wp-content/uploads/2018/01/sakura-1-1.png'), url('http://www.mcctours.com.my/wp-content/uploads/2018/01/sakura-2.png');
    animation: snow 10s linear infinite;
}

@keyframes snow {
 0% {background-position: 0px 0px, 0px 0px, 0px 0px;}
 50% {background-position: 500px 500px, 100px 200px, -100px 150px;}
 100% {background-position: 500px 1000px, 200px 400px, -100px 300px;}
}

@media (max-width: 768px) {
    .woocommerce ul.products li.product, 
    .woocommerce-page ul.products li.product, 
    .woocommerce-page[class*=columns-] ul.products li.product,
    .woocommerce[class*=columns-] ul.products li.product {
        width: 100%;
        float: left;
        clear: both;
        margin: 0 7em;
    }
}
</style>
