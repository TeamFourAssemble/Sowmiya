import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AloginComponent } from './alogin/alogin.component';
import { FormsModule } from '@angular/forms';
import { AdhomeComponent } from './adhome/adhome.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { PmanagerComponent } from './pmanager/pmanager.component';
import { TmemberComponent } from './tmember/tmember.component';
import { ProjectlistComponent } from './projectlist/projectlist.component';
import { TeamlistComponent } from './teamlist/teamlist.component';
import { CreateprojectComponent } from './createproject/createproject.component';
import { ProjecttitlelistComponent } from './projecttitlelist/projecttitlelist.component';


@NgModule({
  declarations: [
    AloginComponent,
    AdhomeComponent,
    CreateaccountComponent,
    PmanagerComponent,
    TmemberComponent,
    ProjectlistComponent,
    TeamlistComponent,
    CreateprojectComponent,
    ProjecttitlelistComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
