<template>
    <div class="cont">
        <van-nav-bar title="订单记录" @click-left="back" class="nav-bar">
            <template #left><van-icon name="arrow-left" color="#333333" class="c_33"/></template>
        </van-nav-bar>
        <van-list v-model="loading" :finished="over" finished-text="没有更多数据了" @load="getData" class="list df df-c ai-c">
            <div v-for="(item,index) in dataList" :key="index" class="item df df-r">
                <img :src="item.goods_info.thumb" class="img" />
                <div class="item-detail f1 df df-c just-c-bet">
                    <div>
                        <div class="fs_30 c_33 one-hide">{{item.goods_info.title}}</div>
                        <div class="mt-20 df df-r ai-c">
                            <van-icon name="clock-o" size="0.2rem" color="#C7C7C7"/>
                            <span class="fs_22 c_ashen pl-10">{{item.addtime}}</span>
                        </div>
                    </div>
                    <span class="c_ashen fs_26">
                        <span class="fs_40 c_red1">{{item.payinfo.money}}</span>
                        <span>云指币 & </span>
                        <span class="fs_40 c_red1">{{item.payinfo.point}}</span>
                        <span>贡献值</span>
                    </span>
                </div>
            </div>
        </van-list>
    </div>
</template>
<script>
import axios from "../utils/axios";

export default {
    name: "index",
    data(){
        return {
            loading: false,
            over: false,
            dataList: [],
        }
    },
    methods: { 
        getData(){
            axios({
                url: "/goods/Apiyunzhi/orderList"
            }).then((data)=>{
                this.loading = false;
                this.over = true;
                if(data.err!=0){return}
                this.dataList = data.content;
            })
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