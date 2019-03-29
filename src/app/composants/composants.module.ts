import {NgModule} from '@angular/core';

import {ComposantsComponent} from './composants.component';
import {ListEmployeComponent} from './list-employe/list-employe.component';
import {EmployeComponent} from './list-employe/employe/employe.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {EmployeManagerService} from './employeManager.service';
import {MultiplicationPipe, PuissancePipe} from './pipe-personaliser.pipe';
import {EmployesHeureux, EmployesHeureuxImpur} from './pipe-employes.pipe';
import {ColorDirective} from './color.directive';
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [
    ComposantsComponent,
    ListEmployeComponent,
    EmployeComponent,
    MultiplicationPipe,
    PuissancePipe,
    EmployesHeureux,
    EmployesHeureuxImpur,
    ColorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    EmployeManagerService
  ],
})
export class ComposantsModule { }
