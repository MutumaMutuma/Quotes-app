import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Quote} from '../quote';
import { isComponent } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {  
  @Input() quote: Quote;
  @Output() inputQuote = new EventEmitter<Quote>();

  newQuote = new Quote(0,'', '',new Date(0,0,0), 0, 0);
  submitForm(){
    this.inputQuote.emit(this.newQuote);
  }
  constructor() { }
  
  ngOnInit() {
  }

}
