<template>
  <form class="flex items-center px-4 bg-gray-900 h-15 rounded-sm border-l-2 border-green-400 mb-3"
    @submit.prevent="addTodo"
    >
    <input class="bg-gray-900 placeholder-gray-500 text-gray-500 font-light focus:outline-none block w-full appearance-none leading-normal py-3 pr-3"
      v-model="title"
      placeholder="Adicione um novo item ..."
      type="text">
      <button class="text-green-400 text-xs font-semibold first-line:focus:outline-none" type="submit" >
          ADICIONAR
      </button>
  </form>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'TodoFormAdd',

  setup(){
    const title = ref( '');
    const store = useStore();

    const addTodo = () => {
      if(!title.value) return false;
      store.dispatch('addTodo', {
        title: title.value,
        completed: false,
      }).finally(() => {
        title.value = '';
      });
    }

    return{
      title,
      addTodo
    }
  }

}
</script>