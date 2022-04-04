<template>
    <div class="pa-5">
        <card-todo />
    </div>
</template>
<script>
import CardTodo from '@/components/CardTodo.vue'
    export default {
  components: { CardTodo },
        name: 'HomeView',
        // props: {
        //     todo_data: {
        //         type: Object,
        //         required: true
        //     }
        // }
        
    }
</script>

<style lang="scss" scoped>

</style>