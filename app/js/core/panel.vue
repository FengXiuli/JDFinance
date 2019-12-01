<template lang="html">
<!-- 1. -->
    <section :class="[panelClass,cname]">
        <!-- 每一模块的标题 -->
        <h4>-{{ title }}-</h4>
        <!-- 每一模块的内容 -->
        <slot/>
    </section>
</template>

<script>
export default {
    // 3. 这个组件接收两个部分的东西,一个是cname,一个是title
    props: {
        // 自定义类名
        cname: {
            type: String,
            default: "",
        },
        title: {
            type: String,
            default: "",
        },
    },
    data() {
        // 2.
        return {
            panelClass: "panel",
        }
    },
}
</script>

<style lang="scss">
// 4.
  @import "../../css/element.scss";
  .panel{
    @include panel;
  }
</style>
