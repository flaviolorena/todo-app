<template>
  <h1>To-do APP</h1>
  <div v-if="!editMode">
    <todo-list
      :todos="todos"
      @deleteTodo="deleteTodo"
      @editTodo="editTodo"
    ></todo-list>
    <div class="btn-novo">
      <Button @click="newTodo" class="btn-item">Novo</Button>
    </div>
  </div>
  <todo-item
    v-if="editMode"
    @cancel="cancel"
    @saveTodo="saveTodo"
    :todo="todo"
  ></todo-item>
</template>

<script>
import TodoList from "./components/TodoList.vue";
import TodoItem from "./components/TodoItem.vue";
export default {
  components: {
    TodoItem,
    TodoList,
  },
  data() {
    return {
      editMode: false,
      todos: [],
      todo: null,
      nextId: 1,
    };
  },
  methods: {
    newTodo() {
      this.todo = null;
      this.editMode = true;
    },
    cancel() {
      this.editMode = false;
    },
    saveTodo(todo) {
      if (todo.id) {
        const index = this.todos.findIndex((item) => item.id === todo.id);
        this.todos[index] = todo;
      } else {
        todo = { id: this.nextId, ...todo };
        this.todos.push(todo);

        this.nextId++;
        localStorage.setItem("nextId", this.nextId);
      }
      localStorage.setItem("todos", JSON.stringify(this.todos));
      this.editMode = false;
    },
    deleteTodo(index) {
      this.todos.splice(index, 1);
      localStorage.setItem("todos", JSON.stringify(this.todos));
    },
    editTodo(index) {
      this.todo = this.todos[index];
      this.editMode = true;
    },
  },
  // exibira depois do data esta carregado
  created() {
    const todos = localStorage.getItem("todos");
    if (todos) {
      this.todos = JSON.parse(todos);
    }
    const nextId = localStorage.getItem("nextId");
    if (nextId) {
      this.nextId = parseInt(nextId);
    }
  },
};
</script>

<style>
html {
  background-color: #f6f6f6;
  font-family: Roboto, "Helvetica";
}
h1 {
  text-align: center;
}
.btn-novo {
  width: 100vw;
  height: 150px;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.btn-item {
  width: 20rem;
  justify-content: center;
}
</style>
