<template>
  <div>
    <div class="top" >
      <headTop id="topbar" ref="scrooll" style="background: transparent"></headTop>
      <div class="text">
        <p class="bolder">品牌构建自己的精准用户运营数据中心</p>
        <!--<section @click="istry=true">申请试用</section>-->
      </div>
      <img src="https://merchants.oss-cn-hangzhou.aliyuncs.com/123487/store/7b4a797d5fa44c5010ea22ce35d86079.png" alt="" ref="imgBox"  style="left:0" >
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
        </div>
        <div class="footer">
          <div v-for="item in servicedata">
            <img :src='item.img' alt="">
            <ul>
              <p class="title">{{item.title}}</p>
              <p class="title">{{item.exp}}</p>
              <p>{{item.subtitle}}</p>
              <li v-for="q in item.tips">{{q}}</li>
            </ul>
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
        istry:false,screenWidth: window.innerWidth,
        servicedata:[
          {id:1,title:"全场景数据接入",img:require('../assets/img/icon1.png'),exp:'pos | 外卖 | 支付',subtitle:'WI咖精准用户数据运营平台支持全场景数据接入，打通线下POS系统，移动支付，外卖数据，自建商城等数据',tips:['POS-P其中包涵了FEC，富必达，大家来，银豹，麻吉等','外卖-数据涵盖了饿了么，美团，自建外卖数据','支付-移动支付涵盖了主流等微信支付和支付宝支付两大系统','我们还支持各大平台自建商场的数据接入']},
          {id:2,title:"会员中心",img:require('../assets/img/icon2.png'),exp:'门店管理 | 营销工具',subtitle:'WI咖会员中心是会员档案、会员等级、经验值、积分、权益与优惠券管理这些忠诚度管理的经典实践，依然是会员系统的核心所在',tips:['门店管理-灵活的门店管理模式，满足直营，加盟等经营模式。门店拥有独立的管理后台，门店可以根据运营实际制定个性化的营销活动并统计相关的运营数据报表。','营销工具-涵盖了拉新，关怀，留存三大体系构建完整的会员成长体系。丰富的等级规则，裂变营销，独立的卡券中心点等营销功能帮助品牌提升会员关怀能力']},
          {id:3,title:"精准营销",img:require('../assets/img/icon3.png'),exp:'用户画像 | 商品画像 | 自动化行销',subtitle:'WI咖基于大数据技术，帮助品牌快速准确等定位用户人群，分析人群特征，真正做到精准化营销。',tips:['用户画像-刻画用户特征了解用户喜好，精准定位目标人群实施精准营销。','商品画像-聚焦商品维度全方位挖掘商品价值','自动化行销-自动化标签允许商家构建自己的用户行为和画像模型，设定后无需人工查询，系统根据标签进行后台计算']},
          {id:4,title:"服务中心",img:require('../assets/img/icon4.png'),exp:'游戏 | 点评 | BI | 商城',subtitle:'WI咖坚持专业的团队做专业的事情，通过不断与专业第三方服务商合作只为满足品牌不同阶段的场景需求',tips:['游戏 — 通过情景营销、社交营销极大地帮助促进了口碑的传播，满足消费者的内心需求。300余种游戏可满足不同时令节日的场景','点评 — 通过抓取大众点评数据，实现点评数据的分析客诉的及时跟进处理，与用户实现零距离对话','BI — 个性化报表服务，可自定义模型。让报表更加直观；H5移动页面，随时随地掌握数据','商城 — 不仅满足于简单的会员积分商城兑换入口，还将商城与用户等级权益进行捆绑。针对等级会员进行深度营销']},
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
      localStorage.index=1
      const that = this
      window.addEventListener('scroll', that.handleScroll,true)
      this.$nextTick(() =>{
        // 获取图片（或外层框）
        let imgBox = this.$refs.imgBox
          imgBox.style.left =-(1920-that.screenWidth)/2 + 'px'
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
          aa.onmouseover=function(){
            aa.style.background='#fafafa'
          }
          aa.onmouseleave=function(){
            aa.style.background='transparent'
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
          ee.onmouseover=function(){
            ee.style.background='transparent'
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
      // screenWidth(val){
      //   // 为了避免频繁触发resize函数导致页面卡顿，使用定时器
      //   if(!this.timer){
      //     // 一旦监听到的screenWidth值改变，就将其重新赋给data里的screenWidth
      //     this.timer = true
      //     let that = this
      //     setTimeout(function(){
      //       // 打印screenWidth变化的值
      //       let imgBox = that.$refs.imgBox
      //       if(this.screenWidth>1400){
      //         imgBox.style.left=0
      //       }else{
      //         imgBox.style.left =-(1920-that.screenWidth)/2 + 'px'
      //       }
      //       that.timer = false
      //     },400)
      //   }
      // }
    }

  }
</script>
<style scoped lang="scss">
  .top{
    min-width: 1200px;
    height:500px;position: relative;overflow-x: scroll;
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
      width: 1920px;height:100%;position: absolute;top:0;left:0;
    }
    .text{
      position: absolute;top:0;left:0;color: #fff;bottom: 0;right:0;margin:auto;width: 50%;height:200px;text-align: center;z-index: 22;
      p.bolder{
        font-size: 30px;font-weight: bold;margin-top: 40px;
      }
      section{
        margin: 50px auto 0;background: #ff4a4a;width: 120px;text-align: center;height: 40px;line-height: 40px;font-size: 16px;font-weight: bold;color:#fff
      }

    }
  }
  .middle{
    width: 70%;margin: 0 auto 50px;
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
      .footer{
        margin-top: 30px;
        div{
          width: 100%;background: #fff;border:1px solid #f7f7f7;display: flex;justify-content: space-between;padding:15px;margin-bottom: 20px;
          img{
            width: 130px;height: 130px;margin-top: 20px;margin-left: 45px;
          }
          ul{
            width: 75%;
            li{
              margin-top: 5px;color:#a0a0a0;margin-left: 20px;
            }
            .title{
              color:#000;
            }
            & > p:nth-of-type(1){
              font-size: 18px;font-weight: bold;
            }
            & > p:nth-of-type(2){
              font-size: 14px;margin:10px auto;
            }
          }
        }
      }
    }
  }

</style>

