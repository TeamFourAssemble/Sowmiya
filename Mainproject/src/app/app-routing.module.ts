import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { AssignTaskComponent } from './assign-task/assign-task.component';
import { ProjectTimelinesComponent } from './project-timelines/project-timelines.component';
import { ClientInformationComponent } from './client-information/client-information.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'project-details', component: ProjectDetailsComponent },
  { path: 'assign-task', component: AssignTaskComponent },
  { path: 'project-timelines', component: ProjectTimelinesComponent },
  { path: 'client-information', component: ClientInformationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
