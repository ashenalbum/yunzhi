<template>
    <div class="cont">
        <van-nav-bar title="支付订单" @click-left="back" class="nav-bar">
            <template #left><van-icon name="arrow-left" color="#333333" class="c_33"/></template>
        </van-nav-bar>
        <div class="main df df-c ai-c">
            <div class="fs_24 c_99">购买本产品需支付云指币</div>
            <div class="mt-40 df df-r ai-e c_33 b">
                <span class="fs_80 lh-1">{{shopPrice.money}}</span>
                <span class="fs_24 lh-1 pl-10 pb-10">云指币</span>
            </div>
            <div class="mt-40 fs_30 c_red1">*本账户内可用云指币余额为 {{userPrice.money&&userPrice.money.balance}}</div>
        </div>
        <div class="main df df-c ai-c">
            <div class="fs_24 c_99">购买本产品需支付贡献值</div>
            <div class="mt-40 df df-r ai-e c_33 b">
                <span class="fs_80 lh-1">{{shopPrice.point}}</span>
                <span class="fs_24 lh-1 pl-10 pb-10">贡献值</span>
            </div>
            <div class="mt-40 fs_30 c_red1">*本账户内可用云贡献值余额为 {{userPrice.point&&userPrice.point.balance}}</div>
        </div>
        <div class="paybtn mt-60">
            <van-button type="info" color="#6F6FFF" block @click="pay">确认支付</van-button>
        </div>
        <van-dialog v-model="showDialog" title="预计下次补货时间" show-cancel-button @confirm="selColdday" @close="close">
            <div class="radiobox">
                <van-radio-group v-model="colddayVal" direction="horizontal" icon-size="16" class="w_100 fs_26 df df-r ai-c just-c-bet">
                    <van-radio v-for="(item,index) in coldday" :key="index" :name="item">{{item}}天以后</van-radio>
                </van-radio-group>
            </div>
        </van-dialog>
    </div>
</template>
<script>
import axios from "../utils/axios";
import { Toast } from 'vant';

export default {
    data(){
        return {
            id: null,
            addr_id: null,
            shopPrice: {},
            userPrice: {},
            
            showDialog: false,
            coldday: [],
            colddayVal: "",
            order_id: "",
        }
    },
    created(){
        this.id = this.$route.query.id;
        this.addr_id = this.$route.query.addr_id;
        this.getData();
    },
    methods: {
        getData(){
            axios({
                url: "/goods/Apiyunzhi/payInfo",
                params: {goods_id: this.id},
            }).then((data)=>{
                if(data.err!=0){return}
                this.shopPrice = data.content.shopPrice;
                this.userPrice = data.content.userPrice;
                this.coldday = data.content.coldday;
                this.colddayVal = this.coldday.length?this.coldday[this.coldday.length-1]:""
            });
        },
        pay(){
            axios({
                url: "/goods/Apiyunzhi/affirmPay",
                params: {
                    goods_id: this.id,
                    addr_id: this.addr_id,
                }
            }).then((data)=>{
                if(data.err!=0){return}
                this.order_id = data.order_id;
                this.showDialog = true;
            });
        },
        selColdday(){
            axios({
                url: "/goods/Apiyunzhi/setBackTime",
                params: {
                    order_id: this.order_id,
                    coldday: this.colddayVal,
                }
            }).then((data)=>{
                if(data.err!=0){return}
                this.showDialog = false;
                Toast("操作成功");
                this.$router.push({path:"/my_center"}).catch(()=>{});
            })
        },
        close(){this.$router.push({path:"/my_center"}).catch(()=>{});},
        back(){this.$router.go(-1);}
    }
}
</script>
<style scoped>
.w_100{width:100%;}
.pb-10{padding-bottom:0.1rem;}
.main{width:6.4rem; padding:0.8rem 0; margin:auto; border-bottom:1px solid #EAEAEA;}
.paybtn{width:5rem; margin-left:auto; margin-right:auto;}
.radiobox{margin-left:12px; padding:0.3rem 0.1rem;}
</style>
