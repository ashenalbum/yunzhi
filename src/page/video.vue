<template>
    <div class="cont df df-c ai-c">
        <van-nav-bar title="视频详情" @click-left="back" class="nav-bar">
            <template #left><van-icon name="arrow-left" color="#333333" class="c_33"/></template>
        </van-nav-bar>
        <video :src="src" controls autoplay class="video"></video>
    </div>
</template>
<script>

export default {
    data(){
        return {
            src: "",
        }
    },
    created(){
        this.src = this.$route.query.src;
    },
    methods: {
        back(){this.$router.go(-1);}
    }
}
</script>
<style scoped>
.nav-bar{width:100%;}
.video{width:100%; height:auto;}
</style>
