<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
/*@font-face {*/
  /*font-family: 'zy';*/
  /*src: url('./assets/font/jt.ttf');*/
  /*font-weight: normal;*/
/*}*/
/*@font-face {*/
  /*font-family: 'xh';*/
  /*src: url('./assets/font/GBK.ttf');*/
/*}*/
#app{
  height:100%;
  min-width: 1400px;
  overflow-x: scroll;
}
.top{
  background: #000;
}
*{
  margin: 0;
  padding: 0;
  text-decoration: none;
  box-sizing: border-box;
  font-size: 14px;
  font-family: 'xh';
}
html,body{
 min-width: 1200px;
  height: 100%;overflow-x: scroll;
}
::-webkit-scrollbar{
  display:none;
}
</style>
