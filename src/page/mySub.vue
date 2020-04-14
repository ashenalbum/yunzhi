<template>
    <div class="cont">
        <van-nav-bar title="我的下级" @click-left="back" class="nav-bar">
            <template #left><van-icon name="arrow-left" color="#333333" class="c_33"/></template>
        </van-nav-bar>
        <van-list v-model="loading" :finished="over" finished-text="没有更多数据了" @load="getList" class="list mt-20">
            <div v-for="(item,index) in dataList" :key="index" class="item df df-r ai-c just-c-bet">
                <div class="name f1 df df-r ai-c fs_30 c_33">
                    <img src="~@/assets/test.jpg" class="icon" />
                    <div class="f1 one-hide">悲歌断肠</div>
                </div>
                <span class="fs_26 c_99">132****2234</span>
            </div>
        </van-list>
    </div>
</template>
<script>
export default {
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
.list{width:6.8rem; margin:0.1rem auto;}
.list .item{padding:0.3rem 0; border-bottom:1px solid #EAEAEA;}
.list .item .icon{width:0.8rem; height:0.8rem; border-radius:50%; margin-right:0.2rem;}
</style>