import { Component, OnInit } from '@angular/core';

import { QuesansService } from '../quesans.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  ques : any;
  constructor( private ques_ans : QuesansService) { }

  ngOnInit() {
    console.log(this.ques_ans.ques)
    this.ques = this.ques_ans.ques;
  }

}
