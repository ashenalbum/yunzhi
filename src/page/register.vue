<template>
    <div class="cont df df-c ai-c">
        <div class="logo_box df df-c ai-c">
            <img src="~@/assets/public/logo_style.png" class="logo"/>
        </div>
        <div class="form">
            <van-field v-model="formData.username" placeholder="请输入用户名" class="input" :border="false" />
            <van-field v-model="formData.mobile" placeholder="请输入手机号" type="number" class="input" :border="false" />
            <van-field v-model="formData.password" placeholder="请输入密码" type="password" class="input" :border="false" />
            <van-field v-model="formData.affirmPassword" placeholder="请确认密码" type="password" class="input" :border="false" />
            <van-field v-model="formData.recommend_mobile" placeholder="推荐人手机号" type="number" class="input" :border="false" />
            <van-button @click="checkForm" color="#6F6FFF" size="small" type="info" block class="submit-btn">确认注册</van-button>
        </div>
    </div>
</template>
<script>
import axios from "axios";
import { Toast } from 'vant';

export default {
    data(){
        return {
            formData:{
                username: "",
                mobile: "",
                password: "",
                affirmPassword: "",
                recommend_mobile: "",
            }
        }
    },
    methods: {
        checkForm(){
            let data = this.formData;
            if(/^\s*$/.test(data.username)){Toast("请输入用户名");return}
            if(data.mobile==""){Toast("请输入手机号");return}
            if(!/^1\d{10}$/.test(data.mobile)){Toast("手机号格式有误");return}
            if(!/^.{6,16}$/.test(data.password)){Toast("请输入6-16位密码");return}
            if(data.password!==data.affirmPassword){Toast("两次密码不一致");return}
            if(data.recommend_mobile==""){Toast("请输入推荐人手机号");return}
            if(!/^1\d{10}$/.test(data.recommend_mobile)){Toast("推荐人手机号格式有误");return}
            this.onSubmit();
        },
        onSubmit(){
            axios({
                method: "post",
                url: "http://cpfx.78wa.com/public/index.php/goods/Apiyunzhi/register",
                data: this.formData,
            }).then((res)=>{
                let data = res.data;
                if(data.err!=0){return;}
                Toast("注册成功,请登录");
                this.$router.replace("/login");
            })
        }
    }
}
</script>
<style scoped>
.logo_box{padding-top:1.2rem;}
.logo_box .logo{width:3.2rem; height:auto;}
.form{width:5.8rem; margin-top:1rem;}
.form .input{margin-bottom:0.3rem; padding:10px; border-bottom:1px solid #DDDDDD;}
.submit-btn{width:5rem; height:0.8rem; margin:0.8rem auto 0;}
</style>