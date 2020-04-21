<template>
    <div class="cont">
        <van-nav-bar title="我的下级" @click-left="back" class="nav-bar">
            <template #left><van-icon name="arrow-left" color="#333333" class="c_33"/></template>
            <template #right><span class="c_99">{{pnum}}</span></template>
        </van-nav-bar>
        <van-list v-model="loading" :finished="over" finished-text="没有更多数据了" @load="getData" class="list mt-20">
            <div v-for="(item,index) in dataList" :key="index" class="item df df-r ai-c just-c-bet">
                <div class="name f1 df df-r ai-c fs_30 c_33">
                    <img :src="item.headpath" class="icon" />
                    <div class="f1 one-hide">{{item.username}}</div>
                </div>
                <span class="fs_26 c_99">{{item.mobile}}</span>
            </div>
        </van-list>
    </div>
</template>
<script>
import axios from "../utils/axios";

export default {
    data(){
        return {
            loading: false,
            over: false,
            dataList: [],
            pnum: ""
        }
    },
    created(){},
    methods: {
        getData(){
            axios({
                url: "/goods/Apiyunzhi/myJunior"
            }).then((data)=>{
                this.loading = false;
                this.over = true;
                if(data.err!=0){return}
                this.dataList = data.content;
                this.pnum = data.count + "人";
            })
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