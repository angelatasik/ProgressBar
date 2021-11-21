import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { ValueInputsComponent } from './value-inputs/value-inputs.component';



@NgModule({
  declarations: [
    AppComponent,
    ProgressBarComponent,
    ValueInputsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
