<template>
  <div class="w-full h-full bg-yellow-100 py-1 text-xs overflow-auto ">
    <div class="w-1/3 h-full mx-auto bg-red-100 border-2 rounded border-double border-blue-400 min-w-min">
      <p class="text-center">注册</p>
      <validate-form @form-submit="onFormSubmit">
      <div class="mb-1">
        <label class="p-1">邮箱地址</label>
        <validate-input
          :rules="emailRules"
          v-model="formData.email"
          placeholder="请输入邮箱地址"
          type="text"
        />
      </div>
      <div class="mb-1">
        <label class="p-1">昵称</label>
        <validate-input
          :rules="nameRules"
          v-model="formData.nickName"
          placeholder="请输入昵称"
          type="text"
        />
      </div>
      <div class="mb-1">
        <label class="p-1">密码</label>
        <validate-input
          type="password"
          placeholder="请输入密码"
          :rules="passwordRules"
          v-model="formData.password"
        />
      </div>
      <div class="mb-1">
        <label class="form-label">重复密码</label>
        <validate-input
          type="password"
          placeholder="请再次密码"
          :rules="repeatPasswordRules"
          v-model="formData.repeatPassword"
        />
      </div>
      <template #submit>
        <button type="submit" class="w-11/12 h-5 bg-blue rounded text-white mx-auto block" >注册新用户</button>
      </template>
    </validate-form>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue'
import ValidateInput, { RulesProp } from '../components/ValidateInput.vue'
import ValidateForm from '../components/ValidateForm.vue'

export default defineComponent({
  name: 'Signup',
  components: {
    ValidateInput,
    ValidateForm
  },
  setup () {
    const formData = reactive({
      email: '',
      nickName: '',
      password: '',
      repeatPassword: ''
    })
    const emailRules: RulesProp = [
      { type: 'required', message: '电子邮箱地址不能为空' },
      { type: 'email', message: '请输入正确的电子邮箱格式' }
    ]
    const nameRules: RulesProp = [{ type: 'required', message: '昵称不能为空' }]
    const passwordRules: RulesProp = [
      { type: 'required', message: '密码不能为空' }
    ]
    const repeatPasswordRules: RulesProp = [
      { type: 'required', message: '重复密码不能为空' },
      {
        type: 'custom',
        validator: () => {
          return formData.password === formData.repeatPassword
        },
        message: '密码不相同'
      }
    ]
    const onFormSubmit = (result: boolean) => {
      alert('注册成功')
    }
    return {
      emailRules,
      nameRules,
      passwordRules,
      repeatPasswordRules,
      onFormSubmit,
      formData
    }
  }
})
</script>
<style>
 .bg-blue {
   background: rgb(25,137,250);
 }
</style>