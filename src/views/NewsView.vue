<template>
  <table border="0" cellpadding="0" cellspacing="0" class="itemlist">
    <tbody>
      <template  v-for="(item, index) in fetchNews" >
        <main-list :key="`${item.id}main`" :item="item" :index="(index)+1"></main-list>
        <sub-list :key="`${item.id}sub`" :item="item"></sub-list>
      </template> 
      <tr><td colspan="2"></td><td class="title"><a :href="`/news/${nextPage}`" class="morelink" rel="next">More</a> </td></tr>
    </tbody>
  </table>
</template>

<script>
import { mapGetters } from 'vuex';
import MainList from "../components/MainList";
import SubList from "../components/SubList";

export default {
 /* eslint-disable*/
  created() {
    var page = this.$route.params.page;
    if(isNaN(page)===true){
      page = 1;
      this.$router.push('/news/1');
    }else{
      if(page < 1){
        this.$router.push('/news/1');
        page = 1;
      }
      else if(page >10){
        this.$router.push('/news/10');
        page = 10;
      }
    }
    this.$store.state.page = page;
    this.$store.dispatch('FETCH_NEWS' , page);
  },
  computed: {
    ...mapGetters([
      'fetchNews']),
      nextPage : function(){
        return Number.parseInt(this.$route.params.page)+Number.parseInt(1);
      }

  },
  components : {
    MainList,
    SubList,
  },
}
</script>

<style>

</style>