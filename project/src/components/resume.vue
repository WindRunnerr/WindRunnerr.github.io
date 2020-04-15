<!-- 个人介绍 -->
<template>
    <div class="resume">
    </div>
</template>

<script>
  export default {
    name: "resume",
    components: {},
    data () {
      return {
      }
    },
    mounted () {
      this.utils.color16 = ''
    },
    methods: {
      singleClick (e) {
        // eslint-disable-next-line no-console
        console.log(e)
      },
      name () {

      }
    },
  }
</script>

<style lang="less" scoped>
    .resume {
        position: relative;
        /*background: url('../assets/train.jpg');*/
        /*background-size: 100% 100%;*/
        &:after {
            content: '';
            display: block;
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background: url('../assets/train.jpg');
            background-position: top left;
            background-size: 100% 100%;
            opacity: 0.3;
            pointer-events: none;
        }
    }
</style>