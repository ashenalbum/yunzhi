<template>
    <div class="cont df df-c">
        <van-nav-bar title="个人中心" @click-left="back" class="nav-bar style-nav-bar">
            <template #left><van-icon name="arrow-left" color="#ffffff" class="c_33"/></template>
        </van-nav-bar>
        <div class="cont-box f1 df df-c ai-c">
            <div class="topbox shadow">
                <div class="iconbox df df-c ai-c">
                    <img :src="info.headpath" class="icon shadow" @click="toMyInfo" />
                    <span class="username fs_30 c_33" @click="toMyInfo">{{info.username}}</span>
                </div>
                <div class="cellbox df df-r">
                    <div class="cell f1 df df-r ai-c just-c-ct fs_28 c_33" @click="toMyProperty">
                        <img src="~@/assets/mycenter/cell1.png" class="img" />
                        <div class="txt df df-c just-c-aro">
                            <span>我的贡献值</span>
                            <span class="c_99 fs_26">点击查看</span>
                        </div>
                    </div>
                    <div class="cell f1 df df-r ai-c just-c-ct fs_28 c_33" @click="toMyFraction">
                        <img src="~@/assets/mycenter/cell2.png" class="img" />
                        <div class="txt df df-c just-c-aro">
                            <span>我的云指币</span>
                            <span class="c_99 fs_26">点击查看</span>
                        </div>
                    </div>
                </div>
                <div class="zhuanzhang fs_30 c_ff" @click="toTrans">转账</div>
            </div>
            <div class="listbox f1 mt-30 shadow">
                <van-cell class="item" @click="toMysub">
                    <template #title>
                        <img src="~@/assets/mycenter/item1.png" class="icon" />
                        <span class="c_33 fs_30">我的团队</span>
                    </template>
                </van-cell>
                <van-cell class="item" @click="toMyLocation">
                    <template #title>
                        <img src="~@/assets/mycenter/item2.png" class="icon" />
                        <span class="c_33 fs_30">我的地址</span>
                    </template>
                </van-cell>
                <van-cell class="item" @click="toOrderLog">
                    <template #title>
                        <img src="~@/assets/mycenter/item3.png" class="icon" />
                        <span class="c_33 fs_30">订单记录</span>
                    </template>
                </van-cell>
                <div class="btn-box w-60">
                    <van-button type="info" block class="outLogin" @click="outlogin">退出登录</van-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "../utils/axios";

export default {
    data(){
        return {
            info: {}
        }
    },
    created(){
        this.getData();
    },
    methods: {
        getData(){
            axios({
                url: "/goods/Apiyunzhi/getUserInfo"
            }).then((data)=>{
                if(data.err!=0){return}
                this.info = data.content;
            })
        },
        outlogin(){
            this.$dialog.confirm({
                message: '确定退出登录吗',
            }).then(()=>{
                window.localStorage.clear();
                this.$store.commit("setUserId","");
                this.$router.replace("/login");
            }).catch(()=>{});
        },
        toMyProperty(){this.$router.push("/my_property");},
        toMyFraction(){this.$router.push("/my_fraction");},
        toMyInfo(){this.$router.push("/my_info");},
        toTrans(){this.$router.push("/trans");},
        toMysub(){this.$router.push("/my_sub");},
        toMyLocation(){this.$router.push("/my_location");},
        toOrderLog(){this.$router.push("/order_log");},
        back(){this.$router.go(-1);},
    }
}
</script>
<style scoped>
.w-60{width:6rem; margin-left:auto; margin-right:auto;}
.btn-box{margin-top:1rem;}
.cont{box-sizing:border-box; min-height:100vh;}
.cont-box{padding:0.3rem 0 0.3rem; background:#F8F8FA url(~@/assets/mycenter/topbg.png) no-repeat center 0; background-size:100% auto;}
.topbox{position:relative; box-sizing:border-box; padding:0.15rem 0.45rem; width:7.1rem; border-radius:0.2rem; background:#ffffff;}
.topbox .iconbox{padding:0.3rem 0; border-bottom:1px solid #DDDDDD;}
.topbox .iconbox .icon{width:1.5rem; height:1.5rem; border-radius:50%;}
.topbox .iconbox .username{padding-top:0.26rem;}
.topbox .cellbox{padding-top:0.2rem;}
.topbox .cellbox .cell{padding:0.16rem 0; border-right:1px solid #DDDDDD;}
.topbox .cellbox .cell:last-child{border-right:none;}
.topbox .cellbox .cell .img{width:0.5rem; height:0.5rem; margin-right:0.3rem;}
.topbox .zhuanzhang{position:absolute; right:-5px; top:0.6rem; padding:0.1rem 0.3rem; background:#FFA800; border-radius:0.06rem;}
.listbox{box-sizing:border-box; width:7.1rem; padding:0.3rem 0.4rem; background:#ffffff; border-radius:0.2rem;}
.listbox .item{padding:0.28rem 0; border-bottom:1px solid #EAEAEA;}
.listbox .item:last-child{border-bottom:none;}
.listbox .item .icon{width:0.6rem; height:0.6rem; margin-right:0.3rem;}
.nav-bar{background:#6662FE;}
</style>
