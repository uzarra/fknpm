import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ConverterComponent } from './converter/converter.component';

(window as any).global = window;
declare var require: any;

declare global {
  interface Window {
    Buffer: any;
  }
}

window.Buffer = window.Buffer || require('buffer').Buffer;

@NgModule({
  declarations: [
    AppComponent,
    ConverterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
