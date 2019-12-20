<template>
  <tr >
    <td align="right" valign="top" class="title">
        <span class="rank">{{rowNum}} . </span>
        </td>
        <td class="title">
            <a :href="`${item.url}`" rel="nofollow" class="storylink"  >{{item.title}}</a>
            <span class="sitebit comhead"> (<span class="sitestr">{{item.domain}}</span>)</span>
        </td>
  </tr>
</template>

<script>
export default {
    props : {
        item : {
            type : Object
        },
        index : {
            type : Number
        }
    },
    data() {
        return {
            rowNum : (this.$store.state.page-1) * 30 + this.$props.index
        }
    },
}
</script>

<style>

</style>