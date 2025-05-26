<template>
  <div @click="onclick($event)">{{ message }}</div> 
  <!-- < !-- <div class="menubox" v-if="showmenu" ></div> -->
  <!-- <div class="menubox" v-else-if="showmenu" ></div> -->
  <!-- <div class="menubox" v-else ></div> -->  
  <!-- bu agar qiymat v-if orqali oynadan yashirilsa element render bolmasdan oldin yoq bolib qoladi  -->
  <!-- agar bizga render bolgan holda oynadan yashirilish kerak bolsa v-showdan foydalaniladi -->
  <div class="menubox" v-show="showmenu" ></div>
  <div class="banner">
    <h1>MacBook Air 13</h1>
    <p> MacBook Air 13, amet consectetur adipisicing elit. Incidunt placeat ut temporibus libero. Eaque id cumque deserunt minus iusto! Ut corrupti sapiente exercitationem ipsa? Possimus dignissimos illum non ea quam nam cupiditate placeat quibusdam assumenda, distinctio, autem accusamus doloribus repellendus saepe maxime itaque aliquid reprehenderit laborum corporis debitis iure? Veritatis.</p>
  </div>
</template>


<script>
// bu yerga har doim biz scriptlarni yozamiz hatto import qilmoqchi boslak ham
export default {
  data(){
    return{
      message: 'Salom Vue!',
      showmenu: false
    }
  },
  methods:{
    onclick(event){
      console.log(event);
      // bu murakkab va hato usul
      // if(this.showmenu){
      //   this.showmenu = false;
      // }
      // else{
      //   this.showmenu = true;
      // }
      this.showmenu=!this.showmenu; // bu oddiy va to'g'ri usul
    }
  }
};
</script>

<style>
div {
  color: red;
}
.menubox {
  width: 100px;
  height: 100px;
  background-color: blue;
  margin: 10px;
  border: 1px solid black;}
 
</style>