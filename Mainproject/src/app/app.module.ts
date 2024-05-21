import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { AssignTaskComponent } from './assign-task/assign-task.component';
import { ProjectTimelinesComponent } from './project-timelines/project-timelines.component';
import { ClientInformationComponent } from './client-information/client-information.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectDetailsComponent,
    AssignTaskComponent,
    ProjectTimelinesComponent,
    ClientInformationComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
