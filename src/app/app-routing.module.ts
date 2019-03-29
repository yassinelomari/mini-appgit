import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BasicNgComponent} from 'src/app/basic-ng/basic-ng.component';
import {ErrComponent} from 'src/app/core/err/err.component';
import {ComposantsComponent} from './composants/composants.component';

const routes: Routes = [
  {path: '', redirectTo: '/angular-basics', pathMatch: 'full'},
  {path: 'angular-basics', component: ComposantsComponent},
  {path: '**', component: ErrComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
