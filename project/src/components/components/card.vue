<template>
    <div class="sh-card-wrapper" @click="cardClick">
        <hooks></hooks>
        <div class="sh-card"
            :style="cardStyle"
        >
            <h3>{{cardData.title}}</h3>
            <div class="content-wrapper">
                <p v-for="(p, index) in cardData.bodys" :key="index"
                   :style="{
                   textAlign: cardData.align,
                   textIndent: cardData.align === 'left' ? '2em' : '0'
                   }">
                    {{p}}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    import hooks from "./hooks";
  export default {
    name: "card",
    props: {
      type: {
        type: String,
        default: 'list'
      },
      cardData: {
        type: Object,
        default: () => ({title: '', bodys: []})
      }
    },
    methods: {
      cardClick () {
        this.$emit('changeStartIndex')
      }
    },
    computed: {
      cardStyle () {
        return this.type === 'list' ? {
          maxHeight: '400px',
          maxWidth: '400px',
          overflow: 'hidden'
        } : {
          height: '800px',
          width: '950px',
          overflow: 'hidden'
        }
      }
    },
    components: { hooks }
  }
</script>

<style lang="less" scoped>
    .sh-card-wrapper {
        transition: all 0.6s;
        margin: 20px;
        display: inline-block;
        vertical-align: middle;
        .sh-card {
            display: inline-block;
            /*width: 400px;*/
            /*height: 150px;*/
            position: relative;
            color: #333333;
            border-radius: 10px;
            /*border: 1px solid rgba(00,00,00,.3);*/
            box-shadow: 0px 15px 15px 0px rgba(00,00,00,.3);
            background: rgba(256,256,256,.9);
            display: flex;
            flex-direction: column;
            h3 {
                line-height: 64px;
            }
            .content-wrapper {
                flex-grow: 1;
                overflow: auto;
                /*text-align: left;*/
                /*text-indent: 2em;*/
                padding: 0 2em 2em;
            }
        }
    }
</style>