<template>
  <div>
    <div class="top">
      <headTop id="topbar" ref="scrooll" style="background: transparent"></headTop>
      <div class="text">
        <p class="bolder">现在就加入WI咖大家庭</p>
        <!--<section @click="istry=true">申请试用</section>-->
      </div>
      <img src="https://merchants.oss-cn-hangzhou.aliyuncs.com/123487/store/a2d7db6edc297c9aba8b65629b788995.png" alt="" ref="imgBox"  style="left:0" >
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
          <h3>客户案例</h3>
        </div>
        <p>丰富的客户服务经验，为客户打造量身定制的解决方案。</p>
        <div class="foot2">
          <div v-for="item in clients">
            <img :src='item.logo' alt="">
            <img :src='item.img' alt="">
            <section>
              <h3>{{item.title}}</h3>
              <p>{{item.exp}}</p>
            </section>

          </div>
        </div>
      </section>
      <h3 style="margin-top: 50px;">还有他们选择了WI咖...</h3>
      <img src="../assets/img/parterns.png" alt="" style="width: 100%;display: block;margin:0 auto 30px">

    </div>
    <foot></foot>
  </div>
</template>
<script>
  import api from '../api/api'
  import headTop from '../config/headTop'
  import foot from '../config/foot'
  export default {
    name: 'index',
    data(){
      return {
        istry:false,screenWidth: window.innerWidth,
        servicedata:[
          {id:1,title:"全场景数据接入",img:require('../assets/img/icon1.png'),exp:'pos | 外卖 | 支付'},
          {id:2,title:"会员中心",img:require('../assets/img/icon2.png'),exp:'门店管理 | 营销工具'},
          {id:3,title:"精准营销",img:require('../assets/img/icon3.png'),exp:'用户画像 | 商品画像 | 自动化行销'},
          {id:4,title:"服务中心",img:require('../assets/img/icon4.png'),exp:'游戏 | 点评 | BI | 商城'},
        ],
        clients:[
          {id:1,logo:require('../assets/img/xichalogo.jpg'),img:require('../assets/img/xicha-m.jpg'),title:'全国最火爆的茶饮品牌',exp:'喜茶为芝士现泡茶的原创者，自创立以来，喜茶专注于呈现来自世界各地的优质茶香，让茶饮这一古老文化焕发出新的生命力'},
          {id:2,logo:require('../assets/img/naixuelogo.jpg'),img:require('../assets/img/naixue-m.jpg'),title:'全国最火爆的茶饮品牌',exp:'奈雪要创造的是一种生活方式。奈雪的茶坚持为现代人提供"一杯好茶，一口软欧包"的美好生活体验，期望成为中国茶走向世界的推动者'},
          {id:3,logo:require('../assets/img/songgelogo.jpg'),img:require('../assets/img/songge-m.jpg'),title:'全国最火爆的小龙虾品牌',exp:'松哥油焖大虾专注于一种口味，致力于给用户提供最地道的湖北油焖大虾，对菜品的严格把控，成就路其一夜爆红的传奇'},
        ],
        clientsdata:[
          {id:1,title:"全场景数据接入",img:require('../assets/img/candao.png'),exp:'pos | 外卖 | 支付'},
          {id:2,title:"会员中心",img:require('../assets/img/kamen.png'),exp:'门店管理 | 营销工具'},
          {id:3,title:"精准营销",img:require('../assets/img/f&b.png'),exp:'用户画像 | 商品画像 | 自动化行销'},
          {id:4,title:"服务中心",img:require('../assets/img/sand-logo.png'),exp:'游戏 | 点评 | BI | 商城'},
          {id:5,title:"全场景数据接入",img:require('../assets/img/24play.png'),exp:'pos | 外卖 | 支付'},
          {id:6,title:"会员中心",img:require('../assets/img/syncpo.png'),exp:'门店管理 | 营销工具'},
          {id:7,title:"精准营销",img:require('../assets/img/come.png'),exp:'用户画像 | 商品画像 | 自动化行销'},
          {id:8,title:"服务中心",img:require('../assets/img/nine.png'),exp:'游戏 | 点评 | BI | 商城'},
          {id:9,title:"全场景数据接入",img:require('../assets/img/wendian.png'),exp:'pos | 外卖 | 支付'},
          {id:10,title:"会员中心",img:require('../assets/img/yinbao.png'),exp:'门店管理 | 营销工具'},
          {id:11,title:"精准营销",img:require('../assets/img/maji.png'),exp:'用户画像 | 商品画像 | 自动化行销'},
          {id:12,title:"服务中心",img:require('../assets/img/xichalogo.jpg'),exp:'游戏 | 点评 | BI | 商城'},
          {id:13,title:"全场景数据接入",img:require('../assets/img/naixuelogo.jpg'),exp:'pos | 外卖 | 支付'},
          {id:14,title:"会员中心",img:require('../assets/img/songgelogo.jpg'),exp:'门店管理 | 营销工具'},
          {id:15,title:"精准营销",img:require('../assets/img/fec.png'),exp:'用户画像 | 商品画像 | 自动化行销'},
          {id:16,title:"服务中心",img:require('../assets/img/candao.png'),exp:'游戏 | 点评 | BI | 商城'},
        ],
        bottomdata:[{num:2012,topic:'创建于'},{num:'120',topic:'服务项目'},{num:118.2,topic:'会员增加值'},{num:100,topic:'信用值'}],
        activeindex:0,loading:true,person:false,
        // top:['数据面板','服务面板']
        top:['数据面板']
      }
    },
    components:{
      headTop,foot
    },
    created(){
    this.$parent.$el.scrollTop=0
    },
    mounted(){
      localStorage.index=2
      const that = this
      window.addEventListener('scroll', that.handleScroll,true)

      this.$nextTick(() =>{
        // 获取图片（或外层框）
        let imgBox = this.$refs.imgBox
          imgBox.style.left =-(1920-this.screenWidth)/2 + 'px'
      })
      window.onresize =()=>{
        that.screenWidth = window.innerWidth
        console.log(that.screenWidth)
        this.$nextTick(() =>{
          let imgBox = that.$refs.imgBox
            imgBox.style.left = -(1920-that.screenWidth)/2 + 'px'
        })

      }

    },
    methods:{
      getElevatorList(){
        var box=document.getElementById('foot4')
        // if(box.style.left=='0px'){
        //   box.style.left-=parseFloat(box.style.left.substring(0,box.style.left.length-2))-box.clientWidth/4+'px'
        // }else{
        //   box.style.left=parseFloat(box.style.left.substring(0,box.style.left.length-2))+box.clientWidth/4+'px'
        // }
      },
      handleScroll () {
        // var scrollTop=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop
        var scrollTop=this.$parent.$el.scrollTop
        var box=this.$refs.scrooll
        var vklogo=document.getElementById('vklogo')
        var topbox=document.getElementById('topbox')
        var pingtai=document.getElementById('pingtai')
        var aa=document.getElementById('firpage')
        var bb=document.getElementById('secpage')
        var cc=document.getElementById('thipage')
        var dd=document.getElementById('fourpage')
        var ee=document.getElementById('fivepage')
        // var login=document.getElementById('login')
        var loginbox=document.getElementById('loginbox')
        if(scrollTop>480){
          // box.$el.style.background='#000'
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
          aa.onmouseover=function(){
            aa.style.background='#fafafa'
          }
          aa.onmouseleave=function(){
            aa.style.background='transparent'
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
          // box.$el.style.background='transparent'
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

          aa.onmouseover=function(){
            aa.style.background='transparent'
          }
          dd.onmouseover=function(){
            dd.style.background='transparent'
          }
          ee.onmouseover=function(){
            ee.style.background='transparent'
          }
        }

      },
      goleft(){
        var box=document.getElementById('foot4')
        if(box.style.left=='0px'){
          return
        }else{
          box.style.left=parseFloat(box.style.left.substring(0,box.style.left.length-2))+box.clientWidth/4+'px'
        }
      },
      goright(){
        var box=document.getElementById('foot4')
        if(parseFloat(box.style.left.substring(0,box.style.left.length-2))+box.clientWidth==box.clientWidth/4){
          return
        }else{
          box.style.left=parseFloat(box.style.left.substring(0,box.style.left.length-2))-box.clientWidth/4+'px'
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
              imgBox.style.left =-(1920-that.screenWidth)/2 + 'px'
            that.timer = false
          },400)
        }
      }
    }

  }
