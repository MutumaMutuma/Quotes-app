import { Component, OnInit, Input } from '@angular/core';
import { Quote} from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

@Input() quote: Quote;
  constructor() { }

  ngOnInit() {
  }

}
