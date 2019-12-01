<template lang="html">
<!-- vue的用法，动态绑定一个类名，可参考vue的官方文档 -->
<!--1. btnClass是默认的类名，cname是传递过来的类名 -->
    <div :class="[btnClass,cname]">
        <!-- 通过html方式去填写文本,vue中的插槽<slot/>可以实现  <button>确认</button> 这种形式,否则写成<button text="确认"/>这种形式很别扭 -->
        <slot/>
    </div>
</template>

<script>
export default {
    // 3. 属性传递
    props: {
        cname: {
            type: String,
            default: "",
        },
    },
    data() {
        // 2.
        return {
            btnClass: "btn",
        }
    },
}
</script>

<style lang="scss">
// 4.引入样式实现继承
@import "../../css/element.scss";

.btn{
  @include btn;
}
</style>
