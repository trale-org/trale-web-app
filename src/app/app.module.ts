import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent}     from './app.component';
import {HeaderComponent}  from './utils/header/header.component';
import {SettingsModule}   from "./settings/settings.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports:      [
    BrowserModule,
    AppRoutingModule,
    SettingsModule,
  ],
  providers:    [],
  bootstrap:    [AppComponent]
})
export class AppModule {
}
