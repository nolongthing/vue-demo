<template>
 <div>
	 <span @click="handleClick">this is content!</span>
	 <ConA  :a='objarr[0].id'/>
	 <ConB 	:a='array[1]'/>
 </div>

</template>

<script>
import ConA from '../Content/conA';
import ConB from '../Content/conB';
 export default {
	 data () {
		 return {
			 array:['cona','conb'],
			 objarr: [
				 {id: 1},
				 {id: 2},
				 {id: 3},
			 ]
		 }
	 },
	 components: {
		 ConA,
		 ConB
	 },
	 methods: {
		 handleClick(){
			this.objarr[0].id='4';
			//  this.$set(newArray);
		 }
	 },
	

 }
</script>

<style>

 
</style>
