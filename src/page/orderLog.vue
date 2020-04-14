<template>
    <div class="cont">
        <van-nav-bar title="订单记录" @click-left="back" class="nav-bar">
            <template #left><van-icon name="arrow-left" color="#333333" class="c_33"/></template>
        </van-nav-bar>
        <van-list v-model="loading" :finished="over" finished-text="没有更多了" @load="getList" class="list df df-c ai-c">
            <div v-for="(item,index) in dataList" :key="index" class="item df df-r">
                <img src="~@/assets/test.jpg" class="img" />
                <div class="item-detail f1 df df-c just-c-bet">
                    <div>
                        <div class="fs_30 c_33 one-hide">商品1</div>
                        <div class="mt-20 df df-r ai-c">
                            <van-icon name="clock-o" size="0.2rem" color="#C7C7C7"/>
                            <span class="fs_22 c_ashen pl-10">2020.04.05 20:32</span>
                        </div>
                    </div>
                    <span class="c_ashen fs_26"><span class="fs_40 c_red1">200</span> 云指币/400贡献值</span>
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
        back(){this.$router.go(-1);}
    }
}
</script>
<style scoped>
.list{margin:0.2rem 0 0;}
.list .item{box-sizing:border-box; width:6.8rem; padding:0.3rem 0; border-bottom:1px solid #EAEAEA;}
.list .item:last-child{margin-bottom:0;}
.list .item .img{width:2.6rem; height:1.68rem;}
.list .item .item-detail{margin-left:0.16rem;}
</style>