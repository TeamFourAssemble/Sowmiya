import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AloginComponent } from './alogin/alogin.component';
import { AdhomeComponent } from './adhome/adhome.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { PmanagerComponent } from './pmanager/pmanager.component';
import { TmemberComponent } from './tmember/tmember.component';
import { ProjectlistComponent } from './projectlist/projectlist.component';
import { TeamlistComponent } from './teamlist/teamlist.component';
import { CreateprojectComponent } from './createproject/createproject.component';
import { ProjecttitlelistComponent } from './projecttitlelist/projecttitlelist.component';

const routes: Routes = [
  {
    path:'alogin',
    component:AloginComponent
  },
  {
    path:'ahome',
    component:AdhomeComponent
  },
  {
    path:'createaccount',
    component:CreateaccountComponent
  },
  {
    path:'paccount',
    component:PmanagerComponent
  },
  {
    path:'tmember',
    component:TmemberComponent
  },
  {
    path:'pmanlist',
    component:ProjectlistComponent
  },
  {
    path:'teamlist',
    component:TeamlistComponent
  },
  {
    path:'createproject',
    component:CreateprojectComponent
  },
  {
    path:'listprojects',
    component:ProjecttitlelistComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
