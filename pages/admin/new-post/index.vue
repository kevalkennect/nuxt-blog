<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <AdminPostFrom @submit="onSubmitted" />
    </section>
  </div>
</template>

<script>
import AdminPostFrom from "@/components/Admin/AdminPostForm.vue";
import axios from "axios";
export default {
  components: {
    AdminPostFrom,
  },
  methods: {
    onSubmitted(postData) {
      axios
        .post(
          "https://nuxt-blog-5d708-default-rtdb.firebaseio.com/posts.json",
          postData
        )
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
