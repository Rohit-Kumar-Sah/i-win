import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LocationComponent } from './location/location.component';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, LocationComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule, BrowserAnimationsModule],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
