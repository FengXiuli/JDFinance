<template lang="html">
    <section :class="cname">
        <!-- swiper容器 -->
        <swiper :options="options" :not-next-tick="options.notNextTick">
            <!-- swiper-slide容器的每一项 -->
            <swiper-slide v-for="item in items" :key="item.href">
                <!-- 点击轮播图的任一项会跳转到相应的链接图片 -->
                <router-link :to="{ name: item.href}">
                    <img :src="item.src" alt="">
                </router-link>
            </swiper-slide>
            <!-- 指示器,轮播图下面的小点 -->
            <div class="swiper-pagination" v-if="options.pagination" slot="pagination"/>
        </swiper>
    </section>
</template>

<script>
// swiper容器, swiperSlide容器的每一项
import { swiper, swiperSlide } from "vue-awesome-swiper"
export default {
    components: {
        swiper,
        swiperSlide,
    },
    props: {
        cname: {
            type: String,
            default: "",
        },
        // 这是官方文档中的内容
        options: {
            type: Object,
            default() {
                return {
                    // 自动滚动
                    autoplay: true,
                    // 循环
                    loop: true,
                    // 指示器,轮播图下面的小点
                    pagination: {
                        el: ".swiper-pagination",
                    },
                    // 下一个点击的事件
                    notNextTick: false,
                }
            },
        },
        // 轮播图中每一项的数据结构设计:轮播图中的每一项中有两项,一项是图片的跳转链接,另一项是图片的地址
        items: {
            type: Array,
            default() {
                return []
            },
        },
    },
}
</script>

<style lang="css">
/* 官方文档中样式的引入是没有 ~ 的,这里我们要加上这个来进行引入 */
  @import "~swiper/dist/css/swiper.css";
</style>
