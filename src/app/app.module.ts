import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent}     from './app.component';
import {HeaderComponent}  from './utils/header/header.component';
import {SettingsModule}   from "./settings/settings.module";
import { WelcomeComponent } from './welcome-stepper/welcome/welcome.component';
import { SelectionItemComponent } from './utils/selection-item/selection-item.component';
import { ChooseSecurityLevelComponent } from './setup/choose-security-level/choose-security-level.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WelcomeComponent,
    SelectionItemComponent,
    ChooseSecurityLevelComponent,
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
