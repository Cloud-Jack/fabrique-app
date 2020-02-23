<template>
  <div class="quests-page">
    <!--tabs block-->
    <div class="quests-page__tabs flx">
      <div
        v-for="(tab, index) in tabs"
        :key="index"
        :class="{active: tab.state}"
        class="quests-page__tab"
        @click="changeTab(index)"
      >
        {{ tab.name }}
      </div>
    </div>

    <!--tabs content-->
    <div class="quests-page__content">
      <Respondents v-if="currentTab === 'respondents'"></Respondents>
      <AnotherTab v-if="currentTab !== 'respondents'"></AnotherTab>
    </div>

  </div>
</template>

<script>
import Respondents from '~/components/quests/Respondents.vue'
import AnotherTab from '~/components/quests/AnotherTab.vue'

export default {
  name: 'QuestsPage',
  components: {
    Respondents,
    AnotherTab
  },
  data() {
    return {
      tabs: [
        { name: 'Параметры', value: 'params', state: false },
        { name: 'Вопросы', value: 'questions', state: false },
        { name: 'Логика', value: 'logic', state: false },
        { name: 'Условия', value: 'conditions', state: false },
        { name: 'Респонденты', value: 'respondents', state: true }
      ],
      currentTab: 'respondents'
    }
  },
  methods: {
    changeTab(index) {
      for(let tab of this.tabs) {
        tab.state = false
      }
      this.tabs[index].state = true
      this.currentTab = this.tabs[index].value
    }
  }
}
</script>

<style lang="sass">
.quests-page
  &__tabs
    max-width: 1000px
    margin: 0 auto
  &__tab
    font-size: 18px
    border-bottom: 4px solid transparent
    padding: 15px 30px
    width: 180px
    cursor: pointer
  &__tab.active
    border-bottom: 4px solid #E1EEB7
    font-weight: 700
  &__content
    border-top: 1px solid #E1EEB7
    max-width: 1000px
    margin: 0 auto
    box-shadow: 0px 10px 29px -7px rgba(0,0,0,0.1)
    min-height: 400px

</style>
