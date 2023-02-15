<script>
export default {
  middleware: ["auth"],
  asyncData({ redirect }) {
    redirect("/user/account/profile");
  },
};
</script>