</script>
<style scoped lang="scss">
  .top{
    min-width: 1200px;
    height:500px;position: relative;overflow-x: scroll;overflow-y: hidden;
    .tryusebox{
      position: fixed;
      top:200px;background: #fff;left: 0;right:0;margin-left: auto;margin-right: auto;z-index: 33;width: 400px;border:1px solid #eee;box-shadow: 0 0 20px 2px rgba(0,0,0,0.05);
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
    img{
      width: 1920px;height:100%;position: absolute;top:0;
    }
    .text{
      position: absolute;top:0;left:0;color: #fff;bottom: 0;right:0;margin:auto;width: 80%;height:200px;text-align: center;z-index: 22;
      p.bolder{
        font-size: 30px;font-weight: bold;margin-top: 40px;
      }
      section{
        margin: 50px auto 0;background: #ff4a4a;width: 120px;text-align: center;height: 40px;line-height: 40px;font-size: 16px;font-weight: bold;color:#fff
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
        p{
          border:1px solid rgb(74,80,95);width: 120px;color:rgb(74,80,95);
          height: 35px;font-weight: bold;
          text-align: center;
          line-height: 35px;
        }
      }
      p{
        color:#a0a0a0;margin-bottom: 5px;
      }

        .foot{
          display: flex;justify-content: space-between;margin-top: 35px;
          div{
            width: 24%;background: #FAFAFA;text-align: center;
            p{
              margin-top: 40px;font-size: 18px;font-weight: bold;color:rgb(74,80,95);
            }
            & > p:nth-of-type(2){
              margin-bottom: 40px;font-size: 16px;font-weight: normal;
            }
            img{
              width: 110px;
              height: 110px;margin-top: 35px;
            }
          }

        }
      .foot2{
        display: flex;justify-content: space-between;margin-top: 30px;
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
        position: absolute;left:0;top:50px;bottom: 0;margin-top: auto;margin-bottom: auto;
      }
      .right{
        position: absolute;left:98%;top:50px;bottom: 0;margin-top: auto;margin-bottom: auto;
      }
      #foot4{
        width: 400%;position: absolute;top:30px;
        display: flex;justify-content: space-between;
        div{
          width: 24%;background: #fff;text-align: center;border:1px solid #f7f7f7;
          img{
            width: 100%;height: 100%;
          }
        }

      }
    }
    .module2{
      height:230px;
    }

  }
  .bottom{
    width: 100%;height:200px;margin-top: 80px;position: relative;
    img{
      width: 100%;height:100%;
    }
    .data{
      display: flex;justify-content: space-between;background: #fff;z-index: 2;padding-top: 35px;text-align: center;
      width: 70%;height:100px;border:1px solid #f7f7f7;position: absolute;top:-50px;left:0;right:0;margin-left: auto;margin-right: auto;
      & > div{
        width: 25%;border-right: 1px solid #f7f7f7;height: 30px;
        h2{
          color:#a0a0a0;font-size: 28px;margin-top: -20px;font-weight: 500;
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
      position: absolute;left:0;right:0;margin-left: auto;margin-right: auto;bottom:70px;display: block;width:390px;text-align: center;
    }
    p.button{
      position: absolute;left:0;right:0;margin-left: auto;margin-right: auto;bottom:10px;display: block;width:80px;height: 35px;background: #ff4a4a;line-height: 35px;text-align: center;color:#fff
    }
  }
</style>

