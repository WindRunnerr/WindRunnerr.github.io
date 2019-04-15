<template>
  <div class="waterfall-starts">
    <div class="column">
      <div class="item">
        <div class="item--large"></div>
        <div class="item--small"></div>
        <div class="item--middle"></div>
        <div class="item--small"></div>
        <div class="item--large"></div>
        <div class="item--small"></div>
      </div>
    </div>
    <div class="column">
      <div class="item">
        <div class="item--small"></div>
        <div class="item--large"></div>
        <div class="item--middle"></div>
        <div class="item--large"></div>
        <div class="item--large"></div>
        <div class="item--small"></div>
        <div class="item--small"></div>
      </div>
    </div>
    <div class="column">
      <div class="item">
        <div class="item--middle"></div>
        <div class="item--small"></div>
        <div class="item--large"></div>
        <div class="item--middle"></div>
        <div class="item--large"></div>
        <div class="item--middle"></div>
      </div>
    </div>
    <div class="column">
      <div class="item">
        <div class="item--large"></div>
        <div class="item--small"></div>
        <div class="item--middle"></div>
        <div class="item--small"></div>
        <div class="item--large"></div>
        <div class="item--small"></div>
      </div>
    </div>
    <div class="column">
      <div class="item">
        <div class="item--small"></div>
        <div class="item--large"></div>
        <div class="item--middle"></div>
        <div class="item--small"></div>
        <div class="item--large"></div>
        <div class="item--small"></div>
        <div class="item--small"></div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "waterFall"
    }
</script>

<style lang="less" scoped>
  .waterfall-starts {
    display: flex;
    flex-flow: column wrap;
  }

  @media only screen and (min-width: 500px) {
    .waterfall-starts {
      flex-direction: row;
    }
  }
  .column {
    display: flex;
    flex-flow: column wrap;
    width: 100%;
  .item {
    box-sizing: border-box;
    padding: 10px;
    counter-increment: item-counter;
  &--large {
     min-height: 260px;
     background: aliceblue;
   }
  &--middle {
     min-height: 180px;
     background: beige;
   }
  &--small {
     min-height: 100px;
     background: palevioletred;
   }
  }
  }
  @media only screen and (min-width: 500px) {
    .column {
      width: calc(100% / 5);
    }
  }
</style>
