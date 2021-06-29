import {NgModule}               from '@angular/core';
import {CommonModule}           from '@angular/common';
import {SettingsIndexComponent} from './settings-index/settings-index.component';
import { SettingsMenuItemComponent } from './settings-utils/settings-menu-item/settings-menu-item.component';


@NgModule({
  declarations: [
    SettingsIndexComponent,
    SettingsMenuItemComponent
  ],
  imports:      [
    CommonModule
  ]
})
export class SettingsModule {
}
