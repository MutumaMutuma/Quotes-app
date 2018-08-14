import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Quote } from './../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
        new Quote(1, 'The Way Get Started Is To Quit Talking And Begin Doing.', 'Walt Disney', 'Lewis Mutuma' , 8,  2 ),
        new Quote(2, 'People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do.' , ' James Graham', 'Saidi Hussein', 101, 23),
        new Quote(3, 'We May Encounter Many Defeats But We Must Not Be Defeated.', 'Ali Caldwell', 'Elsie Herra', 54, 4),
        new Quote(4, 'Love yourself. It is important to stay positive because beauty comes from the inside out.', 'Leah Jenea', 'Lewis Mutuma', 7, 2),

    ];
    newQuote(quote) {
      this.quotes.push(quote)
    }
  constructor() { }

  ngOnInit() {
  }
  completeQuote(isComplete,index){
    if (isComplete){
        this.quotes.splice(index,1);
        }
        }
  toogleDetails(index) {
    this.quotes[index].showInfo = !this.quotes[index].showInfo;
}
}
