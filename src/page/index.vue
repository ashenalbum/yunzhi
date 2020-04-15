<template>
    <div class="cont">
        <van-nav-bar title="首页" @click-right="toMyCenter" >
            <template #right><van-icon name="user-o" color="#333333" size="20px" /></template>
        </van-nav-bar>
        <van-swipe :autoplay="3000" class="swipe">
            <van-swipe-item v-for="(image, index) in swipeList" :key="index">
                <img :src="image" class="img" />
            </van-swipe-item>
        </van-swipe>
        <!-- <van-list v-model="loading" :finished="over" finished-text="没有更多数据了" @load="getList" class="list df df-c ai-c"> -->
        <div class="list df df-c ai-c">
            <div v-for="(item,index) in dataList" :key="index" class="item df df-r shadow">
                <img :src="item.thumb" class="img" />
                <div class="item-detail f1 df df-c just-c-bet">
                    <div>
                        <div class="fs_30 c_33 one-hide">{{item.title}}</div>
                        <div class="mt-20 c_ashen fs_26 lh-1 df df-r ai-c">
                            <span><span class="fs_34">{{item.price_f.money}}</span>云指币</span>
                            <span class="pl-10 fs_30">&</span>
                            <span class="pl-10"><span class="fs_34">{{item.price_f.point}}</span>贡献值</span>
                        </div>
                    </div>
                    <div class="df df-r just-c-end">
                        <van-button @click="pay(item)" :disabled="item.status!=0" type="info" :color="item.status==2?'#C7C7C7':'#FFA800'" size="mini">{{item.overTime||"购买"}}</van-button>
                    </div>
                </div>
            </div>
        </div>
        <!-- </van-list> -->
    </div>
</template>
<script>
import axios from "../utils/axios";

export default {
    name: "index",
    data(){
        return {
            swipeList: [],
            dataList: [],
        }
    },
    created(){
        this.getList();
    },
    methods: {
        getList(){
            axios({
                method: "post",
                url: "/goods/Apiyunzhi/indexInfo",
                data: this.formData,
            }).then((data)=>{
                if(data.err!=0){return}
                this.swipeList = data.data.advert;
                this.dataList = data.data.shop;
                this.overTime();
            });
        },
        pay(item){
            this.$router.push({path:"/order_detail", query:{id: item.id}});
        },
        toMyCenter(){
            this.$router.push("/my_center");
        },
        overTime(){
            this.cumputeTime();
            setInterval(this.cumputeTime,1000);
        },
        cumputeTime(){
            for(let i in this.dataList){
                let item = this.dataList[i];
                if(item.status!==1){continue;}
                let ot = new Date(item.coldday*1000).getTime();
                let nt = new Date().getTime();
                let time = ot - nt;
                let d = parseInt(time/86400000);
                let h = parseInt((time%86400000)/3600000);
                let m = parseInt((time%3600000)/60000);
                m = m<10?"0"+m:m;
                let s = parseInt((time%60000)/1000);
                s = s<10?"0"+s:s;
                let str = (d==0?"":(d+"天 "))+h+":"+m+":"+s;
                this.$set(this.dataList, i, {...this.dataList[i], overTime: str});
            }
        }
    }
}
</script>
<style scoped>
.swipe .van-swipe-item{width:100%; height:3.6rem;}
.swipe .van-swipe-item .img{width:100%; height:100%;}
.list{margin:0.4rem 0 0;}
.list .item{box-sizing:border-box; width:6.8rem; padding:0.3rem 0.2rem; margin-bottom:0.24rem; border-radius:0.16rem; background:#ffffff;}
.list .item:last-child{margin-bottom:0;}
.list .item .img{width:2.6rem; height:1.68rem;}
.list .item .item-detail{margin-left:0.16rem;}
</style>