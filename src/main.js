import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
const originFetch= window.fetch
window.fetch=function(path,option){
    const url = new URL(path, 'http:212.193.30.175:5046')
    return originFetch(url,option);
}
createApp(App).mount('#app');