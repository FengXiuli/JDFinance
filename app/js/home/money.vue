<template lang="html">
    <Panel title="理财精选" :class="$style.panel">
        <section :class="$style.content">
          <!-- 为什么使用dl dt dd 而不使用 ul li,这是因为 dt 可以表示标题，如果使用ul li 的话，还需要专门给第一个 li 加上class样式，会比较麻烦，这就是我们所说的要活用标签做选择器 -->
            <dl :class="$style.item" v-for="item in items" :key="item.title">
                <dt>{{ item.title }}<span>{{ item.sub }}</span></dt>
                <dd>{{ item.rate }}</dd>
                <dd>{{ item.text }}</dd>
            </dl>
        </section>
    </Panel>
</template>

<script>
import Panel from "../core/panel.vue"
export default {
    components: {
        Panel,
    },
    data() {
        return {
            items: [{
                title: "定期理财",
                sub: "理财首选",
                rate: "5.60%",
                text: "历史年化回报率",
            }, {
                title: "小白理财",
                sub: "理财首选",
                rate: "4.22%",
                text: "7日年化收益率",
            }, {
                title: "月月盈",
                sub: "养老保障",
                rate: "5%",
                text: "七日年化收益率",
            }, {
                title: "小白基金",
                sub: "天天赚钱",
                rate: "4.27%",
                text: "7日年化收益率",
            }],
        }
    },
}
</script>

<style lang="scss" module>
  @import '../../css/element.scss';
  .panel{
    @include panel;
    .content{
      @include flex(row);
      justify-content: space-around;
      // 如果盒模型不选用border-box是会出现问题的，因为默认是content-box,这个是会将border和padding值计算到盒子的宽度的
      box-sizing: border-box;
      // 上下两行之间的那一条直线
      &:after{
        content: " ";
        display: block;
        width: 100%;
        height: 0px;
        box-sizing: border-box;
        border-bottom: 1px solid #ddd;
        // 如果没有下面的两行，那么那一条线是放在最下面的，也就是说线的原始位置是在最下面，加了这两行，首先将线设置为相对定位，其次再将其向上移动一定的距离，从而可以实现线位于上下两行之间
        position: relative;
        top: -208px;
      }
      .item{
        // position: relative;是为了给下面的&:after 的position: absolute;服务的，子绝父相
        position: relative;
        width: 50%;
        // 如果盒模型不选用border-box是会出现问题的，因为默认是content-box,这个是会将border和padding值计算到盒子的宽度的
        box-sizing: border-box;
        &:after{
          content: " ";
          width: 1px;
          height: 136px;
          display: block;
          position: absolute;
          
          right: 0;
          // 使其居中
          top: 50%;
          margin-top: -68px;//高度的一半
          border-right: 1px solid #eee;
        }
        // 使偶数的盒子的右边的线不显示
        &:nth-child(2n){
          &:after{
            display: none;
          }
        }
        padding: 34px 16px;
        dt{
          font-size: 30px;
          line-height: 42px;
          color: #333;
          span{
            font-size:22px;
            color:#ff5155;
            border: 1px solid #ff5155;
            padding: 0 8px;
            // 当在垂直方向上没有对其的时候，我们可以使用vertical-align来进行调试
            vertical-align: 1px;
            margin-left: 2px;
          }
        }
        dd{
          &:nth-child(2){
            font-weight: 700;
            font-size: 44px;
            height: 58px;
            line-height: 58px;
            color: #FF5155;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }
          &:nth-child(3){
            font-size: 24px;
            height: 34px;
            line-height: 34px;
            color: #999;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }
        }

      }
    }
  }
</style>
