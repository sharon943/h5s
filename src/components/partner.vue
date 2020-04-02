<template>
  <div>
    <div class="top">
      <headTop id="topbar" ref="scrooll" style="background: transparent"></headTop>
      <div class="text">
        <p class="bolder">加入我们 共同成长</p>
        <p>更高效的合作方式 更尖端的技术应用 更有效的解决方案</p>
      </div>
      <img src="https://merchants.oss-cn-hangzhou.aliyuncs.com/123487/store/54c5e4fbf7413546d2ca228c5a7403d7.png" alt="" ref="imgBox"  style="left:0" >
    </div>
    <div class="middle">
      <h3 style="margin-top: 100px;font-size: 26px;margin-bottom: 20px;">合作伙伴</h3>
      <p style="color:#a0a0a0;margin-bottom: 35px;">合作伙伴来自行业各个部分，POS，支付，外卖，ERP，代运营，专业的第三方软件系统，从工具和服务为品牌提供更完善的解决方案</p>
      <ul class="imgs">
         <li  v-for="item in clientsdata">
           <img :src="item.img" alt="">
           <h4>{{item.title}}</h4>
           <p>{{item.exp}}</p>
         </li>
      </ul>
    </div>
    <div class="middle">
      <h3 style="margin-top: -30px;font-size: 20px;margin-bottom: 30px;display: block">联系我们 一起发展 共同成长</h3>
      <form action="">
        <section>
          <div>
            <p>联系人</p>
            <input type="text">
          </div>
          <div>
            <p>公司</p>
            <input type="text">
          </div>
          <div>
            <p>电话</p>
            <input type="text">
          </div>
        </section>
        <section>
          <div>
            <p>备注</p>
            <textarea name="" id="" cols="30" rows="10" placeholder="别忘记告诉我们您的合作需求" style="resize: none"></textarea>
          </div>
        </section>
        <p class="button">联系我们</p>
      </form>
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
        formLabelAlign:{},screenWidth: window.innerWidth,
        clientsdata:[
          {id:1,title:"垂直于饮品行业的自媒体",img:require('../assets/img/kamen.png'),exp:'咖门专注饮品行业，从咖啡、茶饮的头部企业专访、行业观察研究等为切入口，通过培训、峰会等载体，连接饮品行业的上下游资源'},
          {id:2,title:"SaaS平台 + 数据营运平台",img:require('../assets/img/candao.png'),exp:'餐道服务涵盖全渠道管理SaaS+数据营运中台，主要为国内餐饮和零售企业提供一体化的O2O解决方案'},
          {id:3,title:"商用智慧管理服务平台",img:require('../assets/img/nine.png'),exp:'玖道科技致力于港口的大型EAM管理系统；应用于流通行业的CALLCENTER系统，远程监控系统，客户管理系统，配件运行管理系统等'},
          {id:4,title:"餐饮服务业整体解决方案服务商",img:require('../assets/img/maji.png'),exp:'卓越的品牌是麻吉POS努力的精神所在，希望做到品牌＋销售＋客服三赢，以创造让市场惊艳的满意服务与贴心的软件解决方案'},
          {id:5,title:"餐饮服务业整体解决方案服务商",img:require('../assets/img/f&b.png'),exp:'富必达致力于餐饮管理系统整体解决，方案前瞻和创新让富必达软件随时满足市场发展需求，专业和热忱让富必达成为客户最值得信赖的合作伙伴'},
          {id:6,title:"餐饮服务业整体解决方案服务商",img:require('../assets/img/fec.png'),exp:'FEC提供全系列的POS产品，具备POS专业全功能，满足所有、餐饮/连锁及其它买卖收银的店家需求。此外，FEC还提供KIOSK相关产品和服务'},
          {id:7,title:"会思考的餐饮管理系统",img:require('../assets/img/come.png'),exp:'提供标准版与专业版覆盖餐饮场景，店铺客户端和云端管理平台即下即用且不需要维护，功能简单，容易上手，只需要一台iPad即可开业'},
          {id:8,title:"餐饮零售连锁解决方案服务商",img:require('../assets/img/yinbao.png'),exp:'新一代免费收银软件, 支持进销存管理、连锁管理、会员营销, 适合零售、餐饮、服装、生活服务、母婴行业, 支持Apple Pay、支付宝、微信支付等'},
          {id:9,title:"专业的ERP软件服务商",img:require('../assets/img/wendian.png'),exp:'从事企业资源管理软件(ERP)开发的一家公司。包括ERP之财务总帐、采购、生管、成本分析、仓管进销存、营业、贸易、应收应付、固定资产等'},
          {id:10,title:"餐饮saas服务商",img:require('../assets/img/syncpo.png'),exp:'致力于领先全球的轻餐饮连锁SaaS服务,诣在帮助国内轻餐饮连锁企业降低管理成本，提升客户价值，提高营运效率'},
          {id:11,title:"互动式品牌营销游戏服务商",img:require('../assets/img/24play.png'),exp:'24好玩平台定期推出精心打造的系列专题游戏，专题跟随实时娱乐、新闻热点，配合经典游戏玩法，剔除所有无趣元素，体验一场纯粹的游戏乐趣'},
          {id:12,title:"专业的第三方支付公司",img:require('../assets/img/sand-logo.png'),exp:'全国性金融支付服务领导企业， 致力于为持卡人、发卡机构、特约商户提供全方位的金融支付解决方案和安全、高效、优质的金融专业化服务。'},
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
      const that = this
      window.addEventListener('scroll', that.handleScroll,true)
    },
    mounted(){
      this.$parent.$el.scrollTop=0

      localStorage.index=3
const that=this
      this.$nextTick(() =>{
        // 获取图片（或外层框）
        let imgBox = this.$refs.imgBox
          imgBox.style.left =-(1920-this.screenWidth)/2 + 'px'
      })
      window.onresize =()=>{
        that.screenWidth = window.innerWidth
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
          aa.onmouseover=function(){
            aa.style.background='#fafafa'
          }
          aa.onmouseleave=function(){
            aa.style.background='transparent'
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

          cc.onmouseover=function(){
            cc.style.background='transparent'
          }
          aa.onmouseover=function(){
            aa.style.background='transparent'
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
  form{
    background: #f7f7f7;display: flex;padding:30px 30px 0 ;position: relative;margin-bottom: 35px;
    section{
      width: 39%;
      & > div{
        display: flex;justify-content: space-between;margin-bottom: 20px;
        input{
          border:none;height:30px;width: 80%;
        }
        textarea{
          border:none;padding:5px 0 0 8px;height: 135px;width: 82%;
        }
      }
    }
    & > section:nth-of-type(1){
      margin-right: 50px;
    }
    .button{
      width: 100px;height:35px;line-height: 35px;text-align: center;background: #000;display: inline;color:#fff;position: absolute;bottom:20px;right:35px
    }
  }
  .top{
    min-width: 1200px;
    height:500px;position: relative;overflow-x: scroll;
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
    width: 70%;margin: 0 auto 50px;
    .module{
      margin-top: 100px;overflow: hidden;position: relative;

      .head{
        margin-bottom: 20px;
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
    }
    .imgs {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      width: 100%;

      li {
        list-style: none;
        width: 24%;
        border: 1px solid #f7f7f7;
        padding-bottom: 20px;
        margin-bottom: 20px;

        h4 {
          text-align: center;
          margin-bottom: 20px;
        }

        p {
          padding: 0 10px;
          color: #a0a0a0
        }

        @media screen and (min-width: 1480px) {
          img {
            width: 65%;
            display: block;
            margin: 10px auto 0;
          }
        }
        @media screen and (max-width: 1480px) {
          img {
            width: 85%;
            display: block;
            margin: 10px auto 0;
          }
        }
      }
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

