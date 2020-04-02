<template>
  <div class="side-container">
    <main style="display: flex;justify-content: space-between;">
      <section style="padding-top: 20px;">
        <h2>上海澄泓信息科技有限公司</h2>
        <p class="address">地点：上海嘉定区金沙江路3131电子商务园10号楼104</p>
        <div style="display: flex;justify-content: space-between;width: 450px;">
          <!--<p>联系我们：021-69169026</p>-->
          <p>邮箱：super@chenghong.cc</p>
        </div>
      </section>
     <section>
      <p style="display: inline;margin-right: 10px;color:#898989;">微信扫码关注公众号</p>
      <img src="../assets/img/erweima.png" alt="" style="width: 100px;height: 100px;">
     </section>
    </main>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        activeindex:0,
        top:['数据面板','123'],
        seen:true
      }
    },
    methods:{

    },
    mounted(){
        // this.$refs.side.style.opacity=0
      // this.$refs.side.onmouseenter()
    }
  }
</script>
<style scoped lang="scss">
  .side-container{
    width: 100%;
    height:180px;
    background: #000;
    z-index: 9999;
padding-top: 40px;
    main{
      width: 70%;margin:0 auto;
    }
    h2{
      font-size: 16px;color:#fff;margin-bottom: 10px;
    }
    .address{
      font-size: 12px;margin-bottom: 10px;color:#898989;
    }
    div{
      p{
        color:#898989;font-size: 12px;
      }
    }

  }

</style>
