<template>
    <div id="app">
      <main id="page-wrap">
        <transition
                name="custom-classes-transition"
                :duration="{ enter: 10, leave: 400 }"
                enter-active-class="animated slideInLeft"
                leave-active-class="animated slideOutRight"
        >
        <keep-alive>
          <router-view class="pw-rv" />
        </keep-alive>
        </transition>
      </main>
      <ScaleRotate>
        <p class="nv-p" @click="$router.push('/')">
          <span>Home</span>
        </p>
        <p class="nv-p" @click="$router.push('/resume')">
          <span>Resume</span>
        </p>
      </ScaleRotate>
    </div>
</template>

<script>
  import {ScaleRotate} from 'vue-burger-menu'

  export default {
    name: 'app',
    components: { ScaleRotate },
    methods: {
      routerPush (tar) {
        alert(tar)
      }
    },
    mounted () {
    }
  }
</script>

<style lang="less">
    * {
        margin: 0;
        padding: 0;
    }
    div {
      box-sizing: border-box;
    }
    html {
      height: 100%;
      min-width: 1200px;
      body {
        height: 100%;
      }
    }
    .pw-rv {
      height: 100%;
      background: rgba(123,123,123,.1);
    }
    #app {
      height: 100%;
      .nv-p {
        cursor: pointer;
      }
    }
    a {
      color: #4e4a46;
      text-decoration: none;
      &:hover,
      &:focus {
        color: #c94e50;
      }
    }
    #page-wrap {
      height: 100%;
    }
    main {
      height: 100%;
      text-align: center;
      background: rgba(123,123,123,.1);
      overflow: auto;
    }
</style>
