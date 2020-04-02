<template>
  <div>
    <div class="top">
      <headTop id="topbar" ref="scrooll" style="background: transparent;"></headTop>
      <div class="text">
        <p class="bolder">完整的场景数据</p>
        <p class="bolder">构建用户画像  实现精准营销</p>
        <p class="normal">数据更精准  营销才更精准</p>
        <!--<section @click="istry=true" class="tryuse">申请试用</section>-->
      </div>
      <div class="bannerbox" style="left:0" ref="imgBox" @mouseout="slideAuto" @mouseenter="clearAuto">
        <section style="position: relative;width: 100%;height: 100%;">
          <img :class="['banners',{activebanner:activeB==0}]"  src="https://merchants.oss-cn-hangzhou.aliyuncs.com/webImg/banner01_AE.gif" alt="">
          <img :class="['banners',{activebanner:activeB==1}]"  src="https://merchants.oss-cn-hangzhou.aliyuncs.com/webImg/banner2.gif" alt="">
        </section>
      </div>
      <ul class="dotsbox">
        <li @click="activeB=0" :class="{activedot:activeB==0}"></li>
        <li @click="activeB=1" :class="{activedot:activeB==1}"></li>
      </ul>
      <div class="tryusebox" v-show="istry">
        <section>
          <img src="../assets/img/cancel.png" alt="" @click="istry=false">
          <h1>申请试用</h1>
          <input type="text" placeholder="联系人">
          <input type="text" placeholder="公司">
          <input type="text" placeholder="电话">
          <textarea name="" id="" cols="30" rows="10" placeholder="可以对您的具体需求进行简单描述，我们将安排专业的工作人员为您服务"></textarea>
          <p>立即申请</p>
        </section>
      </div>
    </div>
    <div class="middle">
       <section class="module">
            <div class="head">
               <h3>产品服务</h3>
              <router-link :to="{name:'productService'}">查看更多 <img src="../assets/img/gomore.png" alt="" class="more"></router-link>
            </div>
            <p>在这个流量为王的时代，商家的流量过度依赖大品牌，获新客成本不断上升效果却没有想象的好。</p>
            <p>WI咖通过提供社群式的分享工具，帮助商家快速吸粉，通过会员营销工具提升会员粘性。</p>
            <div class="foot">
              <div v-for="item in servicedata" :id="item.id" style="opacity: 0">
                <p>{{item.title}}</p>
                <img :src='item.img' alt="">
                <p>{{item.exp}}</p>
              </div>
            </div>
       </section>
      <section class="module clientsmoudle">
        <div class="head">
          <h3>客户案例</h3>
          <router-link :to="{name:'client'}">查看更多 <img src="../assets/img/gomore.png" alt="" class="more"></router-link>

        </div>
        <p>丰富的客户服务经验，为客户打造量身定制的解决方案。</p>
        <div class="foot2">
          <div v-for="item in clients" :id="item.id" style="opacity: 0">
            <img :src='item.logo' alt="">
            <img :src='item.img' alt="">
            <section>
              <h3>{{item.title}}</h3>
              <p>{{item.exp}}</p>
            </section>
          </div>
        </div>
      </section>
       <h3 style="margin-top: 0">还有他们选择了WI咖...</h3>
      <img src="../assets/img/parterns.png" alt="" style="width: 100%;display: block;margin:10px auto 0">
      <section class="module module2" style="margin-top: 70px;">
        <div class="head">
          <h3>合作伙伴</h3>
          <router-link :to="{name:'partner'}">查看更多 <img src="../assets/img/gomore.png" alt="" class="more"></router-link>
        </div>
        <p>我们期待更多伙伴的加入，准备好颠覆这个世界了吗？</p>
        <div class="foot3" id="foot4" style="left:0;">
          <section>
            <div v-for="item in clientsdata1">
              <img :src='item.img' alt="">
            </div>
          </section>
            <section>
              <div v-for="item in clientsdata2">
                <img :src='item.img' alt="">
              </div>
            </section>
         <section>
           <div v-for="item in clientsdata3">
             <img :src='item.img' alt="">
           </div>
         </section>
        </div>
        <img src="../assets/img/left.jpg" alt="" class="left" @click="goleft" id="imgleft">
        <img src="../assets/img/right.jpg" alt="" class="right" @click="goright" id="imgright">
      </section>
      <section class="module aboutus">
        <div class="head">
          <h3>关于我们</h3>
          <router-link :to="{name:'about'}">查看更多 <img src="../assets/img/gomore.png" alt="" class="more"></router-link>
        </div>
        <p style="width: 65%;">上海澄泓信息科技有限公司成立于2012年，产品WI咖云会员系统致力于帮助商家构建品牌自己的用户运营数据中心，中心以开发和连接的姿态同各类伙伴合作，打通POS，支付，外卖商城全场景的数据接入确保数据的完整性，描绘用户画像，精准定位群组营销，并提供各种增值服务和工具。</p>
      </section>
    </div>
    <section class="bottom">
      <img src="../assets/img/bottom.png" alt="">
      <div class="data">
           <div v-for="(q,i) in bottomdata" style="position: relative">
               <h2>{{q.acnum}}</h2>
               <p>{{q.topic}}</p>
             <img src="../assets/img/jia.png" alt="" v-show="i==2" style="position: absolute;top:-10px;right:30.5%;width: 15px;height:15px;">
             <img src="../assets/img/jia.png" alt="" v-show="i==1||i==3" style="position: absolute;top:-10px;right:30.5%;width:15px;height:15px;">
           </div>
      </div>
      <h3>帮助客户更成功 便是我们最大的成功</h3>
      <!--<p  class="tryuse button" @click="istry2=true">申请试用</p>-->
      <div class="tryusebox" v-show="istry2">
        <section>
          <img src="../assets/img/cancel.png" alt="" @click="istry2=false">
          <h1>申请试用</h1>
          <input type="text" placeholder="联系人">
          <input type="text" placeholder="公司">
          <input type="text" placeholder="电话">
          <textarea name=""  cols="30" rows="10" placeholder="可以对您的具体需求进行简单描述，我们将安排专业的工作人员为您服务"></textarea>
          <p>立即申请</p>
        </section>
      </div>
    </section>
    <foot></foot>
  </div>
