<template>
  <div id="todoContainer">
  	<div id="dragarea">
			<Todo
        v-for="todo in todos"
        v-bind:name="todo.name"
        v-bind:todo=todo></Todo>
  	</div>
  </div>
</template>

<script>
import Todo from './Todo'
import { mapState } from 'vuex'

export default {
  name: 'todoContainer',
  components: {
    Todo
  },
	computed: mapState([
			'todos'
	]),
  data () { return {} },
  methods: {}
}
</script>


<style scoped>
#todoContainer {
  width: 100%;
  height: 100%;
  display: flex;
}
#dragarea {
  width: 100%;
  height: 100%;
  display: flex;
}
</style>
