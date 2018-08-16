import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: ['./app.component.css']
})
export class AppComponent {
  quotes = [
    new Quote(1, 'The Way Get Started Is To Quit Talking And Begin Doing.', 'Walt Disney', new Date(2018,6,5), 8,  2 ),
    new Quote(2, 'People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do.' ,' James Graham',  new Date(2018,6,1), 101, 23),
    new Quote(3, 'We May Encounter Many Defeats But We Must Not Be Defeated.', 'Ali Caldwell',new Date(2018,6,9) , 54, 4),
    new Quote(4, 'Love yourself. It is important to stay positive because beauty comes from the inside out.', 'Leah Jenea', new Date(2018,12,9) ,7, 2),
    new Quote(5, 'Only God can Judge me', 'Lewis Mutuma',new Date(2018,1,9) , 42, 5),
];  pushQuote($event){
    $event.id=this.quotes.length+1;
    $event.upVotes=0;
    $event.downVotes=0;
    this.quotes.unshift($event);

  }
  constructor() {

  }
}
