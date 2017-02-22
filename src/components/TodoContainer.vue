<!-- <div id="todoContainer">
	<div id="dragarea">
		<div class="wrapper" id="wrapper" v-for="todo in todos">
			<Todo :title="todo.title" :deleteTodo="deleteTodo" :newTodo="newTodo" :edit="todo.edit"></Todo>
		</div>
	</div>
</div> -->
<!-- <template>
</template>

<script>
import Todo from './Todo'
import { mapState } from 'vuex'

export default {
  name: 'todoContainer',
  components: {
    'Todo': Todo
  },
	computed: mapState([
			'todos'
	]),
  data () { return {} },
  methods: {
    newTodo: function(){
      this.todos.push({
        title: '',
        edit: true
      })
    },

    deleteTodo: function(todoTitle){
        // this.todos = this.todos.filter(function(v){
        //   return v.title !== todoTitle
        // })
        // if(this.todos.length === 0){
        //   this.todos.push({
        //     title: '',
        //     edit: true
        //   })
        // }
    }
  }
}
</script>


<style scoped>
.wrapper{
	width: 700px;
	height: 50px;
	display: flex;
	align-items: center;
	background: white;
  flex-direction: row;
	margin-top: 5px;
	border-radius: 3px;
	box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
	font-size: 15px;
  transition: 0.3s;
	cursor: pointer;
}

/* On mouse-over, add a deeper shadow */
.wrapper:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
</style> -->
