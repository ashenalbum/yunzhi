<template>
    <div class="cont df df-c ai-c">
        <van-nav-bar title="个人资料" @click-right="save" @click-left="back" class="nav-bar">
            <template #left><van-icon name="arrow-left" color="#333333" class="c_33"/></template>
            <template #right><span class="c_33">保存</span></template>
        </van-nav-bar>
        <van-uploader :after-read="afterRead" :preview-image="false">
            <img src="~@/assets/test.jpg" class="icon" />
        </van-uploader>
        <div class="formbox">
            <van-field v-model="formData.username" label="用户名" placeholder="请输入用户名" input-align="right" :borde="false" class="input" />
            <van-field v-model="formData.mobile" label="手机号" type="number" placeholder="请输入手机号" input-align="right" :borde="false" class="input" />
            <van-field v-model="formData.recommend_mobile" label="推荐人手机号" type="number" placeholder="请输入推荐人手机号" input-align="right" :borde="false" class="input" />
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            formData: {

            }
        }
    },
    methods: {
        save(){

        },
        afterRead(){

        },
        back(){this.$router.go(-1);}
    }
}
</script>
<style scoped>
.nav-bar{width:100%;}
.icon{display:block; width:2rem; height:2rem; border-radius:50%; margin:0.6rem auto 0.6rem;}
.formbox{width:7rem;}
.formbox .input{border-bottom:1px solid #EAEAEA;}
</style>
