import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  // quotes = [
  //         new Quote(1, 'Things change. And friends leave. Life doesnt stop for anybody.'),
  //         new Quote(2, 'You cannot protect yourself from sadness without protecting yourself from happiness.'),
  //         new Quote(3, '')
  //       ];
  constructor() { }

  ngOnInit() {
  }

}
