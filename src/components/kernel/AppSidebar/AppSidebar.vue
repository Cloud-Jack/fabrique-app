<template>
  <div class="app-sidebar">
    <router-link class="app-sidebar__link home" to="/"></router-link>
    <router-link
      class="app-sidebar__link flx flx-justify-between flx-dir-column"
      :class="{active: $route.name === item.value}"
      v-for="(item, index) in links"
      :key="index"
      :to="item.link"
    >
      <img :src="item.image" alt="route-image">
      <span>{{ item.name }}</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "AppSidebar",
  data() {
    return {
      links: [
        {name: 'Опросы', link: '/quests', image: require("~/assets/imgs/clipboards.png"), value: 'quests'},
        {name: 'Пользователи', link: '/users', image: require("~/assets/imgs/user.png"), value: 'users'},
        {name: 'Черные списки', link: '/black-lists', image: require("~/assets/imgs/flag.png"), value: 'black-lists'},
        {name: 'Колл-центр', link: '/call-center', image: require("~/assets/imgs/call.png"), value: 'call-center'}
      ]
    }
  }
}
</script>

<style lang="sass">
  .app-sidebar
    &__link
      width: 150px
      height: 110px
      border-radius: 10px
      margin-bottom: 10px
      border: 2px solid transparent
      padding: 15px 10px
      &:hover
        border: 2px solid #E1EEB7
        color: #E1EEB7
        span, img
          color: #E1EEB7
      img
        height: 40px
    &__link.active
      background: #F7F7F7
      font-weight: bold
    &__link.home
      background: #E62101
      border-radius: 50%
      width: 40px
      height: 40px
      display: inline-block
      margin-bottom: 40px



</style>
