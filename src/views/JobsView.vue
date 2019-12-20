<template>
  <table border="0" cellpadding="0" cellspacing="0" class="itemlist">
    <tbody>
      <template  v-for="(item, index) in fetchJobs" >
        <main-list :key="`${item.id}main`" :item="item" :index="index+1"></main-list>
        <sub-list :key="`${item.id}sub`" :item="item"></sub-list>
      </template> 
      <tr><td colspan="2"></td><td class="title"><a href="newest?next=21840767&amp;n=31" class="morelink" rel="next">More</a></td></tr>
    </tbody>
  </table>
</template>

<script>
import { mapGetters } from 'vuex';
import MainList from "../components/MainList";
import SubList from "../components/SubList";
export default {
  created() {
    this.$store.dispatch('FETCH_JOBS');
  },

  computed: {
    ...mapGetters(['fetchJobs'])
  },
  components : {
    MainList,
    SubList,
  }
}
</script>

<style>

</style>