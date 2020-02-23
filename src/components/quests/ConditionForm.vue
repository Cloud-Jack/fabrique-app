<template>
  <div class="quests-page__condition-form">

    <div class="title-row flx w100 mb4">
      <div class="left-side font-weight-700 fs-18">Условие {{ count + 1 }}</div>
      <div class="right-side">
        <v-select
          v-model="selected"
          :options="options"
          :selectable="option => !blocked.includes(option.value)"
          @input="conditionChanged"
        ></v-select>
      </div>
    </div>

    <div class="content-row flx w100">

      <div v-if="selected.value === 'age'" class="age-form flx flx-dir-column w100">
        <div class="flx w100">
          <div class="left-side">Диапазон 1</div>
          <div class="right-side">
            от <input min="0" max="150" type="number" class="ui-kit__text-input" v-model.number="form.age.first.from" @input="setFormPart(selected.value)">
            до <input min="0" max="150" type="number" class="ui-kit__text-input" v-model.number="form.age.first.to" @input="setFormPart(selected.value)">
          </div>
        </div>
        <div class="flx w100">
          <div class="left-side">Диапазон 2</div>
          <div class="right-side">
            от <input min="0" max="150" type="number" class="ui-kit__text-input" v-model.number="form.age.second.from" @input="setFormPart(selected.value)">
            до <input min="0" max="150" type="number" class="ui-kit__text-input" v-model.number="form.age.second.to" @input="setFormPart(selected.value)">
          </div>
        </div>
        <div class="flx w100 flx-justify-end">
          <button @click="$emit('delete', count, selected.value)" class="ui-kit__button ui-kit__button--delete">Удалить условие</button>
        </div>
      </div>

      <div v-if="selected.value === 'card_type'" class="card_type-form flx w100 flx-dir-column">
        <div class="flx w100 ma3">
          <div class="left-side">Тип 1</div>
          <div class="right-side">
            <v-select
              v-model="form.card_type"
              :options="cardTypeOptions"
              @input="setFormPart(selected.value)"
            ></v-select>
          </div>
        </div>
        <div class="flx w100 flx-justify-end">
          <button @click="$emit('delete', count, selected.value)" class="ui-kit__button ui-kit__button--delete">Удалить условие</button>
        </div>
      </div>

      <div v-if="selected.value === 'card_status'" class="card_status-form flx w100 flx-dir-column">
        <div class="flx w100 ma3">
          <div class="left-side">Статус 1</div>
          <div class="right-side">
            <v-select
              v-model="form.card_status"
              :options="cardStatusOptions"
              @input="setFormPart(selected.value)"
            ></v-select>
          </div>
        </div>
        <div class="flx w100 flx-justify-end">
          <button @click="$emit('delete', count, selected.value)" class="ui-kit__button ui-kit__button--delete">Удалить условие</button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "ConditionForm",
  props: {
    count: {
      type: Number,
      default: 0
    },
    options: {
      type: Array,
      default: () => []
    },
    blocked: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      selected: {value: 'none', label: 'Выберите условие'},
      form: {
        age: {
          first: { from: '', to: ''},
          second: { from: '', to: ''}
        },
        card_type: {value: 'none', label: 'Выберите тип'},
        card_status: {value: 'none', label: 'Выберите ствтус'},
      },
      cardTypeOptions: [
        {value: 'none', label: 'Выберите тип'},
        {value: 'gold', label: 'Gold'},
        {value: 'silver', label: 'Silver'},
      ],
      cardStatusOptions: [
        {value: 'none', label: 'Выберите тип'},
        {value: 'active', label: 'Active'},
        {value: 'not_active', label: 'Not active'},
      ]
    }
  },
  methods: {
    conditionChanged(val) {
      this.$emit('set', val)
    },
    setFormPart(value) {
      this.$emit('set-part', {key: value, value: this.form[value]})
    }
  }
}
</script>

<style lang="sass">
.quests-page__condition-form
  padding: 10px 35px 25px
  .left-side
    width: 30%
    text-align: left
  .right-side
    width: 70%
    display: flex
    justify-content: flex-start
    align-items: center
  .v-select
    width: 100%
  .content-row
    .age-form
      .ui-kit__text-input
        width: 100px
        margin: 10px
</style>