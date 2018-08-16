import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteInfoComponent } from './quote-info/quote-info.component';
import { MovingComponent } from './moving/moving.component';
import { DateCountPipe } from './date-count.pipe';
// import { StopComponent } from './stop/stop.component';
// import { NgbNodule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    QuoteFormComponent,
    QuoteComponent,
    QuoteInfoComponent,
    MovingComponent,
    DateCountPipe,
    // StopComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
