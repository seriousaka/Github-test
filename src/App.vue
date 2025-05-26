<template>
  <div @click="onclick($event)">{{ message }}</div>
  <!-- <!-- <div class="menubox" v-if="showmenu" ></div> -->
  <!-- <div class="menubox" v-else-if="showmenu" ></div> -->
  <!-- <div class="menubox" v-else ></div> -->
  <!-- bu agar qiymat v-if orqali oynadan yashirilsa element render bolmasdan oldin yoq bolib qoladi  -->
  <!-- agar bizga render bolgan holda oynadan yashirilish kerak bolsa v-showdan foydalaniladi -->
  <div class="menubox" v-show="showmenu"></div>
</template>


<script>
// bu yerga har doim biz scriptlarni yozamiz hatto import qilmoqchi boslak ham
export default {
  data() {
    return {
      message: 'Salom Vue!',
      showmenu: false
    }
  },
  methods: {
    onclick(event) {
      console.log(event);
      // bu murakkab va hato usul
      // if(this.showmenu){
      //   this.showmenu = false;
      // }
      // else{
      //   this.showmenu = true;
      // }
      this.showmenu = !this.showmenu; // bu oddiy va to'g'ri usul
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
  border-radius: 50%;
  background-color: blue;
  margin: 10px;
  border: 1px solid black;
}
</style>