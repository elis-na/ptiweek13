import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import your library
import { AppRoutingModule } from './app-routing.module';
import { CountdownModule } from 'ngx-countdown';

@NgModule({
  declarations: [ AppComponent ],
  imports: [ 
    BrowserModule, 
    AppRoutingModule,
    CountdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }  