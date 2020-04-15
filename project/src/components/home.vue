<template>
    <div class="home">
        <transition-group
                name="custom-classes-transition"
                :duration="{ enter: 10, leave: 400 }"
                enter-active-class="animated rotateIn"
                leave-active-class="animated rotateOut"
        >
            <card
                    v-for="(item, index) in listData"
                    :key="item.title"
                    :card-data="item"
                    @changeStartIndex="changeStartIndex(index)"
            ></card>
        </transition-group>
        <div id="modalBox" v-if="dialogCardVisible" @click.self="dialogCardVisible = false">
            <Carousel3d
                    style="text-align: center"
                    :startIndex="startIndex"
                    :width="1000"
                    :height="900"
            >
                <Slide :index="index"
                       v-for="(item, index) in listData"
                       :key="index"
                >
                    <card type="card" :card-data="item"></card>
                </Slide>
            </Carousel3d>
            <i class="el-icon-close close" @click="dialogCardVisible = false"></i>
        </div>
    </div>
</template>

<script>
  import card from "./components/card";
  import {Carousel3d, Slide} from 'vue-carousel-3d';
  import {listData} from "../data/homeData";

  export default {
    name: "home",
    components: {card, Carousel3d, Slide},
    data () {
      return {
        dialogCardVisible: false,
        screenWidth: 0,
        screenHeight: 0,
        listData: listData.reverse(),
        startIndex: 0
      }
    },
    mounted () {
      // eslint-disable-next-line no-console
      console.log(listData)
      window.hehe = this
    },
    methods: {
      changeStartIndex (index) {
        // eslint-disable-next-line no-console
        console.log(111)
        this.startIndex = index
        this.dialogCardVisible = true
      }
    }
  }

</script>

<style lang="less">
    .home {

        .carousel-3d-slide {
            text-align: center !important;
            border: none !important;
            background: inherit !important;
        }

        position: relative;
        padding: 30px 50px;

        &:before {
            content: '';
            display: block;
            width: 100%;
            height: 100%;
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background: url('../assets/school_girl.jpg');
            opacity: 0.3;
            pointer-events: none;
        }

        opacity: 1;

        .kk {
            background: red;
            border: 1px solid white;
        }

        .clearfix {
            /*display: none;*/
        }

        #boxFixed {
            background: #333333;
        }

        .isFixed {
            position: fixed;
            top: 0;
            left: 0;
            z-index: 2;
        }

        #modalBox {
            position: fixed;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, .3);

            .close {
                position: absolute;
                right: 20px;
                top: 20px;
                font-size: 30px;
                color: #ffffff;
            }
        }
    }
</style>