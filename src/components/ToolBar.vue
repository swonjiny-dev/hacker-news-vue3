<template>
  <div>
      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="padding:2px">
          <tbody>
                <tr>
                    <td style="width:18px;padding-right:4px">
                            <a href="/">
                                <img src="../assets/y18.gif" width="18" height="18" style="border:1px white solid;">
                            </a>
                    </td>
                    <td style="line-height:12pt; height:10px;">
                        <span class="pagetop">
                            <a href="/"> <b class="hnname">Hacker News</b></a>
                            <router-link to="/news/1">News</router-link> | 
                            <router-link to="/newest">newest</router-link> | 
                            <router-link to="/ask">ask</router-link> | 
                            <router-link to="/show">show</router-link> | 
                            <router-link to="/jobs">jobs</router-link>
                        </span>
                    </td>
                </tr>
          </tbody>
      </table>

  </div>
</template>

<script>
export default {
    
}
</script >

<style scoped>
a:visited { color:#000000;}
a:visited.router-link-active{
    font-weight: bold;
    color: white
}
</style>