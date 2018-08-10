import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  quotes = [
          new Quote(1, 'Things change. And friends leave. Life doesnt stop for anybody.'),
        ];
  constructor() { }

  ngOnInit() {
  }

}
