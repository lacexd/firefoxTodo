<template>
  <div class="page">
      <Todo></Todo>
  </div>
</template>

<script>
import Todo from './Todo'
export default {
  name: 'home',
  components: {
    'Todo': Todo
  },
  data () {
    return {
    }
  },
  mounted () {
    this.$store.dispatch('LOAD_TODO_LIST')
  }
}
</script>


<style scoped>

.page{
	width: 100%;
	background-color: #FDE3A7;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
}

</style>
