import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { QuoteComponent } from './quote/quote.component';
// import { NgbNodule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    QuoteFormComponent,
    QuoteComponent
  ],
  imports: [
    BrowserModule
    // NgbNodule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
