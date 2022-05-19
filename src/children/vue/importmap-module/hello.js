
import { ref, watch } from 'vue'
export default {
  // data(){
  //   return {
  //     message: "fy94fy!!!"
  //   }
  // },
  setup(){
    const answer = ref("洒红小二的那个")
    const question = ref('')
    watch(question, async (n, o) => {
      console.log(n,o);
      try {
        const res = await fetch("https://yesno.wtf/api")
        answer.value = (await res.json()).answer
      } catch (error) {
        
        answer.value = (await res.json()).answer
      }
    })
    return {
      answer,question
    }
  },
  
  template: /*html*/`<div id="test">
    <div>答案: {{answer}}</div>
    <input placeholder="zheshii" v-model="question"/>
  <div>`
}