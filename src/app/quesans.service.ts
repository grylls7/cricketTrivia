import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})



export class QuesansService {

  ques  = 
            [
              {
                "sno": "1",
                "question": "When was the last time India won the cricket world cup?",
                "option": ["2003","1983","2015","2011"],
              },
              {
                "sno": "2",
                "question": "What is the highest individual score by batsman in test cricket?",
                "option": ["375","399","400","413"],
              },
              {
                "sno": "3",
                "question": "Who has won the most number of cricket world cup?",
                "option": ["Australia","India","South-Africa","West-Indies"],
              },
              {
                "sno": "4",
                "question": "How many International centuries does Sachin Tendulkar has under his name?",
                "option": ["49","99","51","100"],
              },
            ];

    ans  = 
            [
              {
                "sno": "1",
                "answer": "2011"
              },
              {
                "sno": "2",
                "answer": "400"
              },
              {
                "sno": "3",
                "answer": "Australia"
              },
              {
                "sno": "4",
                "answer": "100"
              },
            ]
}
