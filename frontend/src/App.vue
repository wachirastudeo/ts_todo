<script setup lang="ts">
import axios from 'axios';
import { reactive, ref } from 'vue';

interface InputTodo {

  title: string;
  description?: string
}
const input = reactive<InputTodo>(
  {
    title: '',
    description: ''
  }
)

const todoList = ref<InputTodo[]>([])

fetchTodo()
async function fetchTodo() {
  try {
    const res = await axios.get('/api/todo')
    todoList.value = res.data.data as InputTodo[]


  } catch (error) {
    alert(error)
  }
}

async function addTodo() {
  try {
    await axios.post('/api/todo', input)
    input.title = ''
  input.description = ''
    await fetchTodo()

  } catch (error) {
    alert(error)
  }



}
</script>

<template>
<div class="container my-4">
  <h1>
    Todo App
  </h1>
  <hr>
  <ul>
    <li v-for="todo of todoList">
      {{ todo.title }}
      <span v-if="todo.description">
      {{ todo.description }}
      </span>

    </li>
  </ul>
  <hr>
  <form @submit.prevent="addTodo">
   <div class="mb-3">
    <label for="todoTitle" class="form-label">หัวข้อ</label>
    <input
      type="text"
      class="form-control"
      v-model="input.title"
      name=""
      id="todoTitle"
      placeholder="เขียนสิ่งที่ต้องทำ"
      required
    />


   </div>
   <div class="mb-3">
    <label for="todoDescription " class="form-label">รายละเอียดเพิ่มเติม (ไม่จําเป็นต้องระบุ)</label>
    <textarea

      class="form-control"
      name=""
      rows="3"
      id="todoDescription "
      placeholder="รายละเอียดเพิ่มเติม "
      v-model="input.description"
    ></textarea>


   </div>
   <button   class="btn btn-primary">เพิ่มสิ่งที่ต้องทํา</button>

  </form>
</div>
</template>

