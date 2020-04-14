<template>
    <div class="cont">
        <van-nav-bar
            title="首页"
            @click-right="toMyCenter"
        />
        <van-swipe :autoplay="3000" class="swipe">
            <van-swipe-item v-for="(image, index) in [1,2,3]" :key="index">
                <img src="~@/assets/test.jpg" class="img" />
            </van-swipe-item>
        </van-swipe>
    </div>
</template>
<script>
export default {
    data(){
        return {

        }
    },
    methods: {
        toMyCenter(){
            
        }
    }
}
</script>
<style scoped>
.swipe .van-swipe-item{width:100%; height:3.6rem;}
.swipe .van-swipe-item .img{width:100%; height:100%;}
</style>