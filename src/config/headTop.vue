<template>
  <section>
  <div class="header-container" id="topbox" style="borderBottom:1px solid rgba(250,250,250,0.15)">
     <section class="left">
        <img src="../assets/img/logo.png" alt="" class="logo" id="vklogo">
      	<span style="font-size:16px;color: #fff;line-height: 60px;" id="pingtai"> WI咖精确用户数据运营平台</span>
     </section>
     <section class="right" >
       <div>
         <router-link :to="{name:'index'}" :class="['menu',{active:activeindex==0}]" id="firpage" @click.native="menufir()" style="color:#fff;">首页</router-link>
          <p v-show="activeindex==0"></p>
       </div>
       <div>
         <router-link :to="{name:'productService'}" :class="['menu',{active:activeindex==1}]" id="secpage" @click.native="menusec()">产品服务</router-link>
         <p v-show="activeindex==1"></p>
       </div>
       <div>
         <router-link :to="{name:'client'}" :class="['menu',{active:activeindex==2}]"  id="thipage" @click.native="menuthi()">客户方案</router-link>
         <p v-show="activeindex==2"></p>
       </div>
       <div>
         <router-link :to="{name:'partner'}" :class="['menu',{active:activeindex==3}]" id="fourpage" @click.native="menufour()">合作伙伴</router-link>
         <p v-show="activeindex==3"></p>
       </div>
       <div>
         <router-link :to="{name:'about'}" :class="['menu',{active:activeindex==4}]" id="fivepage" @click.native="menufive()">关于我们</router-link>
         <p v-show="activeindex==4"></p>
       </div>
       <!--<div class="login" @click="loginshow=!loginshow" id="login">登录</div>-->
       <div class="loginbox" v-show="loginshow" id="loginbox">
         <input type="text" placeholder="账号">
         <input type="text" placeholder="密码">
         <p>登陆</p>
       </div>

     </section>
   </div>
  </section>
</template>
<script>
  import api from '../api/api'
  export default{
    data(){
       return{
         menu:['首页','会员管理','营销工具','统计报表'],shop_view:false,member_view:false,Pic_view:false,market_view:false,report_view:false,
         activeindex:localStorage.index,moreview:false,name:'',logo_src:'',more_view:false,goods_view:false,loginshow:false,activeindexx:0,
       }
    },
    mounted(){
      switch (this.$route.path) {
        case '/':localStorage.index=0;this.activeindex=0;break;
        case '/productService':localStorage.index=1;this.activeindex=1;break;
        case '/client':localStorage.index=2;this.activeindex=2;break;
        case '/partner':localStorage.index=3;this.activeindex=3;break;
        case '/about':localStorage.index=4;this.activeindex=4;break;
      }

    },
    created(){

      // const that = this
      // window.addEventListener('scroll', that.handleScroll,true)

    },

    methods:{
      handleScroll(){
        // console.log(11111)
        // const that=this
        // // var scrollTop=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop
        // var scrollTop=that.$parent.$el.scrollTop
        // var box=that.$refs.scrooll
        // console.log(box)
        // console.log(scrollTop)
        // if(scrollTop>700){
        //   box.style.background='#000'
        // }else{
        //   box.style.background='transparent'
        // }
      },
      menufir(){
        localStorage.index=0,this.activeindex=0
      },
      menusec(){
        localStorage.index=1,this.activeindex=1
      },
      menuthi(){
        localStorage.index=2,this.activeindex=2
      },
      menufour(){
        localStorage.index=3,this.activeindex=3
      },
      menufive(){
        localStorage.index=4,this.activeindex=4
      },

      q(c,o){
        console.log(c)
        if(c==5){
          this.loginshow=!this.loginshow
        }
      }
    },
    watch: {
      activeindexx: 'q'
    }
  }
</script>
<style scoped lang="scss">
.header-container{
	width:100%;
	height:60px; position: fixed;top:0px;left:0px;z-index: 92;
	background-color:transparent;
  display: flex;
  justify-content: space-between;
	.left{
	height:100%;
	display:flex;
  justify-content: space-between;
    color: #9B9B9B;
    line-height: 60px;
    .logo{
      width:49px;
      height:28px;
      margin-top: 13.5px;
      margin-left: 20px;
      margin-right: 20px;
    }
    h1{
      font-size: 20px;
      color: #000;
      margin-right: 20px;font-family: "zy";font-weight: normal;
    }
    span{
      font-size: 16px;color:#000;
    }
    }
    .right{
      width:auto;
	    height:100%;
      display:flex;position: relative;
      justify-content: space-between;padding:0  0 0 20px;
      div{
        p{
          width: 30px;height:4px;background: #ff4a4a;margin:-4px auto 0;
        }
        a{
          font-size: 16px;
          color: #fff;width:150px;
          line-height: 60px;font-family: "zy";text-align: center;display: block;
          background: transparent;cursor: pointer;
        }
        /*a.router-link-exact-active{*/
          /*border-bottom:1px solid #ff4a4a;padding-bottom: 20px;*/
        /*}*/
        a:hover{
          background: rgba(255,255,255,0.17);
        }
        a.router-link-exact-active:hover{
          background:transparent;
        }
      }

      .login{
        width:60px;background: rgba(255,255,255,0.17);line-height: 60px;font-size: 16px; color: #fff;text-align: center;cursor: pointer;
      }
    }
  .loginbox{
    width: 350px;background: rgba(255,255,255,0.17);position: absolute;right:0px;top:60px;
    input{
      width: 300px;display: block;margin:30px auto 0;height:40px;line-height: 40px;padding-left: 10px;outline: none;
    }
    & > p{
      width: 300px!important;display: block;margin:50px auto 30px!important;background: #ff4a4a;
      height: 40px !important;line-height: 40px;text-align: center;color:#fff;
      font-weight: bold;
    }
  }
}

</style>
