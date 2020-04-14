<template>
    <div class="cont df df-c ai-c">
        <van-nav-bar title="转账" @click-left="back" class="nav-bar">
            <template #left><van-icon name="arrow-left" color="#333333" class="c_33"/></template>
        </van-nav-bar>
        <div class="formbox mt-40 c_33 fs_30">
            <div>转账至：</div>
            <van-cell class="mt-20 item">
                <template #title>
                    <img src="~@/assets/trans/icon1.png" class="icon" />
                    <span class="c_33 fs_30">134***1234</span>
                </template>
            </van-cell>
            <div class="mt-60 df df-r ai-c">
                <span>转账方式：</span>
                <van-radio-group v-model="formData.type" direction="horizontal" icon-size="16">
                    <van-radio :name="0">云指币</van-radio>
                    <van-radio :name="1">贡献值</van-radio>
                </van-radio-group>
            </div>
            <div class="mt-60">
                <div>转账数额：</div>
                <input class="mt-10 num-input" type="number" placeholder="请输入金额" />
            </div>
            <div class="mt-30 fs_26">
                <span>可用贡献值为2000</span>
                <span class="allmoney c_o">全部转账</span>
            </div>
            <van-button type="into" size="small" block color="#6F6FFF" class="submitbtn">确认转账</van-button>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            formData:{
                type: 0
            }
        }
    },
    methods: {
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
</style>
