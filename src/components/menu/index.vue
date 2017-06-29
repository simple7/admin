<template>
  <Menu  ref="menu" width="auto" :active-name="activeName" :open-names="openNames"
        @on-select="handleSelect">
    <template v-if="iconSize < 20 && !smallScreen" v-for="item in $t('menu')">
      <Submenu :name="item.group">
        <template slot="title">
          <Icon :type="item.icon" :size="iconSize"></Icon>
          <span class="layout-text">{{item.sub}}</span>
        </template>
        <template v-for="child in item.child">
          <Menu-item :name="child.path">{{child.name}}</Menu-item>
        </template>
      </Submenu>
    </template>
    <template v-else>
      <Dropdown :name=index class="drop-menu" placement="right-start">
        <Icon :type="item.icon" size="24"></Icon>
        <template v-for="child in item.child">
          <Dropdown-menu slot="list" class="child-list">
            <Dropdown-item>
              <router-link :to="child.path">{{child.name}}</router-link>
            </Dropdown-item>
          </Dropdown-menu>
        </template>
      </Dropdown>
    </template>
  </Menu>
</template>

<script>
  import Vue from 'vue'
  import {isSmallScreen} from '../../libs/utils.js'
  export default{
    name: 'ivuMenu',
    props: {
      iconSize: {
        type: Number,
        default: 14
      }
    },
    data(){
      return {
        activeName: '',
        openNames: [],
      }
    },
    watch:{
      iconSize:function(val,oldVal){
          if(val<20){
              let that = this;
              setTimeout(function(){
                that.update();
              },100)
          }
      }
    },
    computed: {
      smallScreen(){
        return isSmallScreen();
      }
    },
    created () {
      this.update();
    },
    methods: {
      handleSelect (name) {
        this.$router.push(name)
      },
      update (route) {
        const path = route ? route.path : this.$route.path;
        console.log(this.$route.path);
        const activeName = path.split('/')[1];
        const openName = activeName.substr(0, 1);
        this.$set(this, 'activeName', activeName)
        this.$set(this, 'openNames', [openName])

        this.$nextTick(() => {
          this.$refs.menu.updateActiveName()
          this.$refs.menu.$children.forEach((item) => {
            item.opened = false
          })
          this.$refs.menu.updateOpened()
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  /**
    * start
    * 修改默认样式
   */
  .ivu-menu-vertical.ivu-menu-light:after {
    width: 0;
  }

  .ivu-menu-light.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu) {
    border-right: none;
  }

  .ivu-menu-light.ivu-menu-vertical .ivu-menu-item {
    border-right: none;
  }

  /*
    end
  */
  .layout-hide-text {
    .layout-text {
      display: none;
    }
  }

  .drop-menu {
    position: relative;
    display: block;
    text-align: center;
    padding: 20px 0;
    cursor: pointer;
    &:hover {
      background: #f8f8f9;
    }
    .ivu-dropdown-item a {
      color: #495060;
    }
  }

  .child-list {
    z-index: 20;
  }
</style>
