import { Component, OnInit, Input } from '@angular/core';
import { Quote } from './../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
        new Quote(1, 'The Way Get Started Is To Quit Talking And Begin Doing.', 'Walt Disney'),
        new Quote(2, 'People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do.' , 'Saidi Hussein'),
        new Quote(3, 'We May Encounter Many Defeats But We Must Not Be Defeated.', 'Elsie Herra'),
        new Quote(4, 'Love yourself. It is important to stay positive because beauty comes from the inside out.', 'Lewis Mutuma'),

    ];
  constructor() { }

  ngOnInit() {
  }

}
