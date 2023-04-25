<template>
    <div class="inputForm">
        <div class="searchContainer">
        <input type="text" @input="searchTextChange" v-bind:value="searchText" class="searchInput" placeholder="Search title.."/>
        </div>
        <div class="inputContainer">
            <input @input="todoTextChange"
                   :value="todoText"
                   type="text"
                   class="todoInput"
                   placeholder="Input here..."
                   @keyup.enter="addTodoFromInput">
            <button @click="addTodoFromInput" class="addButton" :disabled="!todoText">Add</button>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import { v1 } from 'uuid';

export default {
    data() {
        return {
            todoText: '',
            searchText: '',
        }
    },
    methods: {
        ...mapActions(['addTodo']),
        ...mapActions(['searchTodo']),

        todoTextChange(e) {
            this.todoText = e.target.value;
        },

        addTodoFromInput() {
            if (this.todoText === '') {
                return
            }
            this.addTodo({
                id: v1(),
                title: this.todoText,
                done: false,
                searched: true
            });
            this.todoText = '';
            this.searchText = '';
            this.searchTodo('');
        },

        searchTextChange(e) {
            this.searchText = e.target.value;
            this.searchTodo(this.searchText);
        },
    },
}
</script>

<style scoped>

</style>