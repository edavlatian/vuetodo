import { createApp } from 'vue'
import App from './App.vue'

const myApp = createApp(App);

// app.directive('todo-focus',{
//     bind: function(el, binding){
//         if(binding.value){
//             el.focus();
//         }
//     }
// })

myApp.directive('todo-focus', (el, binding) => {
    if(binding.value) {
        el.focus();
    }
})

myApp.mount('#app');

//createApp(App).mount('#app')