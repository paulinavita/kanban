<template>
  <div class="main-header">
    <h1 style="color:pink; margin-top:22px">
      <img src="https://img.icons8.com/dusk/64/000000/unicorn.png">Paulina's Kanban
      <img src="https://img.icons8.com/dusk/64/000000/ice-cream-pink-cone.png">
    </h1>
    <input style="height:26px;" type="text" placeholder="Be productive!" v-model="taskName">
    <input
      style="background-color:pink; border:none; margin-left:5px;"
      type="submit"
      value="Yay!"
      @click="pushDb"
    >
    <div class="dropdown-divider"></div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import database from "../assets/config.js";

export default {
  name: "MainHeader",
  data() {
    return {
      taskName: ""
    };
  },
  methods: {
    pushDb() {
      if (this.taskName == "") {
        Swal.fire("Oops... Field cannot be empty!");
      } else {
        database.ref("/").push({
          title: this.taskName,
          status: "Backlog"
        });
        this.taskName = "";
      }
    }
  }
};
</script>

<style>
.swal2-confirm swal2-styled {
  background-color: pink !important;
}
.sweet-alert button.cancel{
  background-color: pink !important;
  color: pink !important;
}
.swal2-styled.swal2-confirm {
    border: 0 !important;
    border-radius: .25em;
    background-color: pink !important;
    color: #fff;
    font-size: 1.0625em;
}
</style>
