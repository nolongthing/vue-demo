<template>
  <div class="hello">
    <a href="/">回到首页</a>
    <Headder  data-id='11'/>  
    <h1>{{ msg }}</h1>
		<div @click="handleSome">点我</div>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <ul>
      <li>
        <router-link to="/content">Go to Content</router-link>
      </li>
      <li>
        <router-link to="/box">Go to Box</router-link>
      </li>
    </ul>
    <span>{{getCount}}</span>
    <button @click="handleClick('aaa')">点击加一</button>
    <button @click="handleAsyncClick">点击一秒钟后加一</button>
    <router-view></router-view>
  </div>
</template>

<script>
import Headder from './index/Headder'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
  computed: {
    getCount(){
      return this.$store.state.count;
    }
  },
  components:{
    Headder,
  },
	watch:{
		msg:(newValue,oldValue)=>{
			console.log(newValue,oldValue);
		}
	},
  methods:{
    handleClick(a){
			
      console.log(a);
      this.$store.commit('increment');
    },
		handleSome(){
			this.msg += 1;
    },
    /* 异步更新state的方式 */
    handleAsyncClick(){
      this.$store.dispatch('asyncIncrement');
    }
  },
  created(){
    console.log(this,'vue 实例');
    console.log(this.$store.state.count);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
.hello /deep/ .el-button{
  :hover{
    background-color: chartreuse;
  }
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
  text-decoration: none;
  &.router-link-exact-active{
    color: brown;
  }
}
</style>
