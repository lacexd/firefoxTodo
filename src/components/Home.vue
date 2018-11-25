<template>
  <div class="page">
    <TodoContainer></TodoContainer>
  </div>
</template>

<script>
import TodoContainer from './TodoContainer'
export default {
  name: 'home',
  components: {
    'TodoContainer': TodoContainer
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
