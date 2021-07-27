import {NgModule}               from '@angular/core';
import {RouterModule, Routes}   from '@angular/router';
import {SettingsIndexComponent} from './settings/settings-index/settings-index.component';
import {WelcomeComponent}       from './welcome-stepper/welcome/welcome.component';
import {ChooseSecurityLevelComponent} from "./setup/choose-security-level/choose-security-level.component";
import {ChooseConnectionTypeComponent} from "./setup/custom/choose-connection-type/choose-connection-type.component";

const routes: Routes = [
  {path: '', component: SettingsIndexComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'settings', component: SettingsIndexComponent},
  {path: 'setup', component: ChooseSecurityLevelComponent},
  {path: 'setup/security-level', component: ChooseSecurityLevelComponent},
  {path: 'setup/custom/connection-type', component: ChooseConnectionTypeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
