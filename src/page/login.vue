<template>
    <div class="cont df df-c ai-c">
        <div class="logo_box df df-c ai-c">
            <img src="~@/assets/public/logo_white.png" class="logo"/>
        </div>
        <div class="form loginform">
            <van-field v-model="formData.mobile" placeholder="请输入手机号" type="number" class="input" :border="false" />
            <van-field v-model="formData.password" placeholder="请输入密码" type="password" class="input" :border="false" />
            <van-button @click="checkForm" color="#ffffff" size="small" type="info" block class="c_style submit-btn">登 录</van-button>
            <router-link to="/register">
                <div class="txt-c mt-20 c_ff fs_30"><span>快速注册</span></div>
            </router-link>
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
                mobile: "",
                password: "",
            }
        }
    },
    created(){
        if(this.$route.query.msg){Toast(this.$route.query.msg);}
    },
    methods: {
        checkForm(){
            let data = this.formData;
            if(data.mobile==""){Toast("请输入手机号");return}
            if(!/^1\d{10}$/.test(data.mobile)){Toast("手机号格式有误");return}
            if(data.password==""){Toast("请输入密码");return}
            this.onSubmit();
        },
        onSubmit(){
            axios({
                method: "post",
                url: "http://cpfx.78wa.com/public/index.php/goods/Apiyunzhi/login",
                data: this.formData,
            }).then((res)=>{
                let data = res.data;
                if(data.err!=0){return;}
                Toast("登录成功");
                if(data.cowcms_userid){window.localStorage.setItem("cowcms_userid",data.cowcms_userid);}
                this.$store.commit("setUserId",data.cowcms_userid);
                this.$router.replace("/index");
            });
        }
    }
}
</script>
<style scoped>
.cont{height:100vh; background:#6D6FFE;}
.logo_box{padding-top:2rem;}
.logo_box .logo{width:3.2rem; height:auto;}
.form{width:5.8rem; margin-top:1.2rem;}
.form .input{margin-bottom:0.3rem; padding:10px; background:transparent; border-bottom:1px solid #DDDDDD;}
.submit-btn{width:5rem; height:0.8rem; margin:0.8rem auto 0;}
</style>