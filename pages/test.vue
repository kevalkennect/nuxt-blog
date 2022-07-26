<template>
  <div>
    <input type="text" v-model="inputDate" placeholder="Enter A Date" />
    <button @click="formatDate(inputDate)">Format Date</button>
    <div class="formatedDate" v-for="date in formatedDate" :key="date">
      {{ date }}
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {
      inputDate: "",
      formatFrom: [
        "DD/MM",
        "DD/MM/YYYY",
        "MM/YYYY",
        "YYYY",
        "MM",
        "DD",
        "YYYY/MM",
      ],
      formatedDate: [],
    };
  },
  methods: {
    formatDate(date) {
      if (date == "" || null || undefined) return;
      this.formatedDate = [];
      for (let i of this.formatFrom) {
        this.formatedDate.push(moment(date).format(i));
      }
    },
  },
};
</script>

<style>
</style>