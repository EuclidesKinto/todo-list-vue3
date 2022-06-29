<template>
  <div class="bg-gray-300 rounded-sm">
      <div class="flex items-center px-4 py-3 border-b border-gray-400 last:border-b-0">

        <div class="flex items-center justify-center mr-2">
            <button class="text-gray-400">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </button>
        </div>

        <div class="w-full">
            <input  type="text" placeholder="Digite a sua tarefa"
                    :value="todo.title"
                    class="bg-gray-300 placeholder-gray-500 text-gray-700
                    font-light focus:outline-none block w-full appearance-none
                    leading-normal mr-3"
            >
        </div>

        <div class="ml-auto flex items-center justify-center">
            <button class="focus:outline-none px-1 hover:bg-red-400 rounded">
                x
            </button>
        </div>

      </div>
  </div>
</template>
<script>
export default {
  name: 'TodoItem',
  props: {
    todo: {
      type: Object,
      default: () => ({}),
      required: true
    }
  },
}
</script>