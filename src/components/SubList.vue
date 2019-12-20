<template>
    <tr>
        <td></td>
        <td class="subtext">
            <span class="score">{{item.points}} points</span>
             by
            <router-link to="`/user/${item.user}`"> {{item.user}} </router-link>
            <span class="age">
              <router-link to="`/item?id=${item.id}`"> {{item.time_ago}} </router-link>
            </span>
            |
            <a :href="`https://www.google.com/search?q=${item.title}`" target="_blank"> web </a>
            |
            <router-link to="`/item?id=${item.id}`"> discuss </router-link>
        </td>
    </tr>
</template>

<script>
export default {
    props : {
        item : {
            type : Object
        }
    }
}
</script>

<style>

</style>