</template>
<script>
import api from '../api/api'
import headTop from '../config/headTop'
import foot from '../config/foot'
var timer=null
export default {
  name: 'index',
  data(){
    return {
      activeB:0,istry:false,istry2:false,
      servicedata:[
        {title:"全场景数据接入",img:require('../assets/img/icon1.png'),exp:'pos | 外卖 | 支付',id:'one',},
        {title:"会员中心",img:require('../assets/img/icon2.png'),exp:'门店管理 | 营销工具',id:'two'},
        {title:"精准营销",img:require('../assets/img/icon3.png'),exp:'用户画像 | 商品画像 | 自动化行销',id:'three'},
        {title:"服务中心",img:require('../assets/img/icon4.png'),exp:'游戏 | 点评 | BI | 商城',id:'four'},
      ],
      clients:[
        {id:'clients1',logo:require('../assets/img/xichalogo.jpg'),img:require('../assets/img/xicha-m.jpg'),title:'全国最火爆的茶饮品牌',exp:'喜茶为芝士现泡茶的原创者，自创立以来，喜茶专注于呈现来自世界各地的优质茶香，让茶饮这一古老文化焕发出新的生命力'},
        {id:'clients2',logo:require('../assets/img/naixuelogo.jpg'),img:require('../assets/img/naixue-m.jpg'),title:'全国最火爆的茶饮品牌',exp:'奈雪要创造的是一种生活方式。奈雪的茶坚持为现代人提供"一杯好茶，一口软欧包"的美好生活体验，期望成为中国茶走向世界的推动者'},
        {id:'clients3',logo:require('../assets/img/songgelogo.jpg'),img:require('../assets/img/songge-m.jpg'),title:'全国最火爆的小龙虾品牌',exp:'松哥油焖大虾专注于一种口味，致力于给用户提供最地道的湖北油焖大虾，对菜品的严格把控，成就路其一夜爆红的传奇'},
      ],
      clientsdata1:[
        {id:1,title:"全场景数据接入",img:require('../assets/img/candao.png'),exp:'pos | 外卖 | 支付'},
        {id:2,title:"会员中心",img:require('../assets/img/kamen.png'),exp:'门店管理 | 营销工具'},
        {id:3,title:"精准营销",img:require('../assets/img/f&b.png'),exp:'用户画像 | 商品画像 | 自动化行销'},
        {id:4,title:"服务中心",img:require('../assets/img/sand-logo.png'),exp:'游戏 | 点评 | BI | 商城'},
      ],
      clientsdata2:[
        {id:5,title:"全场景数据接入",img:require('../assets/img/24play.png'),exp:'pos | 外卖 | 支付'},
        {id:6,title:"会员中心",img:require('../assets/img/syncpo.png'),exp:'门店管理 | 营销工具'},
        {id:7,title:"精准营销",img:require('../assets/img/come.png'),exp:'用户画像 | 商品画像 | 自动化行销'},
        {id:8,title:"服务中心",img:require('../assets/img/nine.png'),exp:'游戏 | 点评 | BI | 商城'},
      ],
      clientsdata3:[
        {id:9,title:"全场景数据接入",img:require('../assets/img/wendian.png'),exp:'pos | 外卖 | 支付'},
        {id:10,title:"会员中心",img:require('../assets/img/yinbao.png'),exp:'门店管理 | 营销工具'},
        {id:11,title:"精准营销",img:require('../assets/img/maji.png'),exp:'用户画像 | 商品画像 | 自动化行销'},
        {id:12,title:"服务中心",img:require('../assets/img/fec.png'),exp:'游戏 | 点评 | BI | 商城'},
      ],
      bottomdata:[{num:2011,topic:'创建于',acnum:1980},{num:119,topic:'服务项目',acnum:100},{num:117,topic:'会员增加值',acnum:100},{num:99,topic:'信用值',acnum:80}],
      activeindex:0,loading:true,person:false,screenWidth: window.innerWidth,timer:false,
      // top:['数据面板','服务面板']
       top:['数据面板']
    }
  },
  components:{
    headTop,foot
  },
  created(){
    // this.$parent.$el.scrollTop=0
  },
  mounted(){
    this.$parent.$el.scrollTop=0

    this.slideAuto()
    const that = this
    window.addEventListener('scroll', that.handleScroll,true)
    // console.log(localStorage.index)
    this.$nextTick(() =>{
      // 获取图片（或外层框）
      let imgBox = this.$refs.imgBox
      if(this.screenWidth>1800){
        imgBox.style.left=0
      }else{
        imgBox.style.left =-(1920-this.screenWidth)/2 + 'px'
      }
    })

    var left=document.getElementById('foot4')
    var imgleft=document.getElementById('imgleft')
    var imgright=document.getElementById('imgright')
    imgleft.style.bottom=(parseFloat(290-left.offsetHeight)/2+11)+'px'
    imgright.style.bottom=(parseFloat(290-left.offsetHeight)/2+11)+'px'
    window.onresize =()=>{
        that.screenWidth = window.innerWidth
        imgleft.style.bottom=(parseFloat(290-left.offsetHeight)/2+11)+'px'
        imgright.style.bottom=(parseFloat(290-left.offsetHeight)/2+11)+'px'
        this.$nextTick(() =>{
          let imgBox = that.$refs.imgBox
          if(that.screenWidth>1800){
            imgBox.style.left=0
          }else{
            imgBox.style.left = -(1920-that.screenWidth)/2 + 'px'
          }
        })
    }
  },
  methods:{
    loadingnum(){
      for(var i=0;i<this.bottomdata.length;i++){
        if(this.bottomdata[i].acnum<this.bottomdata[i].num){
          this.easeInOut(this.bottomdata[i].acnum,this.bottomdata[i].num,i)
        }
      }
    },
    easeInOut(min,max,i){
      const that=this
      var t = min;
      var obj={};
switch (i) {
  case 0:obj={acnum:1900,topic:'创建于',num:2011};break;
  case 1:obj={acnum:100,topic:'服务项目',num:119};break;
  case 2:obj={acnum:100,topic:'会员增加值',num:117};break;
  case 3:obj={acnum:80,topic:'信用值',num:99};break;

}
      var interval = setInterval(function(){
        t += 1;
        obj.acnum=t
        that.$set(that.bottomdata,i,obj)
        if(t >max){
          clearInterval(interval);
        }
      }, 30);

    },
    handleScroll () {
      const that=this
      var scrollTop=that.$parent.$el.scrollTop
      // console.log(scrollTop)
      var box=that.$refs.scrooll
      var vklogo=document.getElementById('vklogo')
      var topbox=document.getElementById('topbox')
      var pingtai=document.getElementById('pingtai')
      var aa=document.getElementById('firpage')
      var bb=document.getElementById('secpage')
      var cc=document.getElementById('thipage')
      var dd=document.getElementById('fourpage')
      var ee=document.getElementById('fivepage')
      var login=document.getElementById('login')
      var loginbox=document.getElementById('loginbox')
      if(scrollTop>236){
        that.appear()
      }
      if(scrollTop>1000){
        that.appear2()
      }
      if(scrollTop>2400){
        that.loadingnum()
      }
      if(scrollTop>610){
        topbox.style.background='#fff'
        topbox.style.borderBottom='1px solid #eee'
        pingtai.style.color='rgb(74,80,95)'
        aa.style.color='rgb(74,80,95)'
        bb.style.color='rgb(74,80,95)'
        cc.style.color='rgb(74,80,95)'
        dd.style.color='rgb(74,80,95)'
        ee.style.color='rgb(74,80,95)'
        // login.style.color='rgb(74,80,95)'
        loginbox.style.background='#fafafa'
        loginbox.style.boxShadow='0 5px 10px 2px rgba(0,0,0,0.05)'
        vklogo.src=require('../assets/img/logo_.png')
        bb.onmouseover=function(){
          bb.style.background='#fafafa'
        }
        bb.onmouseleave=function(){
          bb.style.background='transparent'
        }
        cc.onmouseover=function(){
          cc.style.background='#fafafa'
        }
        cc.onmouseleave=function(){
          cc.style.background='transparent'
        }
        dd.onmouseover=function(){
          dd.style.background='#fafafa'
        }
        dd.onmouseleave=function(){
          dd.style.background='transparent'
        }
        ee.onmouseover=function(){
          ee.style.background='#fafafa'
        }
        ee.onmouseleave=function(){
          ee.style.background='transparent'
        }

      }else{
        topbox.style.background='transparent'
        topbox.style.borderBottom='1px solid rgba(250,250,250,0.15)'
        pingtai.style.color='#fff'
        aa.style.color='#fff'
        bb.style.color='#fff'
        cc.style.color='#fff'
        dd.style.color='#fff'
        ee.style.color='#fff'
        // login.style.color='#fff'
        loginbox.style.background='rgba(255, 255, 255, 0.17)'
        vklogo.src=require('../assets/img/logo.png')
       bb.onmouseover=function(){
          bb.style.background='transparent'
      }

      cc.onmouseover=function(){
        cc.style.background='transparent'
      }
      dd.onmouseover=function(){
        dd.style.background='transparent'
      }
      ee.onmouseover=function(){
        ee.style.background='transparent'
      }
      }
    },
    appear(){
      var pic=document.getElementById('one')
      var pic2=document.getElementById('two')
      var pic3=document.getElementById('three')
      var pic4=document.getElementById('four')
      pic.style.opacity=1
      pic2.style.opacity=1
      pic3.style.opacity=1
      pic4.style.opacity=1
      pic.style.visibility='visible'
      pic2.style.visibility='visible'
      pic3.style.visibility='visible'
      pic4.style.visibility='visible'
      pic.style.transform='translateY(-50px) scale(1)'
      pic2.style.transform='translateY(-50px) scale(1)'
      pic3.style.transform='translateY(-50px) scale(1)'
      pic4.style.transform='translateY(-50px) scale(1)'
      pic.style.transition='transform 0.6s ease 0s, opacity 1.4s ease 0s'
      pic2.style.transition='transform 1.3s ease 0s, opacity 1.4s ease 0.2s'
      pic3.style.transition='transform 2s ease 0s, opacity 1.4s ease 0.4s'
      pic4.style.transition='transform 3s ease 0s, opacity 1.4s ease 0.7s'
    },
    appear2(){
      var pic=document.getElementById('clients1')
      var pic2=document.getElementById('clients2')
      var pic3=document.getElementById('clients3')
      pic.style.opacity=1
      pic2.style.opacity=1
      pic3.style.opacity=1
      pic.style.visibility='visible'
      pic2.style.visibility='visible'
      pic3.style.visibility='visible'
      pic.style.transform='translateY(-50px) scale(1)'
      pic2.style.transform='translateY(-50px) scale(1)'
      pic3.style.transform='translateY(-50px) scale(1)'
      pic.style.transition='transform 0.6s ease 0s, opacity 1.4s ease 0s'
      pic2.style.transition='transform 1.3s ease 0s, opacity 1.4s ease 0.2s'
      pic3.style.transition='transform 2s ease 0s, opacity 1.4s ease 0.4s'
    },
    getElevatorList(num){
      var box=document.getElementById('foot4')
      // if(box.style.left=='0px'){
      //   box.style.left-=parseFloat(box.style.left.substring(0,box.style.left.length-2))-box.clientWidth/4+'px'
      // }else{
      //   box.style.left=parseFloat(box.style.left.substring(0,box.style.left.length-2))+box.clientWidth/4+'px'
      // }
      console.log(num)
      const that=this
      setTimeout(function () {
        that.activeB=num
        console.log(num)
      },3000)
      num++
    },
    slideAuto(){
      var that=this;
      timer=setInterval(function(){
        that.clickRight();
      },5000)
    },
    clearAuto(){
      clearInterval(timer)
    },
    clickRight(){
      if(this.activeB==1){
        this.activeB=0;
      }else{
        this.activeB++;
      }
    },
    goleft(){
      var box=document.getElementById('foot4')
      if(box.style.left=='0px'){
        return
      }else{
        box.style.left=parseFloat(box.style.left.substring(0,box.style.left.length-2))+box.clientWidth/3+'px'
      }
    },
    goright(){
      var box=document.getElementById('foot4')
      if(parseFloat(box.style.left.substring(0,box.style.left.length-2))+box.clientWidth==box.clientWidth/3){
        return
      }else{
        box.style.left=parseFloat(box.style.left.substring(0,box.style.left.length-2))-box.clientWidth/3+'px'
      }
    },
    exit(){
      this.loading=false
      fetch(api.baseUrl+'/api/employee/logout',{
        method:'GET',
        headers:{
          'Content-Type':'application/json',
          accessToken:localStorage.accessToken,
        },
      }).then(r=>r.json()).then(d=> {
       if(d.code==200){
         this.$message.success('退出成功')
         this.$router.push({name:'login'})
       }else{
         this.$message.error(d.message)
       }
      })
    }
  },
  destroyed(){
    window.removeEventListener('scroll', this.handleScroll,true)

  },
  watch:{
    screenWidth(val){
      // 为了避免频繁触发resize函数导致页面卡顿，使用定时器
      if(!this.timer){
        // 一旦监听到的screenWidth值改变，就将其重新赋给data里的screenWidth
        this.timer = true
        let that = this
        setTimeout(function(){
          // 打印screenWidth变化的值
          let imgBox = that.$refs.imgBox
          if(this.screenWidth>1800){
            imgBox.style.left=0
          }else{
            imgBox.style.left =-(1920-that.screenWidth)/2 + 'px'
          }
          that.timer = false
        },400)
      }
    }
  }
}
</script>
<style scoped lang="scss">
  @media screen and ( max-width: 1460px )  {
    .aboutus{
      margin-top: 50px!important;
    }
    .clientsmoudle{
      margin-top: 45px!important;
    }
  }
  @media screen and ( min-width: 1450px )  {
    .aboutus{
      margin-top: 90px!important;
    }
.clientsmoudle{
  margin-top: 55px!important;
}
  }
  .tryuse{
    margin-top: 120px;background: #ff4a4a;width: 120px;text-align: center;height: 40px;line-height: 40px;font-size: 16px;font-weight: bold;color:#fff
  }
