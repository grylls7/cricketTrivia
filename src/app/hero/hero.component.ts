import { Component, OnInit } from '@angular/core';

import { QuesansService } from '../quesans.service';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  ques : any;
  selected_answer:any =[];
  test:any =[];
  incorrect:any =[];
  incorrect_recognise:any =[];
  reset:any =[];

  constructor( private ques_ans : QuesansService) { }

  ngOnInit() {
    // console.log(this.ques_ans.ques)
    this.ques = this.ques_ans.ques;
    this.ques_ans.ans.forEach(element => {
      this.incorrect_recognise.push(1);
    })
    this.reset = this.incorrect_recognise;
    // this.incorrect_recognise = this.ques_ans.ques;
    // this.incorrect_recognise.fill(1);
    console.log(this.incorrect_recognise);
  }

  onSelectOption(e, q_no){
    // const index = this.selected_answer.findIndex(ele => ele.q_no === q_no);
    // if(index >= 0){
    //   this.selected_answer.splice(index, 1);
    //   // this.test.splice(index, 1);
    // }
    this.incorrect_recognise = this.reset;
    if(this.ques_ans.ans[q_no].answer !== e.target.value){
      console.log("correct",e.target.value)
      this.incorrect[q_no] = 2;
    }else{
      this.incorrect[q_no] = 1;
    }

    // this.test[q_no]= e.target.value
    // // console.log("selected test ",this.test)

    // this.selected_answer.push({"q_no":q_no,"selected_option":e.target.value});
  }

  selectedOption(){
    console.log("data ", this.incorrect)
    let not_selected = 1;
    for(let i =0; i<this.incorrect.length; i++){
      if(this.incorrect[i] && this.incorrect[i] != '2' && this.incorrect[i] != '1'){
        this.incorrect[i] = -1;
        not_selected = 1;
        console.log("empty undes")
      }
      // console.log("not empsdaty",this.incorrect[i])
    }
    if(this.incorrect.length < this.incorrect_recognise.length){
      // for(let i =this.incorrect.length; i<this.incorrect_recognise.length; i++){
      for(let i =0; i<this.incorrect_recognise.length; i++){
        if(this.incorrect[i] == '2' || this.incorrect[i] == '1'){
          console.log("fsdkjj")
          this.incorrect[i] = 1;  
        }else
          this.incorrect[i] = -1;
      }
    }
    // if(this.selected_answer.length == this.ques_ans.ans.length){
      // this.incorrect.forEach(element => {
      //   console.log("not empsdaty",element)
      //   if(element == ''){
      //     console.log("not empty")
      //   }
      //   else
      //   console.log("empty")
      // });
      
      this.incorrect_recognise = this.incorrect;
      console.log("selected answer ",this.incorrect_recognise)
    // }
    // console.log(this.ques_ans.ans) 
    // this.ques_ans.ans.forEach(element => {
    //   console.log(element.answer)
    // });
  }
}
