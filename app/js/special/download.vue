<template lang="html">
    <Panel title="下载APP" :class="$style.panel">
        <section :class="$style.content">
            <div class=""/>
            <p>立即下载</p>
            <span>copyright</span>
        </section>
    </Panel>
</template>

<script>
import Panel from "../core/panel.vue"
export default {
    components: {
        Panel,
    },
}
</script>

<style lang="scss" module>
  @import "../../css/element.scss";
  html,body{
    background: #fff;
  }
  .panel{
    @include panel;
    margin: 0!important;
    >h4{
      display: none;
    }
    .content{
      @include flex;
      // flex布局的垂直水平居中
      justify-content: center;
      align-items: center;
      // 但是垂直居中并不是那么简单的，因为我们不知道不同的手机页面的具体高度是多少，但是这是没什么问题的，因为我们引入的viewport会自动根据不同的手机做出适应，所以我们只需要将页面的高写成当前运用的手机的高即可，我们使用的是iphone5,所以我们应该写成568*2
      height: 1136px;
      width: 100%;
      >div{
        background: url(https://img12.360buyimg.com/jrpmobile/jfs/t8956/285/1249806938/50853/8cd3c8f0/59b65f36N05367075.png?) center center no-repeat;
        width: 600px;
        height: 800px;
        background-size: 100% auto;
        margin-top: -400px;
      }
      >p{
        @include btn($size:32px,$color:#fff,$bgcolor:#F1443E,$padding:5px,$radius:5px);
        height: 100px;
        line-height: 100px;
        width: 471px;
        background-image: linear-gradient(270deg,#F55C33 0,#EE2D1B 75%);
        box-shadow: 0 12px 32px 0 rgba(255,159,135,.6);
        position: fixed;
        bottom: 130px;
      }
      span{
        position: fixed;
        bottom: 16px;
        font-size: 24px;
        color: #eee;
      }
    }
  }
</style>
