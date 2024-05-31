import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Admin } from './admin'; // Assuming you have an Admin interface/model
import { ProjectManager } from './project-manager';
import { Tmemeber } from './tmemeber';
import { Project } from './project';
import { Projecttable } from './projecttable';
import { Task } from 'zone.js/lib/zone-impl';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private selectedList: string="";
  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  registerAdmin(admin: Admin): Observable<Admin> {
    return this.http.post<Admin>(`${this.apiUrl}/admin/register`, admin);
  }


  login(email: string, password: string): Observable<{ role: string }> {
    return this.http.post<{ role: string }>(`${this.apiUrl}/admin/alogin`, { email, password });
  }

  regsiterProjectManager(pmanager:ProjectManager):Observable<ProjectManager>{
    return this.http.post<ProjectManager>(`${this.apiUrl}/admin/paccount`,pmanager);
  }


  regsiterTeammember(teammemb:Tmemeber):Observable<Tmemeber>{
    return this.http.post<Tmemeber>(`${this.apiUrl}/admin/tmember`,teammemb)
  }

  getPmanagers(): Observable<ProjectManager[]> {
    return this.http.get<ProjectManager[]>(`${this.apiUrl}/admin/listpmanagers`);
  }

  setSelectedList(listType: string) {
    this.selectedList = listType;
  }

  getSelectedList(): string {
    return this.selectedList;
  }


  getTeammemebrs():Observable<Tmemeber[]> {
    return this.http.get<Tmemeber[]>(`${this.apiUrl}/admin/listteam`);
  }

 
  createProject(project:Project):Observable<Project>{
   return this.http.post<Project>(`${this.apiUrl}/admin/projectcreate`,project)
 }


 getallProjects():Observable<Project[]>{
  return this.http.get<Project[]>(`${this.apiUrl}/admin/listprojects`);
 }



//  project creation done by the projectmanager

 projecttablecreation(projectcreation:Projecttable):Observable<Projecttable>{
  return this.http.post<Projecttable>(`${this.apiUrl}/projectmanager/projectcreate`,projectcreation);
 }


//  het all the projects table list to check the project manager

getallProjectslist():Observable<Projecttable[]>{
  return this.http.get<Projecttable[]>(`${this.apiUrl}/projectmanager/projectslist`);
 }



 // addding the team emeber to the project

 addTeamMemberToProject(projectId: number, teamMember: Tmemeber): Observable<Tmemeber> {
  return this.http.post<Tmemeber>(`${this.apiUrl}/projectmanager/${projectId}/team-members`, teamMember);
}

assignTaskToTeamMember(teamMemberId: number, task: Task): Observable<Task> {
  return this.http.post<Task>(`${this.apiUrl}/projectmanager/${teamMemberId}/tasks`, task);
}


addTeamMemberToProjectAndAssignTask(payload: any): Observable<any> {
  return this.http.post<any>(`${this.apiUrl}/projectmanager/task`, payload);
}











  // changePassword(pmanager: Pmanager): Observable<Pmanager> {
  //   return this.http.post<Pmanager>(`${this.apiUrl}/pmanager/reset`, pmanager);
  // }





  
}
