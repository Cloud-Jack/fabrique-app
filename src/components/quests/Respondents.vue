<template>
  <div class="quests-page__respondents">
    <h4>Добавить опрос</h4>

    <template v-if="questList.length">
      <ConditionForm
        v-for="(item, index) in questList"
        :key="item.time"
        :count="index"
        :options="options"
        :blocked="blocked"
        @set="updateOptions"
        @set-part="updateForm"
        @delete="removeForm"
      />
    </template>

    <div
      @click="addNewForm"
      class="add-new clr-green-norm">
      Нажмите чтобы добавить новые условия выборки. Все условия связываются между собой логическим И
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import ConditionForm from '~/components/quests/ConditionForm.vue'

export default {
  name: "Respondents",
  components: {
    ConditionForm
  },
  data() {
    return {
      count: {value: 0, time: Date.now() },
      questList: [],
      options: [
        {value: 'none', label: 'Выберите условие'},
        {value: 'age', label: 'Возраст респондента'},
        {value: 'card_type', label: 'Тип карты лояльности'},
        {value: 'card_status', label: 'Статус карты лояльности'},
      ],
      blocked: [],
      form: {}
    }
  },
  methods: {
    addNewForm() {
      this.questList.push(this.count)
      this.count = {value: this.count.value++, time: Date.now() }
    },
    removeForm(index, value) {
      this.questList.splice(index, 1)
      this.blocked = this.blocked.filter(el => el !== value)
      delete this.form[value]
    },
    updateOptions(data) {
      this.blocked.push(data.value)
    },
    updateForm(data) {
      this.form[data.key] = data.value
      console.log(this.form);
    },
    sendForm() {
      axios.post('http://...', {
        data: this.form
      })
    }
  }
}
</script>

<style lang="sass">
.quests-page__respondents
  padding: 0 0 30px
  .add-new
    border: 1px solid lightgray
    width: 80%
    margin: 20px auto
    padding: 20px
    border-radius: 10px
    cursor: pointer
</style>