.top{
  width: 100%;
  height: 660px;
  position: relative; overflow:hidden;
  zoom: 1;
  .tryusebox{
    position: fixed;
    top:280px;background: #fff;left: 0;right:0;margin-left: auto;margin-right: auto;z-index: 33;width: 400px;border:1px solid #eee;box-shadow: 0 0 20px 2px rgba(0,0,0,0.05);
    section{
      position: relative;padding: 25px;
      img{
        width: 20px;height:20px;position: absolute;right:10px;top:10px;
      }
      h1{
        font-size: 26px;
      }
      input{
        width: 100%;height:40px;line-height: 40px;margin:25px auto 0;outline: none;border:none;background: #f7f7f7;padding-left: 10px;

      }
      textarea{
        resize: none;width: 100%;
        height: 100px;margin:25px auto 0;border:none;background: #f7f7f7;padding: 10px;
      }
      p{
        font-size: 16px;
        width: 100%;height:40px;line-height: 40px;margin:15px auto 0;background: #ff4a4a;color:#fff;font-weight: bold;text-align: center;
      }
    }
  }
  .dotsbox{
    position: absolute;width: 170px;height:20px;bottom:20px;left:0;right:0;margin-left: auto;margin-right: auto;z-index: 20;display: flex;justify-content: space-between;
    li{
      width: 80px;height:4px;background: rgba(255,255,255,0.2);
    }
    li.activedot{
      background: rgba(255,255,255,0.4);
    }
  }
  .bannerbox{
    width: 1920px;position: absolute;top:0;height: 100%;
    background-size: 1920px 640px;z-index: 10;

    .banners{
      width: 1920px;height:100%;background-position: 100%;top:0;opacity: 0;transition-duration:2s;position: absolute;left:0;z-index: 22;
    }
    img.activebanner{
      opacity: 1;ransition-duration: 2s;z-index: 23;
    }
  }

  .text{
    position: absolute;top:180px;left:12%;color: #fff;z-index: 19;
    .normal{
      margin-top: 20px;font-size: 16px;
    }
    p.bolder{
      font-size: 30px;font-weight: bold;margin-bottom: 10px;
    }


  }
}
.middle{
  width: 70%;margin: 0 auto;
  & > h3{
    font-size: 18px;
  }
  .module{
    margin-top: 100px;overflow: hidden;position: relative;

    .head{
      display: flex;justify-content: space-between;margin-bottom: 20px;
      h3{
        line-height: 40px;font-size: 26px;
      }
      a{
        border:1px solid rgb(74,80,95);width: 120px;color:rgb(74,80,95);
        height: 35px;font-weight: bold;
        padding-left: 15px;position: relative;
        line-height: 35px;
        .more{
          position: absolute;top:15px;
          right: 15px;
        }
      }
    }
    p{
      color:#a0a0a0;font-size: 16px;margin-bottom: 5px;
    }
    .foot{
      display: flex;justify-content: space-between;margin-top: 85px;
      div{
        width: 24%;background: #FAFAFA;text-align: center;
        p{
          margin-top: 60px;font-size: 18px;font-weight: bold;color:rgb(74,80,95);
        }
        & > p:nth-of-type(2){
         margin-bottom: 60px;font-size: 16px;font-weight: normal;margin-top: 50px;
        }
        img{
          width: 110px;
          height: 110px;margin-top: 50px;
        }
      }
    }
    .foot2{
      display: flex;justify-content: space-between;margin-top: 85px;
      div{
        width: 32%;background: #fff;border:1px solid #f7f7f7;
        & > img:nth-of-type(1){
          display: block;margin: 0 auto;
        }
        & > img:nth-of-type(2){
          width: 100%;margin-bottom: 15px;
        }
        section{
          padding:0 15px 20px;
          h3{
            margin-bottom: 15px;font-size: 18px;
          }
          p{
            font-size: 16px;
          }
        }
      }
    }
    .foot3{
      display: flex;justify-content: space-between;margin-top: 30px;width: 100%;position: relative;
      div{
        width: 24%;background: #fff;text-align: center;border:1px solid #f7f7f7;
        img{
          width: 100%;height: 100%;
        }
      }

    }
    .left{
      position: absolute;left:0;bottom:75px;opacity: 0.3;
    }
    .right{
      position: absolute;left:98%;bottom:180px;opacity: 0.3;
    }
    .left:hover{
      opacity: 1;
    }
    .right:hover{
      opacity: 1;
    }
    #foot4{
      width: 300%;position: absolute;top:90px;
      display: flex;justify-content: space-between;
      section{
        width: 33.3%;display: flex;justify-content: space-between;
        div{
          width: 23.5%;background: #fff;text-align: center;border:1px solid #f7f7f7;
          img{

          }
        }
      }



    }
  }
  .module2{
    height:290px;
  }

}
  .bottom{
    width: 100%;height:250px;margin-top: 80px;position: relative;
    img{
      width: 100%;height:100%;
    }
    .data{
      display: flex;justify-content: space-between;background: #fff;z-index: 2;padding-top: 35px;text-align: center;
      width: 70%;height:110px;border:1px solid #f7f7f7;position: absolute;top:-55px;left:0;right:0;margin-left: auto;margin-right: auto;
      & > div{
        width: 25%;border-right: 1px solid #f7f7f7;height: 30px;
        h2{
          color:#a0a0a0;font-size: 28px;margin-top: -15px;font-weight: 500;
        }
        p{
          color:#a0a0a0;font-size: 12px;
        }
      }
      & > div:last-of-type{
        border-right: none;
      }
    }
    h3{
      color:#a0a0a0;font-size: 20px;
      position: absolute;left:0;right:0;margin-left: auto;margin-right: auto;bottom:120px;display: block;width:390px;text-align: center;
    }
    p.button{
      position: absolute;left:0;right:0;margin-left: auto;margin-right: auto;bottom:50px;
    }
    .tryusebox{
      position: fixed;
      bottom:220px;background: #fff;left: 0;right:0;margin-left: auto;margin-right: auto;z-index: 33;width: 400px;border:1px solid #eee;box-shadow: 0 0 20px 2px rgba(0,0,0,0.05);
      section{
        position: relative;padding: 25px;
        img{
          width: 20px;height:20px;position: absolute;right:10px;top:10px;
        }
        h1{
          font-size: 26px;
        }
        input{
          width: 100%;height:40px;line-height: 40px;margin:25px auto 0;outline: none;border:none;background: #f7f7f7;padding-left: 10px;

        }
        textarea{
          resize: none;width: 100%;
          height: 100px;margin:25px auto 0;border:none;background: #f7f7f7;padding: 10px;
        }
        p{
          font-size: 16px;
          width: 100%;height:40px;line-height: 40px;margin:15px auto 0;background: #ff4a4a;color:#fff;font-weight: bold;text-align: center;
        }
      }
    }
  }
</style>

