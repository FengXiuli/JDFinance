<template>
	<!-- 1. -->
    <div :class="$style.header">
        <span :class="$style.left">
          <!-- 我们是将页面写死的，真是页面开发的过程中我们是使用router-link -->
            <em>注册</em>&nbsp;|&nbsp;<em>登录</em>
        </span>
    <!-- 我们写成btn的方式是因为我们在core中的btn.vue中定义了插槽</solt>,相当于将其中的btn.vue中的内容引进了 -->
    <!-- 4. 说白了就是将子组件引入-->
        <btn :class="$style.btnDownload">APP下载</btn>
    </div>
</template>
	
<script>
	// 2.
	import btn from "../core/btn.vue"
	// 3.
	export default {
		components: {
			btn,
		}
	}
</script>
<style lang="scss" module>
// 5.
  .header{
    color: #666;
    height: 100px;
    line-height: 100px;
    // 技巧：left:0和right:0是使得宽度为100%，这是和width: 100%得效果是一样的
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    font-size: 32px;
    // url中不加前面的协议会使得url的协议会随着页面的协议而变化
    background: #fff url(http://m.jr.jd.com/spe/qyy/main/images/jr-logo.png) center center no-repeat;
    // 使得图片随着页面的尺寸而变化为相应的值	
    background-size: auto 50%;
    // 使得其层级是最高的的目的是当页面往上滑动的时候使得其层级是最高的，这个样子才能盖的住下面的页面
    z-index: 100;
    .left{
    	// 因为float默认的是左边，所以不用写float:left
      font-size: 28px;
      height: 30px;
      line-height: 30px;
      margin: 17px 0 0 18px;
    }
    .btnDownload{
      float: right;
      font-size: 24px;
      border-width: 0;
      height: 56px;
      line-height: 56px;
      min-width: 120px;
      padding: 0;
      border-radius: 4px;
      margin: 28px 24px 0 0;
    }

  }
</style>
