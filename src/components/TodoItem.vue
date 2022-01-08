<template>
  <div class="container">
    <div class="box">
      <InputText v-model="description" class="box-input" />
      <div class="div-botoes">
        <Button @click="cancel" class="btn-voltar box-item">Voltar </Button>
        <Button @click="saveTodo">Salvar</Button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      description: "",
    };
  },
  props: {
    todo: Object,
  },
  created() {
    if (this.todo) {
      this.description = this.todo.description;
    }
  },
  methods: {
    cancel() {
      this.$emit("cancel");
    },
    saveTodo() {
      this.$emit("saveTodo", { ...this.todo, description: this.description });
    },
  },
};
</script>

<style scoped>
.btn-voltar {
  margin-right: 1rem;
}
.container {
  width: 100vw;
  height: 30vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.box {
  width: 400px;
  height: 150px;
  background: #bfc9d4;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 8px;
}

.box-input {
  width: 90%;
  align-items: center;
  margin: 15px 15px;
}
</style>
