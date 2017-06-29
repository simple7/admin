<template>
  <div id="app">
    <Row class="header" :class="{'layout-hide-text': spanLeft < 4}">
      <Col :span="spanLeft" class="header-left">
      <div class="header-left-logo">
        <span class="layout-text">Welfare</span>
        <b>Ark</b>
      </div>
      </Col>
      <Col :span="spanRight" class="header-right">
      <div class="header-content clearfix">
        <Button type="text" @click="toggleClick" class="header-toggle">
          <Icon type="navicon" size="32"></Icon>
        </Button>
        <Button type="text" @click="logout" class="logout">
          <Icon type="log-out" size="22"></Icon>
        </Button>
        <Dropdown  class="user-center" placement="bottom">
          <Button type="text">
            <Icon type="person" size="24"></Icon>
          </Button>
          <Dropdown-menu slot="list">
            <template v-for="item in $t('userMenu')">
              <Dropdown-item>{{item.name}}</Dropdown-item>
            </template>
          </Dropdown-menu>
        </Dropdown>
        <Select v-model="lang" size="small" class='change-language'>
          <Option v-for="item in languageConfig" :value="item.locale" :key="item">{{ item.name }}</Option>
        </Select>
      </div>
      </Col>
    </Row>
    <Row class="content" :class="{'layout-hide-text': spanLeft < 4}">
      <Col :span="spanLeft" class="content-menu">
        <ivu-menu :iconSize="iconSize"></ivu-menu>
      </Col>
      <Col :span="spanRight" class="content-right" :offset="spanLeft">
      <div class="layout-breadcrumb">
        <breadcrumbs></breadcrumbs>
      </div>
      <div class="layout-content">
        <div class="children-content">
          <router-view></router-view>
        </div>
      </div>
      <div class="layout-footer">
        <span>2017 &copy; 上海承泰信息技术股份有限公司</span>
      </div>
      </Col>

    </Row>
  </div>
</template>
<script>
  import Vue from 'vue'
  import ivuMenu from '@/components/menu/index'
  import language from '@/config/languageconfig'
  import {delCookie} from '../libs/cookie'
  export default {
    components: {ivuMenu},
    data () {
      return {
        spanLeft: 4,
        spanRight: 20,
        activeName: '',
        openNames: [],
        languageConfig: language.config,
        lang: window.localStorage.getItem('language') || 'zh-CN'
      }
    },
    computed: {
      iconSize () {
        return this.spanLeft === 4 ? 14 : 24;
      }
    },
    watch:{
      lang(val){
        window.localStorage.setItem('language',val);
        Vue.config.lang = val;
        console.log(this.$route.matched)
        console.log(this.$route.name)
      }
    },
    methods: {
      toggleClick () {
        if (this.spanLeft === 4) {
          this.spanLeft = 1;
          this.spanRight = 23;
        } else {
          this.spanLeft = 4;
          this.spanRight = 20;
        }
      },
      logout() {
        delCookie('username');
        this.$router.push('login');
      }
    }
  }
</script>
<style lang="scss" scoped>
  $head-height: 60px;
  $breadcrumb-height: 50px;
  #app {
    height: 100%;
    background: #fff;
  }

  /*
    头部样式
  */

  .header {
    position: fixed;
    top: 0;
    width: 100%;
    height: $head-height;
    z-index: 30;
    background: #2b70eb;
    .header-left, .header-right {
      height: $head-height;
      color: #fff;
    }
    .header-left-logo {
      text-align: center;
      font-size: 20px;
      line-height: $head-height;
      vertical-align: middle;
      background: #2b70eb;
    }
    .header-content{
      height: 100%;
      padding-top: 8px;
    }
    .header-toggle{
      float: left;
      color: #fff;
    }
    .user-center{
      float: right;
      button{
        height: 48px;
        color: #fff;
      }
    }
    .logout{
      float: right;
      margin-right: 30px;
      color: #fff;
      height: 50px;
    }
    .change-language{
      float: right;
      margin: 12px 20px 0 0;
      width: 80px;
    }
  }
  /**
    正文样式
   */
  .content {
    padding-top: $head-height;
    min-height: calc(100% - 60px);
    .layout-breadcrumb {
      position: fixed;
      top: $head-height;
      width: 100%;
      height: $breadcrumb-height;
      line-height: 50px;
      padding: 0 15px;
      z-index: 10;
      background: #fff;
      box-shadow: 0 1px 1px 0 rgba(0, 0, 0, .1);
      .page-breadcrumb li{
        display: inline !important;
      }
    }
    .content-menu {
      position: fixed;
      left: 0;
      top: $head-height;
      bottom: 0;
      background: #fff;
      border-right: 1px solid #d7dde4;
      z-index: 20;
    }
    .content-right {
      position: absolute;
      min-height: 100%;
      .layout-content {
        margin-top: $breadcrumb-height;
        padding: 20px 15px 90px;
        min-height: 200px;
        background: #fff;
      }
      .layout-footer {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 50px;
        line-height: 50px;
        text-align: center;
        color: #9ea7b4;
        font-size: 12px;
        border-bottom: 1px solid #e9eaec;
        background: #f8f8f9;
      }
    }
  }



  .layout-ceiling-main a {
    color: #9ba7b5;
  }

  .layout-hide-text .layout-text {
    display: none;
  }

  .ivu-col {
    transition: width .2s ease-in-out;
  }
</style>
