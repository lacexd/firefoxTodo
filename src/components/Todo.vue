<template>
	<div class="todo-card">
		<div class="group-title-container">
			<span class="group-title">Work todos</span>
			<i class="fa fa-ellipsis-v menu" aria-hidden="true"></i>
		</div>
		<div class="todo-container" v-for="todo in todos">
			<div class="todo">
        <input class="todo-title" v-model="todo.title" v-on:keyup.13="add(todo.title)"></input>
        <div class="control-container">
          <div class="control-circle" id="submit" v-on:click="editTodo(todo)"></div>
          <div class="control-circle" id="delete" v-on:click="removeTodo(todo.title)"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'todo',
  computed: mapState([
	   'todos'
	]),
  data () {
    return {

    }
  },
  methods: {
    add: function(title){
      this.$store.dispatch('ADD_TODO', title)
    },

    removeTodo: function(title){
      if(this.todos.length !== 1)
      this.$store.dispatch('DELETE_TODO', title)
    }
  }
}
</script>


<style scoped>
.todo-card{
	background-color: #F2F1EF;
	margin: 10px 10px 10px 10px;
	border-radius: 5px;
	min-height: 50%;
/* 	max-height: 70%; */
	min-width: 20%;
	max-width: 30%;
	display: flex;
	flex-direction: column;
	align-items: center;
	box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
	position: relative;
}

.group-title-container{
	position: relative;
	width: 100%;
	height: 70px;
	background-color: #1BA39C;
	border-top-left-radius: 5px;
	border-top-right-radius: 5px;
	display: flex;
	align-items: center;
	border-bottom: 1px solid pink;
}

.menu{
	margin-left: auto;
	margin-right: 15px;
	color: black;
	cursor: pointer;
}

.group-title{
	margin-left: 15px;
	font-size: 0.9rem;
	font-weight: bold;
	color: black;
}

.todo-title{
	border: none;
  outline: none;
	width: 100%;
	height: 1.6rem;
	font-family: inherit;
	margin-left: 2%;
	border-radius: 5px;
}

#home{
	background-color: #F9BF3B
}

.todo{
	background-color: white;
	cursor: pointer;
	box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
	border-radius: 5px;
	display: flex;
	align-items: center;
	height: 2.5rem;
	width: 97%;
	margin-bottom: 0.3rem;
}

.todo-container{
  margin-top: 0.5rem;
  display: flex;
	align-items: center;
  flex-direction: column;
  width: 100%;
	height: 100%;
	position:relative;
}

.todo:hover .control-container{
	opacity: 1;
}

.control-container{
	margin-left: auto;
	margin-right: 10px;
	display: flex;
	opacity:0;
  transition:opacity 0.4s linear;
}

.control-circle{
	border-radius: 50%;
	width: 13px;
	height: 13px;
	margin-right: 3px;
}

#submit{
	background: #2ecc71;
}

#delete{
	background: #e74c3c;
}

#edit{
	background: #f1c40f;
}

</style>
