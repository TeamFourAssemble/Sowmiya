import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectmanagerRoutingModule } from './projectmanager-routing.module';
import { HomeComponent } from './home/home.component';
import { ClientinfoComponent } from './clientinfo/clientinfo.component';
import { TeammemberslistComponent } from './teammemberslist/teammemberslist.component';
import { FormsModule } from '@angular/forms';
import { CreateprojectprojectmanagerComponent } from './createprojectprojectmanager/createproject.component';
import { projecctsslistComponent } from './projecctsslist/projecctsslist.component';
import { AddTeammembersComponent } from './add-teammembers/add-teammembers.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    ClientinfoComponent,
    TeammemberslistComponent,
    CreateprojectprojectmanagerComponent,
    projecctsslistComponent,
    AddTeammembersComponent
  ],
  imports: [
    CommonModule,
    ProjectmanagerRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProjectmanagerModule { }
