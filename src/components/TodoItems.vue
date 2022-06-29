<template>
  <div class="space-y-2">
    <TodoItem/>
  </div>
</template>
<script>
import TodoItem from '@/components/TodoItem.vue';

export default {
  name: 'TodoList',
  components: {
    TodoItem
  }
}
</script>