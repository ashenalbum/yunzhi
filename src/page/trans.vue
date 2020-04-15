<template>
    <div class="cont df df-c ai-c">
        <van-nav-bar title="转账" @click-left="back" class="nav-bar">
            <template #left><van-icon name="arrow-left" color="#333333" class="c_33"/></template>
        </van-nav-bar>
        <div class="formbox mt-40 c_33 fs_30">
            <div>转账至：</div>
            <van-cell class="mt-20 item" @click="showSelUser=true" is-link>
                <template #title>
                    <div v-if="user" class="df df-r ai-c">
                        <img :src="user.headpath" class="icon" />
                        <span class="c_33 fs_30">{{user.username + " " + user.mobile}}</span>
                    </div>
                    <div v-else class="df df-r ai-c">
                        <img src="~@/assets/mycenter/item1.png" class="icon" />
                        <span class="c_33 fs_30">请选择下级</span>
                    </div>
                </template>
            </van-cell>
            <div class="mt-60 df df-r ai-c">
                <span>转账方式：</span>
                <van-radio-group v-model="formData.type" direction="horizontal" icon-size="16" @change="changeType">
                    <van-radio :name="0">云指币</van-radio>
                    <van-radio :name="1">贡献值</van-radio>
                </van-radio-group>
            </div>
            <div class="mt-60">
                <div>转账数额：</div>
                <input v-model="formData.num" class="mt-10 num-input" type="number" placeholder="请输入金额" />
            </div>
            <div class="mt-30 fs_26">
                <span>可用{{formData.type==0?"云指币为 "+allMoney:"贡献值为 "+allPoint}}</span>
                <span class="allmoney c_o" @click="inputAll">全部转账</span>
            </div>
            <van-button @click="submit" type="into" size="small" block color="#6F6FFF" class="submitbtn">确认转账</van-button>
        </div>
        <!-- 选择用户 -->
        <van-popup
            v-model="showSelUser"
            position="bottom"
        >
            <div class="selbox">
                <div class="df df-r ai-c just-c-bet fs_28 c_99">
                    <span @click="showSelUser=false">取消</span>
                    <span @click="selUserOk" class="c_blue">确定</span>
                </div>
                <div v-for="(item,index) in userList" :key="index" @click="selUserId=index" class="selitem mt-20 df df-r ai-c c_99">
                    <van-icon v-if="selUserId==index" name="checked" color="#1989fa" />
                    <van-icon v-else name="circle" color="#999999" />
                    <div class="pl-20 f1 fs_28 c_99">{{item.username + "：" + item.mobile}}</div>
                </div>
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
            allMoney: 0,
            allPoint: 0,
            formData:{
                type: 0,
                mobile: "",
                num: "",
            },

            user: null,
            showSelUser:false,
            userList: [],
            selUserId: 0,
        }
    },
    created(){
        this.getData();
        this.getUser();
    },
    methods: {
        getData(){
            axios({
                url: "/goods/Apiyunzhi/myCoin",
                params: {coin_type:"money"}
            }).then((data)=>{
                if(data.err!=0){return}
                this.allMoney = data.content.accounts.money.balance;
                this.allPoint = data.content.accounts.point.balance;
            })
        },
        getUser(){
            axios({
                url: "/goods/Apiyunzhi/myJunior"
            }).then((data)=>{
                if(data.err!=0){return}
                this.userList = data.content;
            })
        },
        submit(){
            if(!this.user){Toast("请选择转账用户");return}
            if(!this.formData.num){Toast("请输入转账金额");return}
            axios({
                url: "/goods/Apiyunzhi/affirmTransfer",
                params: {
                    touserid: this.user.id,
                    coin_type: this.formData.type==0?"money":"point",
                    num: this.formData.num,
                }
            }).then((data)=>{
                if(data.err!=0){return;}
                Toast("操作成功");
                this.formData.num = "";
            });
        },
        inputAll(){
            this.formData.num = this.formData.type==0?this.allMoney:this.allPoint;
        },
        changeType(){
            this.formData.num = "";
        },
        selUserOk(){
            this.showSelUser = false;
            this.user = this.userList[this.selUserId];
        },
        back(){this.$router.go(-1);}
    }
}
</script>
<style scoped>
.cont .nav-bar{width:100%;}
.formbox{width:6rem;}
.formbox .item{padding:0.28rem 0; border-bottom:1px solid #EAEAEA;}
.formbox .item .icon{width:0.6rem; height:0.6rem; margin-right:0.3rem;}
.formbox .num-input{font-size:0.5rem; padding:0.3rem 0.15rem; border:0; outline:0; border-bottom:1px solid #EAEAEA;}
.formbox .num-input::-webkit-input-placeholder{color:#C7C7C7;}
.formbox .allmoney{padding-left:0.2rem;}
.formbox .submitbtn{margin:0.8rem auto 0; width:4.4rem;}
.selbox{padding:0.2rem 0.2rem 0.3rem;}
.selbox .selitem{padding:0.1rem 0.2rem;}
</style>
