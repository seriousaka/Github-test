import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// app ichiga router va barcha componentlar joylashadi
// bu yerda use qilib ishlashimiz uchun kerak boladigan asosiy kutubxonalarni import qilamiz
//vuex yoki pinia -> bu ikkisi state management uchun ishlatiladi
//vue-router -> bu router uchun ishlatiladi
//axios -> bu http so'rovlar uchun ishlatiladi
// pinia -> bu state management uchun ishlatiladi
// quasar -> bu UI kutubxonasi uchun ishlatiladi
// vuetify -> bu UI kutubxonasi uchun ishlatiladi
// bootstrap -> bu UI kutubxonasi uchun ishlatiladi
// tailwind -> bu UI kutubxonasi uchun ishlatiladi
// element-plus -> bu UI kutubxonasi uchun ishlatiladi
// naivete -> bu UI kutubxonasi uchun ishlatiladi
// i18n -> bu internationalization uchun ishlatiladi

createApp(App)
.use()// bu useni vazifasi kerakli codelarni global holda ishga tushuntish uchun kerak ekan
.mount('#app')
