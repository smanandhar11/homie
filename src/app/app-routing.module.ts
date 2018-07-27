import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PassComponent} from './components/pass/pass.component';
import {CheckComponent} from './components/check/check.component';
import {CustomComponent} from './components/custom/custom.component';
import {PnfComponent} from './components/pnf/pnf.component';


const routes: Routes = [
  {path: 'password', component: PassComponent},
  {path: 'checklist', component: CheckComponent},
  {path: 'customize', component: CustomComponent},
  // pass in a the value of the default tag that could be the custom edit
  {path: '', redirectTo: '/password', pathMatch: 'full'},
  {path: '**', component: PnfComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
