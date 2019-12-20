<template>
  <div id="app">
    <center>
      <table id="hnmain" border="0" cellpadding="0" cellspacing="0" width="85%" bgcolor="#f6f6ef">
        <tbody>
          <tr>
              <td bgcolor="#ff6600">
                <tool-bar></tool-bar>
              </td>
          </tr>
          <tr id="pagespace" title="Ask" style="height:10px"></tr>
          <tr>
            <td>
              <transition name="fade">
              <router-view></router-view>
              </transition>
            </td>
          </tr>
          
        </tbody>
      </table>
    </center>
  </div>
</template>

<script>
import ToolBar from "./components/ToolBar";
export default {
  name: 'app',
  components : {
    ToolBar
  }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
