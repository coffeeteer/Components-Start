<template>
  <div>
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
          <li class="list-group-item" v-for="index in 5" :key="index.id">Server #{{ index }}</li>
        </ul>
      </div>
      <server-deatails></server-deatails>
    </div>
    <hr>
  </div>
</template>
<script>
import ServerDetails from "./ServerDetails.vue";
export default {
  components: {
    "server-deatails": ServerDetails
  }
};
</script>
