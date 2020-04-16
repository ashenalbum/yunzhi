<template>
    <div class="cont df df-c ai-c">
        <div class="logo_box df df-c ai-c">
            <img src="~@/assets/public/logo_style.png" class="logo"/>
        </div>
        <div class="form">
            <van-field v-model="formData.mobile" maxlength="11" placeholder="请输入手机号" type="number" class="input" :border="false" />
            <van-field v-model="formData.code" maxlength="6" type="number" placeholder="请输入验证码" class="input">
                <template #button>
                    <van-button size="mini" plain :color="codeDisabled?'#333333':'#6F6FFF'" class="minibtn" @click="phoneCode" :disabled="codeDisabled">{{codeTxt}}</van-button>
                </template>
            </van-field>
            <van-field v-model="formData.password" placeholder="请输入密码" type="password" class="input" :border="false" />
            <van-field v-model="formData.affirmPassword" placeholder="请确认密码" type="password" class="input" :border="false" />
            <van-button @click="checkForm" color="#6F6FFF" size="small" type="info" block class="submit-btn">确定</van-button>
            <div class="df df-r ai-c just-c-bet mt-60 mb-20">
                <router-link to="/register"><span class="c_99 fs_30">快速注册</span></router-link>
                <router-link to="/login"><span class="c_99 fs_30">立即登录</span></router-link>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
import { Toast } from 'vant';

export default {
    data(){
        return {
            codeTxt: "发送验证码",
            codeDisabled: false,
            codeTime: 60,
            codeInterval: null,
            formData:{
                mobile: "",
                code: "",
                password: "",
                affirmPassword: "",
            }
        }
    },
    methods: {
        checkForm(){
            let data = this.formData;
            if(data.mobile==""){Toast("请输入手机号");return}
            if(!/^1\d{10}$/.test(data.mobile)){Toast("手机号格式有误");return}
            if(!data.code){Toast("请输入验证码");return}
            if(!/^.{6,16}$/.test(data.password)){Toast("请输入6-16位密码");return}
            if(data.password!==data.affirmPassword){Toast("两次密码不一致");return}
            this.onSubmit();
        },
        onSubmit(){
            axios({
                method: "post",
                url: window.baseUrl + "/public/index.php/goods/Apiyunzhi/setUserInfo",
                data: this.formData,
            }).then((res)=>{
                let data = res.data;
                if(data.err!=0){
                    Toast(data.content);
                    return;
                }
                Toast("设置成功,请登录");
                this.$router.replace("/login");
            })
        },
        phoneCode(){
            if(!/^1\d{10}$/.test(this.formData.mobile)){Toast("请输入正确的手机号"); return}
            this.codeDisabled = true;
            axios({
                url: window.baseUrl + "/public/index.php/member/Sendmsm/index",
                params: {mobile: this.formData.mobile}
            }).then((res)=>{
                let data = res.data;
                if(data.err!=0){
                    this.codeDisabled = false;
                    Toast(data.content);
                    return
                }
                Toast("短信发送成功");
                this.codeTxt = this.codeTime + "秒后重试";
                this.codeInterval = setInterval(()=>{
                    if(this.codeTime<=0){
                        this.codeTime = 60;
                        this.codeDisabled = false;
                        this.codeTxt = "发送验证码";
                        clearInterval(this.codeInterval);
                        return;
                    }
                    this.codeTime--;
                    this.codeTxt = this.codeTime + "秒后重试";
                },1000)
            }).catch(()=>{this.codeDisabled = false;Toast("error")})
        },
    }
}
</script>
<style scoped>
.logo_box{padding-top:1.2rem;}
.logo_box .logo{width:3.2rem; height:auto;}
.form{width:5.8rem; margin-top:1rem;}
.form .input{margin-bottom:0.3rem; padding:10px; border-bottom:1px solid #DDDDDD;}
.submit-btn{width:5rem; height:0.8rem; margin:0.8rem auto 0;}
.minibtn{padding:0 4px;}
</style>