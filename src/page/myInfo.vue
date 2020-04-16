<template>
    <div class="cont df df-c ai-c">
         <!-- @click-right="save" -->
        <van-nav-bar title="个人资料" @click-left="back" class="nav-bar">
            <template #left><van-icon name="arrow-left" color="#333333" class="c_33"/></template>
            <!-- <template #right><span class="c_33">保存</span></template> -->
        </van-nav-bar>
        <!-- <van-uploader :after-read="afterRead" :preview-image="false"> -->
        <img :src="formData.headpath" class="icon shadow" />
        <!-- </van-uploader> -->
        <div class="formbox">
            <van-field readonly v-model="formData.username" label="用户名" placeholder="" input-align="right" :borde="false" class="input" />
            <van-field readonly v-model="formData.mobile" label="手机号" type="number" placeholder="" input-align="right" :borde="false" class="input" />
            <van-field readonly v-model="formData.recommend_mobile" label="推荐人手机号" type="number" placeholder="" input-align="right" :borde="false" class="input" />
        </div>
    </div>
</template>
<script>
import axios from "../utils/axios";
// import {upFile} from "../utils/axios";
import { Toast } from 'vant';

export default {
    data(){
        return {
            formData: {}
        }
    },
    created(){
        this.getData();
    },
    methods: {
        // afterRead(file){
        //     let formdata = new FormData();
        //     formdata.append("file",file);
        //     upFile(formdata).then((res)=>{
        //         let data = res.data;
        //         if(data.err!=0){Toast("error");return}

        //     });
        // },
        getData(){
            axios({
                url: "/goods/Apiyunzhi/getUserInfo"
            }).then((data)=>{
                if(data.err!=0){return}
                this.formData = data.content;
            })
        },
        save(){
            axios({
                url: "/goods/Apiyunzhi/setUserInfo",
                params: {...this.formData}
            }).then((data)=>{
                if(data.err!=0){return}
                Toast("修改成功")
            })
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
