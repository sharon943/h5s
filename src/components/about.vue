<template>
  <div>
    <div class="top">
      <headTop id="topbar" ref="scroolll" style="background: transparent"></headTop>
      <div class="text">
        <p class="bolder">欢迎在这个时代下推动发展的各路英雄加入</p>
        <p>联动知名软件商帮助商家打造全渠道解决方案</p>
      </div>
      <img src='https://merchants.oss-cn-hangzhou.aliyuncs.com/123487/store/5cb2b9cf92abf6b9df82983ad3d75469.png' alt="" ref="imgBox"  style="left:0" >
    </div>
    <div class="middle">
      <section class="module">
        <div class="head">
          <h3>公司简介</h3>
        </div>
        <div style="display: flex;justify-content: space-between">
          <p style="width: 75%;font-size: 16px;text-align:justify;text-justify:inter-ideograph;">上海澄泓信息科技有限公司成立于2012年，产品WI咖云会员系统致力于帮助商家构建品牌自己的用户运营数据中心，平台以开发和连接的姿态同各类伙伴合作，打通POS，支付，外卖商城全场景的数据接入确保数据的完整性，描绘用户画像，精准定位群组营销，并提供各种增值服务和工具。</p>
          <img src="../assets/img/CHlogo.jpg" alt="" style="width: 200px;height:96px;">
        </div>
        <img src="../assets/img/progress.jpg" alt=""  class="progress">
      </section>

      <section class="module">
        <div class="head">
          <h3>加入我们</h3>
        </div>
        <div class="foot2">
          <div v-for="item in clients">
            <img :src='item.img' alt="">
            <section>
              <h3>{{item.title}}</h3>
              <p>{{item.exp}}</p>
            </section>
          </div>
        </div>
      </section>

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
        screenWidth: window.innerWidth,
        clients:[
          {id:1,img:require('../assets/img/person1.jpg'),title:'销售团队',exp:'Email:tingxu@chenghong.cc'},
          {id:2,img:require('../assets/img/person2.jpg'),title:'开发团队',exp:'Email:zhiwei.guo@chenghong.cc'},
          {id:3,img:require('../assets/img/person3.jpg'),title:'项目运营团队',exp:'Email:super@chenghong.cc'},
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
      localStorage.index=4
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
        var box=this.$refs.scroolll
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
          aa.onmouseover=function(){
            aa.style.background='#fafafa'
          }
          aa.onmouseleave=function(){
            aa.style.background='transparent'
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

          cc.onmouseover=function(){
            cc.style.background='transparent'
          }
          dd.onmouseover=function(){
            dd.style.background='transparent'
          }
          aa.onmouseover=function(){
            aa.style.background='transparent'
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
    height:500px;position: relative;margin-bottom: 20px;overflow-x: scroll;
    img{
      width: 1920px;height:100%;position: absolute;top:0;
    }
    .text{
      position: absolute;top:0;left:0;color: #fff;bottom: 0;right:0;margin:auto;width: 80%;height:200px;text-align: center;z-index: 22;

      p.bolder{
        font-size: 30px;font-weight: bold;margin-top: 40px;
      }
      & > p:nth-of-type(2){
        margin-top: 15px;
      }
    }
  }
  .middle{
    width: 70%;margin: 0 auto;
    .module{
     overflow: hidden;position: relative;margin-top: 100px;
    .progress{
      width: 85%;margin: 80px auto 20px;display: block;
    }
      .head{
        display: flex;justify-content: space-between;margin-bottom: 35px;
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
        display: flex;justify-content: space-between;margin-top: 30px;margin-bottom: 50px;
        div{
          width: 33%;background: #fff;position: relative;
          & > img{
            display: block;width: 100%;height:100%
          }
          section{
            position: absolute;z-index: 99;top:0;bottom:0;left:0;right:0;margin: auto;height:35%;
            h3{
              margin-bottom: 15px;font-size: 18px;color: #fff;text-align: center;
            }
            p{
              font-size: 16px;color: #fff;text-align: center;
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

