<template>
    <div class="todoItem" v-show="todo.searched" @click.prevent="toggleTodo(todo.id)">
        <div v-if="todo.done"  class="crossed todoTitle" @click.prevent="toggleTodo(todo.id)">{{ todo.title }}</div>
        <div v-else class="todoTitle">{{ todo.title }}</div>
        <div class="buttonSection">
            <button @click.stop="deleteTodo(todo.id)" class="deleteButton">Delete</button>
        </div>
    </div>

</template>

<script>
import {mapActions} from "vuex";

export default {
    props: {
        todo: {}
    },
    methods : {
        ...mapActions(['deleteTodo']),
        ...mapActions(['toggleTodo'])
    },

}
</script>

<style scoped>

</style>