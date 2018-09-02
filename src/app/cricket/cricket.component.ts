import { Component, OnInit } from '@angular/core';

import { QuesansService } from '../quesans.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-cricket',
  templateUrl: './cricket.component.html',
  styleUrls: ['./cricket.component.css']
})
export class CricketComponent implements OnInit {

  ques : any;
  selected_answer:any =[];
  incorrect:any =[];
  incorrect_recognise:any =[];
  reset:any =[];

  correct_graph = 0;
  incorrect_graph = 0;

  constructor( private ques_ans : QuesansService) { }

  ngOnInit() {
    this.ques = this.ques_ans.ques;
    this.ques_ans.ans.forEach(element => {
      this.incorrect_recognise.push(1);
    })
    this.reset = this.incorrect_recognise;
    console.log(this.incorrect_recognise);

// *******************
    var ctx = document.getElementById("myChart");
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Correct", "InCorrect"],
            datasets: [{
                label: 'score card',
                data: [this.correct_graph, this.incorrect_graph],
                backgroundColor: [
                    'black',
                    'black',
                ],
                borderColor: [
                    'black',
                    'black',
                ],
                borderWidth: 10
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });

// **********************

  }

  onSelectOption(e, q_no){
    this.incorrect_recognise = this.reset;
    if(this.ques_ans.ans[q_no].answer !== e.target.value){
      console.log("correct",e.target.value)
      this.incorrect[q_no] = 2;
    }else{
      this.incorrect[q_no] = 1;
    }
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
    }
    if(this.incorrect.length < this.incorrect_recognise.length){
      for(let i =0; i<this.incorrect_recognise.length; i++){
        if(this.incorrect[i] == '2' || this.incorrect[i] == '1'){
          this.incorrect[i] = 1;  
        }else
          this.incorrect[i] = -1;
      }
    }
      
      this.incorrect_recognise = this.incorrect;
      const index = this.incorrect_recognise.findIndex(ele => ele === -1);
      this.correct_graph = 0;
        this.incorrect_graph = 0;
      console.log("selected index ",index)
      if(index == -1){
        for (let index = 0; index < this.incorrect_recognise.length; index++) {
          if(this.incorrect_recognise[index] == 1){
            this.correct_graph++;
          }else{
            this.incorrect_graph++;
          }
        }
      }
      
      console.log(this.incorrect_graph)
      console.log("selected answer ",this.incorrect_recognise)

      var ctx = document.getElementById("myChart");
      var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Correct", "InCorrect"],
            datasets: [{
                label: 'score card',
                data: [this.correct_graph, this.incorrect_graph],
                backgroundColor: [
                    'black',
                    'black',
                ],
                borderColor: [
                    'black',
                    'black',
                ],
                borderWidth: 10
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });

  }

  clear(){
    location.reload();
  }
}
