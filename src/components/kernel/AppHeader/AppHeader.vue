<template>
  <div class="app-header flx flx-dir-column w100">

    <div class="top-row w100 flx flx-justify-between">
      <input
        class="ui-kit__text-input"
        placeholder="Поиск по системе"
        type="text"
      >
      <div class="user-info flx">
        <img class="user-info__img" :src="user.img" alt="user photo">
        <div class="flx flx-dir-column flx-align-start ml2">
          <span class="user-info__name fs-16 font-weight-700 ">{{ user.name }}</span>
          <span class="user-info__role clr-light fs-14">{{ user.role }}</span>
        </div>
      </div>
    </div>

    <div class="bottom-row"></div>

  </div>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {
      user: { name: 'Alexander C.', img: require("~/assets/imgs/user.png"), role: 'Administrator'}
    }
  }
}
</script>

<style lang="sass">
.app-header
  padding: 30px 50px 10px
  .user-info
    &__img
      width: 30px
      height: 30px
    &__name

</style>
