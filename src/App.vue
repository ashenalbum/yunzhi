<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {font-family: Avenir, Helvetica, Arial, sans-serif;-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;}

.fs_20{font-size:0.20rem;}
.fs_22{font-size:0.22rem;}
.fs_24{font-size:0.24rem;}
.fs_26{font-size:0.26rem;}
.fs_28{font-size:0.28rem;}
.fs_30{font-size:0.30rem;}
.fs_32{font-size:0.32rem;}
.fs_34{font-size:0.34rem;}
.fs_36{font-size:0.36rem;}
.fs_40{font-size:0.40rem;}
.fs_44{font-size:0.44rem;}
.fs_50{font-size:0.50rem;}
.fs_80{font-size:0.80rem;}
.fs_100{font-size:1rem;}
.fs_124{font-size:1.24rem;}
.mt-10{margin-top:0.1rem;}
.mt-20{margin-top:0.2rem;}
.mt-30{margin-top:0.3rem;}
.mt-36{margin-top:0.36rem;}
.mt-40{margin-top:0.4rem;}
.mt-46{margin-top:0.46rem;}
.mt-50{margin-top:0.50rem;}
.mt-60{margin-top:0.60rem;}
.ml-20{margin-left:0.2rem;}
.pl-10{padding-left:0.1rem;}
.pl-20{padding-left:0.2rem;}
.pl-40{padding-left:0.4rem;}
.pl-50{padding-left:0.5rem;}

.c_style{color:#6F6FFF;}
.c_o{color:#FF9C00;}
.c_red{color:#FF0000;}
.c_red1{color:#F32323;}
.c_ashen{color:#9FA9C7;}
.c_blue{color:#1989fa;}
.c_33{color:#333333;}
.c_66{color:#666666;}
.c_77{color:#777777;}
.c_88{color:#888888;}
.c_99{color:#999999;}
.c_cc{color:#cccccc;}
.c_ff{color:#FFFFFF;}
.b{font-weight:bold;}
.t-indent{text-indent:2em;}
.txt-c{text-align:center;}
.txt-r{text-align:right;}
.txt-line-t{text-decoration:line-through;}
.lh-1{line-height:1;}
.shadow{box-shadow: 0px 0px 6px 0px rgba(187, 187, 187, 0.8);}

.df{display:flex;}
.df-r{flex-direction: row;}
.df-c{flex-direction: column;}
.ai-c{align-items: center;}
.ai-e{align-items: flex-end;}
.as-c{align-self: center;}
.df-w-w{flex-wrap: wrap;}
.just-c-bet{justify-content: space-between;}
.just-c-aro{justify-content: space-around;}
.just-c-end{justify-content: flex-end;}
.just-c-sta{justify-content: start;}
.just-c-ct{justify-content: center;}
.f1{flex:1;}
.one-hide{display:-webkit-box; -webkit-box-orient:vertical; -webkit-line-clamp:1; overflow:hidden; text-overflow:ellipsis;}
.two-hide{display:-webkit-box; -webkit-box-orient:vertical; -webkit-line-clamp:2; overflow:hidden; text-overflow:ellipsis;}

.loginform .input .van-field__control{color:#ffffff;}
.loginform .input .van-field__control::-webkit-input-placeholder{color: #bbbbbb;}
.loginform .submit-btn .van-button__text{color:#6F6FFF; font-size:0.3rem;}

.nav-bar{width:100%;}
</style>
