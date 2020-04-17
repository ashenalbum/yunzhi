<template>
    <div class="cont">
        <van-nav-bar title="订单详情" @click-left="back" class="nav-bar">
            <template #left><van-icon name="arrow-left" color="#333333" class="c_33"/></template>
        </van-nav-bar>
        <div class="main">
            <div class="location df df-r ai-c" @click="showSelInfo=true">
                <img src="~@/assets/mycenter/item2.png" class="img" />
                <div v-if="info" class="txt f1 pl-20">
                    <div class="df df-r ai-e">
                        <span class="f1 fs_32 c_33 one-hide">{{info.name}}</span>
                        <span class="fs_26 c_99 pl-20">{{info.mobile}}</span>
                    </div>
                    <div class="mt-20 fs_26 c_77 two-hide">{{info.county+","+info.detail_addr}}</div>
                </div>
                <div v-else class="fs_32 c_99 f1 pl-20">请选择地址</div>
                <van-icon name="arrow" color="#c7c7c7" size="0.22rem" class="pl-20"/>
            </div>
            <div class="sp df df-r">
                <img :src="shop.thumb" class="img shadow" />
                <div class="f1 txt pl-20 df df-c just-c-bet">
                    <div class="fs_30 c_33 two-hide">{{shop.title}}</div>
                    <div class="df df-r ai-e df-w-w fs_24 c_99">
                        <span class="fs_36 lh-1 c_red1">{{shop.price_f && shop.price_f.money}}</span>
                        <span class="pb-5 lh-1">贡献值</span>
                        <span class="pl-10 fs_30">&</span>
                        <span class="pl-10 fs_36 lh-1 c_red1">{{shop.price_f && shop.price_f.point}}</span>
                        <span class="pb-5 lh-1">云指币</span>
                    </div>
                </div>
            </div>
            <div class="title">
                <div class="title-txt fs_28 c_33">详情</div>
            </div>
            <div class="details-box mt-30" v-html="shop.introduce"></div>
        </div>
        <div @click="buy" class="submit-btn fs_34 c_ff df ai-c just-c-ct">立即购买</div>
        <van-popup
            v-model="showSelInfo"
            position="bottom"
        >
            <div class="selbox">
                <div class="df df-r ai-c just-c-bet fs_28 c_99">
                    <span @click="showSelInfo=false">取消</span>
                    <span @click="selInfoOk" class="c_blue">确定</span>
                </div>
                <div v-for="(item,index) in infoList" :key="index" @click="selInfoId=index" class="selitem mt-20 df df-r ai-c c_99">
                    <van-icon v-if="selInfoId==index" name="checked" color="#1989fa" />
                    <van-icon v-else name="circle" color="#999999" />
                    <div class="pl-20 f1 fs_28">
                        <div class="df df-r ai-c just-c-bet">
                            <span class="f1 one-hide fs_32">{{item.name}}</span>
                            <span>{{item.mobile}}</span>
                        </div>
                        <div class="mt-10 two-hide">{{item.county+","+item.detail_addr}}</div>
                    </div>
                </div>
                <van-button size="small" type="info" block class="addInfoBtn" @click="toMyLocation">添加新地址</van-button>
            </div>
        </van-popup>
    </div>
</template>
<script>
import axios from "../utils/axios";
import { Toast } from 'vant';

export default {
    data(){
        return {
            id: null,
            info: null,
            shop: {},

            showSelInfo: false,
            infoList: [],
            selInfoId: 0,
        }
    },
    created(){
        this.id = this.$route.query.id;
        this.getData();
    },
    methods: {
        getData(){
            axios({
                url: "/goods/Apiyunzhi/orderDetails",
                params: {goods_id: this.id},
            }).then((data)=>{
                if(data.err!=0){return}
                this.info = data.content.addr;
                this.shop = data.content.shopInfo;
            });
            axios({
                url: "/goods/Apiyunzhi/myAddr",
            }).then((data)=>{
                if(data.err!=0){return}
                this.infoList = data.content;
                for(let i in this.infoList){if(this.infoList[i].is_default){this.selInfoId=Number(i)}}
            })
        },
        buy(){
            if(!this.info || !this.info.id){Toast("请先添加收货地址");return}
            this.$router.push({path: "/order_pay", query:{id:this.id, addr_id:this.info.id}});
        },
        selInfoOk(){
            this.showSelInfo = false;
            if(this.infoList.length==0){return;}
            this.info = this.infoList[this.selInfoId];
        },
        toMyLocation(){this.$router.push("/my_location")},
        back(){this.$router.go(-1);}
    }
}
</script>
<style scoped>
.pb-5{padding-bottom:0.05rem;}
.main{width:6.9rem; margin:auto;}
.location{padding:0.3rem 0; border-bottom:1px solid #EAEAEA;}
.location .img{width:0.75rem; height:0.75rem;}
.sp{padding:0.3rem 0;}
.sp .img{width:2.7rem; height:1.8rem;}
.sp .txt{padding-top:0.05rem; padding-bottom:0.05rem;}
.submit-btn{position:fixed; bottom:0; right:0; width:3.4rem; height:1rem; border-radius:0.4rem 0 0 0; background:#6F6FFF;}
.selbox{padding:0.2rem 0.2rem 0.3rem;}
.selbox .selitem{padding:0.1rem 0.2rem;}
.addInfoBtn{width:4rem; margin:0.3rem auto 0.2rem;}
.title{padding-left:0.16rem; border-bottom:1px solid #EAEAEA;}
.title .title-txt{display:inline-block; line-height:1; padding:0.2rem 0.3rem; border-bottom:2px solid #F5CF68;}
</style>
