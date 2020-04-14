<template>
    <div class="cont df df-c ai-c">
        <van-nav-bar title="我的贡献值" @click-left="back" class="nav-bar">
            <template #left><van-icon name="arrow-left" color="#333333" class="c_33"/></template>
        </van-nav-bar>
        <div class="top df df-c mt-20 c_ff">
            <div class="fs_30">现有贡献值</div>
            <div class="f1 df ai-c just-c-ct fs_124">300</div>
        </div>
        <div class="list mt-40">
            <div class="title df df-r ai-c">
                <van-icon name="bars" size="0.44rem" color="#FFAB04" />
                <span class="fs_30 c_33">贡献值明细</span>
            </div>
            <van-list v-model="loading" :finished="over" finished-text="没有更多数据了" @load="getList" class="mt-20">
                <div v-for="(item,index) in logList" :key="index" class="item df df-r ai-c">
                    <div class="c_88 f1">
                        <div class="fs_30">转账</div>
                        <div class="mt-10 c_ashen fs_20">2020年4月05号  20:07</div>
                    </div>
                    <span class="num c_red1 fs_28">500云指币</span>
                </div>
            </van-list>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            loading: false,
            over: false,
            logList: [1,2,3],
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
.nav-bar{width:100%;}
.top{box-sizing:border-box; width:6.9rem; height:3.2rem; padding:0.4rem; background:url(~@/assets/other/top-bg2.png) no-repeat; background-size:100% 100%;}
.list{width:6.9rem;}
.list .title{margin-bottom:0.2rem;}
.list .title>*{margin-right:0.3rem;}
.list .item{padding:0.2rem 0.2rem;}
.list .item .num{padding-left:0.2rem;}
</style>
