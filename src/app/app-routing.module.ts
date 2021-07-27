import {NgModule}               from '@angular/core';
import {RouterModule, Routes}   from '@angular/router';
import {SettingsIndexComponent} from './settings/settings-index/settings-index.component';
import {WelcomeComponent}       from './welcome-stepper/welcome/welcome.component';

const routes: Routes = [
  {path: '', component: SettingsIndexComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'settings', component: SettingsIndexComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
