<template>
    <div class="cont df df-c ai-c">
        <div class="logo_box df df-c ai-c">
            <img src="~@/assets/public/logo_style.png" class="logo"/>
        </div>
        <div class="form">
            <van-field v-model="formData.username" placeholder="请输入用户名" class="input" />
            <van-field v-model="formData.mobile" placeholder="请输入手机号" type="number" class="input" />
            <van-field v-model="formData.password" placeholder="请输入密码" type="password" class="input" />
            <van-field v-model="formData.affirmPassword" placeholder="请确认密码" type="password" class="input" />
            <van-field v-model="formData.recommend_mobile" placeholder="推荐人手机号" type="number" class="input" />
            <van-button @click="checkForm" color="#6F6FFF" size="small" type="info" block class="submit-btn">确认注册</van-button>
        </div>
    </div>
</template>
<script>
import axios from "../utils/axios";

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
            this.onSubmit();
        },
        onSubmit(){
            axios({
                method: "post",
                url: "/goods/Apiyunzhi/register",
                data: this.formData,
            }).then((data)=>{
                if(data.err!=0){return;}
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