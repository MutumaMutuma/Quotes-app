import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { GoalFormComponent } from './goal-form/goal-form.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
// import { NgbNodule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    GoalFormComponent,
    QuoteFormComponent
  ],
  imports: [
    BrowserModule
    // NgbNodule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
