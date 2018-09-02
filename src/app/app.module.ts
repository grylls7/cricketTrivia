import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { CricketComponent } from './cricket/cricket.component';
import { QuesansService } from './quesans.service';

@NgModule({
  declarations: [
    AppComponent,
    CricketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [QuesansService],
  bootstrap: [AppComponent]
})
export class AppModule { }
