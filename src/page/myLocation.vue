<template>
    <div class="cont">
        <van-nav-bar title="我的地址" @click-left="back" @click-right="showForm=true" class="nav-bar">
            <template #left><van-icon name="arrow-left" color="#333333" class="c_33"/></template>
            <template #right><span class="c_33">添加</span></template>
        </van-nav-bar>
        <div class="list">
            <div v-for="(item,index) in dataList" :key="index" class="item shadow">
                <div class="df df-r ai-c just-c-bet">
                    <span class="fs_30 c_33">徐某某<span class="mobile fs_26 c_ashen">18322332323</span></span>
                    <span class="fs_28 c_99">删除</span>
                </div>
                <div class="txt fs_26 c_33">山西省 晋中市 榆次区 新华街98号 太原师范学院 女生宿舍2306</div>
                <div class="df df-r ai-c">
                    <van-icon v-if="index==0" name="checked" size="0.4rem" color="#6F6CFD" />
                    <van-icon v-else name="circle" size="0.4rem" color="##C7C7C7" />
                    <span class="pl-10 fs_26 lh-1">设为默认</span>
                </div>
            </div>
        </div>
        <!-- 表单 -->
        <van-popup v-model="showForm" round position="bottom">
            <div class="user-info">
                <div class="mt-30">
                    <van-field label="姓名" placeholder="请输入姓名" input-align="right" />
                    <van-field label="手机号" type="number" placeholder="请输入手机号" input-align="right" />
                    <van-field label="收货地址" readonly placeholder="请选择收货地址" input-align="right" right-icon="arrow" @click="showSelarea=true"/>
                    <van-field type="textarea" placeholder="请输入详细地址" rows="2" class="textarea"/>
                </div>
                <div class="mt-30 df df-c ai-c">
                    <van-button type="info" size="small" block class="next-btn" @click="checkForm">添加</van-button>
                </div>
            </div>
        </van-popup>
        <!-- 省市区 -->
        <van-popup v-model="showSelarea" round position="bottom">
            <van-area :area-list="area" @confirm="selAreaOk" @cancel="showSelarea=false"/>
        </van-popup>
    </div>
</template>
<script>
import area from "../json/area";

export default {
    data(){
        return {
            area: null,
            showForm: false,
            showSelarea: false,
            dataList: [1,2,3],
        }
    },
    created(){
        this.area = area;
    },
    methods: {
        checkForm(){
            this.addLocation();
        },
        addLocation(){
            console.log("addlocation")
        },
        // 选择省市区
        selAreaOk(o){
            let str = o[0].name + "," + o[1].name + "," + o[2].name;
            console.log(str);
            this.showSelarea = false;
        },
        back(){this.$router.go(-1);}
    }
}
</script>
<style scoped>
.lh-1{line-height:1;}
.cont{box-sizing:border-box; min-height:100vh; background:#F6F6F6;}
.list{width:6.8rem; margin:0.2rem auto 0.1rem;}
.list .item{padding:0.3rem; background:#ffffff; border-radius:0.1rem; margin-bottom:0.2rem;}
.list .mobile{padding-left:0.3rem;}
.list .txt{padding:0.3rem 0.1rem;}

.user-info{padding:0.3rem 0.2rem 0.4rem;}
.user-info .input{border-bottom:1px solid #EAEAEA;}
.user-info .next-btn{width:4rem;}
.user-info .textarea{border:1px solid #EAEAEA;}
</style>