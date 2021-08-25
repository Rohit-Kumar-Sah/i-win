import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LocationComponent } from './location/location.component';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [AppComponent, LocationComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule, BrowserAnimationsModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatInputModule, MatCheckboxModule],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule { }
