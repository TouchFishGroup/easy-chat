<template>
  <div class="p-1">
    <input
      class="focus:outline-none focus:ring focus:border-blue-300 px-1 border-1 rounded border-black block mx-4"
      :class="{ 'text-red-500': inputRef.error }"
      id="exampleInputEmail1"
      @blur="validateInput"
      v-model="inputRef.val"
      v-bind="$attrs"
    />
    <!-- 删掉了:value="inputRef.val" -->
    <!--       @input="updateValue"
      用v-model代替
     -->
    <span v-if="inputRef.error" class="block text-red-500 mx-1 italic">*{{
      inputRef.message
    }}</span>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, PropType, reactive } from 'vue'
import { emitter } from './ValidateForm.vue'
const emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
interface RuleProp {
  type: 'required' | 'email' | 'custom'
  message: string
  validator?: () => boolean
}
export type RulesProp = RuleProp[]
export default defineComponent({
  props: {
    rules: Array as PropType<RulesProp>,
    modelValue: String
  },
  inheritAttrs: false,
  setup (props, context) {
    const inputRef = reactive({
      val: computed({
        get: () => props.modelValue || '',
        set: val => {
          context.emit('update:modelValue', val)
        }
      }),
      error: false,
      message: ''
    })
    // const updateValue = (e: KeyboardEvent) => {
    //   const targetValue = (e.target as HTMLInputElement).value
    //   inputRef.val = targetValue
    //   context.emit('update:modelValue', targetValue)
    // }
    const validateInput = () => {
      if (props.rules) {
        const allPassed = props.rules.every(rule => {
          let passed = true
          inputRef.message = rule.message
          switch (rule.type) {
            case 'required':
              passed = inputRef.val.trim() !== ''
              break
            case 'email':
              passed = emailReg.test(inputRef.val)
              break
            case 'custom':
              passed = rule.validator ? rule.validator() : true
              break
            default:
              break
          }
          return passed
        })
        inputRef.error = !allPassed
        return allPassed
      }
      return true
    }
    onMounted(() => {
      emitter.emit('form-item-created', validateInput)
    })
    return {
      inputRef,
      validateInput
      // updateValue
    }
  }
})
</script>

<style>
 .border-1 {
   border-width: 1px;
 }
</style>