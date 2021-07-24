import {NgModule}               from '@angular/core';
import {RouterModule, Routes}   from '@angular/router';
import {SettingsIndexComponent} from './settings/settings-index/settings-index.component';
import {ChooseSecurityLevelComponent} from "./setup/choose-security-level/choose-security-level.component";

const routes: Routes = [
  {path: 'settings', component: SettingsIndexComponent},
  {path: 'setup', component: ChooseSecurityLevelComponent},
  {path: 'setup/security-level', component: ChooseSecurityLevelComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
