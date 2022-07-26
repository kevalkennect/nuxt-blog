<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostFrom :post="loadedPost" />
    </section>
  </div>
</template>
<script>
import AdminPostFrom from "@/components/Admin/AdminPostForm";
export default {
  components: {
    AdminPostFrom,
  },
  data() {
    return {
      loadedPost: {
        thumbnail:
          "https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg",
        title: "Hello there!",
        author: "Keval Panchal",
        content: "This my first post!",
      },
    };
  },
};
</script>