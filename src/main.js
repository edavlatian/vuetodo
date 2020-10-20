import { createApp } from 'vue'
import App from './App.vue'

const myApp = createApp(App);

myApp.directive('todo-focus', (el, binding) => {
    if(binding.value) {
        el.focus();
    }
})

myApp.mount('#app');
