import {NgModule}               from '@angular/core';
import {RouterModule, Routes}   from '@angular/router';
import {SettingsIndexComponent} from './settings/settings-index/settings-index.component';

const routes: Routes = [
  {path: 'settings', component: SettingsIndexComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
