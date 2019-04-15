<template>
  <div class="blog-Index">
    <!--<transition-->
    <!--name="rotate"-->
    <!--enter-active-class="rotateInDownLeft"-->
    <!--leave-active-class="rotateOutDownRight"-->
    <!--&gt;-->
    <!--</transition>-->
    <div class="blog-title">
      {{ main_title }}
    </div>
    <div class="blog-nav">
      <div class="nav">
        <ul>
          <li>index</li>
          <li>index</li>
          <li>index</li>
          <li>index</li>
        </ul>
      </div>
    </div>
    <!-- 瀑布流开始 -->
    <water-fall></water-fall>
  </div>
</template>

<script>
  import waterFall from './childComponents/waterFall'
  export default {
    name: "index.vue",
    components: { waterFall },
    data() {
      return {
        main_title: '正是江南好风景,落花时节又逢君'
      }
    }
  }
</script>

<style lang="less" scoped>
  .blog-Index {
    .blog-title {
      background: #a8a8aa;
      height: 40px;
      line-height: 40px;
      text-align: center;
      color: #ffffff;
    }
    .blog-nav {
      height: 44px;
      line-height: 44px;
      background: rgba(45, 45, 45, 0.98);
      .nav {
        max-width: 1100px;
        min-width: 600px;
        margin: 0 auto;
        text-align: center;
        ul {
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          justify-content: space-between;
          color: #ffffff;
          li {
            cursor: pointer;
          }
        }
      }
    }
  }
</style>
