import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote-info',
  templateUrl: './quote-info.component.html',
  styleUrls: ['./quote-info.component.css']
})
export class QuoteInfoComponent implements OnInit {
  
@Input() quote: Quote;
  constructor() { }
  @Output() isComplete= new EventEmitter<boolean>();

  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }
  ngOnInit() {
  }
 
}
