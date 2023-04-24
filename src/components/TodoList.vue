<template>
        <div v-for="todo in allTodos" :key="todo.id" class="listContainer">
            <todo-item :todo="todo"/>
        </div>
</template>

<script>
import todoItem from "@/components/TodoItem.vue";
import {mapGetters} from "vuex";
export default {
    components: {
        todoItem,
    },
    computed: {
        ...mapGetters(['allTodos']),
    },
}
</script>

<style scoped>

</style>