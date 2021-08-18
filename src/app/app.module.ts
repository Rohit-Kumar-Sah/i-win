import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LocationComponent } from './location/location.component';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [AppComponent, LocationComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
