<template lang="html">
    <div :class="$style.home">
        <heador/>
        <hslider/>
        <novice/>
        <borrow/>
        <money/>
        <product/>
        <life/>
        <footor/>
        <navbar/>
    </div>
</template>

<script>
	// 不能使用Header，这是默认标签样式，是不能使用的
import Heador from "../public/header.vue"
import Hslider from "./hslider.vue"
import Novice from "./novice.vue"
import Borrow from "./borrow.vue"
import Money from "./money.vue"
import Product from "./product.vue"
import Life from "./life.vue"
// 不能使用Footer，这是默认标签样式，是不能使用的
import Footor from "../public/footer.vue"
import Navbar from "../public/navbar.vue"
export default {
	components: {
		Heador,
		Hslider,
		Novice,
        Borrow,
        Money,
        Product,
        Life,
        Footor,
        Navbar,
	   }
}
</script>

<style lang="scss" module>
  @import '../../css/reset.scss';
  .home{
    color: red;
    font-size: 80px;
  }
</style>
