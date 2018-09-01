import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HeroComponent } from './hero/hero.component';
import { QuesansService } from './quesans.service';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [QuesansService],
  bootstrap: [AppComponent]
})
export class AppModule { }
