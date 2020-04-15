<template>
    <div class="hooks">
        <div class="sh-hooks">
            <div class="l1"></div>
            <div class="l2"></div>
            <div class="round" :style="{background: $utils.color16()}"></div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "hooks"
  }
</script>

<style lang="less" scoped>
    .hooks {
        text-align: center;
        position: relative;
        .sh-hooks {
            width: 50px;
            height: 50px;
            position: relative;
            display: inline-block;
            .round {
                width: 14px;
                height: 14px;
                background: red;
                position: absolute;
                top: 15px;
                left: 18px;
                border-radius: 100%;
                opacity: 1;
                &:before {
                    content: '';
                    width: 3px;
                    height: 3px;
                    border-radius: 100%;
                    background: #ffffff;
                    position: absolute;
                    left: 3.5px;
                    top: 3.5px;
                }
            }
            .l1 {
                width: 100%;
                height: 1px;
                background: rgba(00,00,00,.3);
                position: absolute;
                left: 18px;
                bottom: 10px;
                transform: rotate(45deg)
            }
            .l2 {
                width: 100%;
                height: 1px;
                background: rgba(00,00,00,.3);
                position: absolute;
                left: -18px;
                bottom: 10px;
                transform: rotate(-45deg)
            }
        }
    }
</style>