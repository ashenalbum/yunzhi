<template>
    <div class="cont">
        <van-nav-bar title="首页" @click-right="toMyCenter" >
            <template #right><van-icon name="user-o" color="#333333" size="20px" /></template>
        </van-nav-bar>
        <van-swipe :autoplay="3000" class="swipe">
            <van-swipe-item v-for="(image, index) in [1,2,3]" :key="index">
                <img src="~@/assets/test.jpg" class="img" />
            </van-swipe-item>
        </van-swipe>
        <van-list v-model="loading" :finished="over" finished-text="没有更多了" @load="getList" class="list df df-c ai-c">
            <div class="item df df-r shadow">
                <img src="~@/assets/test.jpg" class="img" />
                <div class="item-detail f1 df df-c just-c-bet">
                    <div class="fs_30 c_33 two-hide">商品1</div>
                    <div class="df df-r just-c-bet">
                        <span class="c_ashen fs_26"><span class="fs_40">200</span> 云指币</span>
                        <van-button size="mini" type="info" color="#FFA800">购买</van-button>
                    </div>
                </div>
            </div>
            <div class="item df df-r shadow">
                <img src="~@/assets/test.jpg" class="img" />
                <div class="item-detail f1 df df-c just-c-bet">
                    <div class="fs_30 c_33 two-hide">商品1</div>
                    <div class="df df-r just-c-bet">
                        <span class="c_ashen fs_26"><span class="fs_40">200</span> 云指币</span>
                        <van-button disabled size="mini" type="info" color="#FFA800">购买</van-button>
                    </div>
                </div>
            </div>
            <div class="item df df-r shadow">
                <img src="~@/assets/test.jpg" class="img" />
                <div class="item-detail f1 df df-c just-c-bet">
                    <div class="fs_30 c_33 two-hide">商品1</div>
                    <div class="df df-r just-c-bet">
                        <span class="c_ashen fs_26"><span class="fs_40">200</span> 云指币</span>
                        <van-button size="mini" type="info" color="#FFA800">62:23:23</van-button>
                    </div>
                </div>
            </div>
        </van-list>
    </div>
</template>
<script>
export default {
    name: "index",
    data(){
        return {
            loading: false,
            over: false,
            dataList: [1,2,3],
        }
    },
    methods: {
        getList(){
            this.loading = false;
            this.over = true;
        },
        toMyCenter(){
            this.$router.push("/my_center");
        }
    }
}
</script>
<style scoped>
.swipe .van-swipe-item{width:100%; height:3.6rem;}
.swipe .van-swipe-item .img{width:100%; height:100%;}
.list{margin:0.4rem 0 0;}
.list .item{box-sizing:border-box; width:6.8rem; padding:0.3rem 0.2rem; margin-bottom:0.24rem; border-radius:0.16rem; background:#ffffff;}
.list .item:last-child{margin-bottom:0;}
.list .item .img{width:2.6rem; height:1.68rem;}
.list .item .item-detail{margin-left:0.16rem;}
</style>