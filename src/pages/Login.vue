<template>
  <div class="login" id="login">
    <div class="login-group">
      <div class="login-title">
        <span class="welfare">Welfare</span>
        <span class="ark">Ark</span>
      </div>
      <Card class="login-card" dis-hover>
        <p slot="title" class="second-title">{{ $t('title') }}</p>
        <Form ref="loginForm" :model="loginWords" :rules="loginRules">
          <Form-item prop="username">
            <Input type="text" v-model="loginWords.username" :placeholder="$t('username')">
            <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
          </Form-item>
          <Form-item prop="password">
            <Input type="password" v-model="loginWords.password" :placeholder="$t('password')">
            <Icon type="ios-locked-outline" slot="prepend"></Icon>
            </Input>
          </Form-item>
          <Form-item class="login-btn-group">
            <Checkbox v-model="single" class="rem-password">{{ $t('remPassword') }}</Checkbox>
            <Button type="primary" class="login-btn" @click="handleSubmit('loginForm')">{{ $t('login') }}</Button>
          </Form-item>
          <Form-item class="forget-password">
            <a>{{ $t('forgetPassword') }}</a>
          </Form-item>
        </Form>
      </Card>
    </div>
    <canvas id="canvas"></canvas>
  </div>
</template>

<script>
  import {setCookie, getCookie} from '../libs/cookie.js'
  import draw from '../components/cavans/logincanvas'
  export default {
    data () {
      return {
        single: false,
        loginWords: {
          username: '',
          password: '',
        },
        loginRules: {
          username: [
            {required: true, message: '请填写用户名', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请填写密码', trigger: 'blur'},
            {type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur'}
          ]
        }
      }
    },
    mounted(){
      // 渲染canvas
      const WIDTH = document.body.clientWidth - 20,
        HEIGHT = document.body.clientHeight - 10,
        POINT = 30;
      let canvas = document.getElementById('canvas');
      draw(canvas, WIDTH, HEIGHT, POINT);
      // 如果存在username的cookie 则跳转到主页，不需要登陆
      if (getCookie('username')) {
        this.$router.push('/index')
      }
    },
    methods: {
      handleSubmit(name) {
        console.log(this.loginWords.username, this.loginWords.password)
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.success('提交成功!');
            setCookie('username', 'test', 1000 * 60)
            this.$router.push('index')
          } else {
            this.$Message.error('表单验证失败!');
            //setCookie('username', 'test', 1000 * 60)
            //this.$router.push('index')
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../style/common";

  .login {
    position: absolute;
    width: 100%;
    height: 100%;
    min-height: 500px;
    text-align: center;
    background-color: $login-back;
    .login-group {
      position: absolute;
      top: 40%;
      left: 50%;
      -webkit-transform: translate(-50%, -50%);
      -moz-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      -o-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      width: 360px;
      height: 360px;
      .login-title{
        margin-bottom: 20px;
      }
      .welfare{
        font-size: 30px;
        font-weight: 700;
      }
      .ark{
        margin-left: 5px;
        font-size: 30px;
      }
      .second-title{
        font-size: 15px;
      }
      .login-card {
        background: #fff;
      }
      .login-btn-group{
        margin-bottom: 0;
        .rem-password{
          float: left;
        }
        .login-btn{
          float: right;
        }
      }
      .forget-password{
        margin-bottom: 0;
        text-align: left;
      }
    }
  }

</style>
