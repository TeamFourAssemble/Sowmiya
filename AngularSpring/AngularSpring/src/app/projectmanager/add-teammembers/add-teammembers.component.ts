import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Projecttable } from '../../projecttable';
import { Tmemeber } from '../../tmemeber';
import { Task } from 'zone.js/lib/zone-impl';
import { AdminService } from '../../admin.service';
@Component({
  selector: 'app-add-teammembers',
  templateUrl: './add-teammembers.component.html',
  styleUrls: ['./add-teammembers.component.css']
})
export class AddTeammembersComponent implements OnInit {
  projects: Projecttable[] = [];
  teamMembers: Tmemeber[] = [];
  selectedProject: Projecttable | null = null;
  selectedTeamMember: Tmemeber | null = null;
  projectForm: FormGroup;
  teamMemberForm: FormGroup;
  taskForm: FormGroup;

  constructor(
    private projectService: AdminService,
    private teamMemberService: AdminService,
    private fb: FormBuilder
  ) {
    this.projectForm = this.fb.group({
      projectName: [''],
      description: ['']
    });

    this.teamMemberForm = this.fb.group({
      name: [''],
      email: ['']
    });

    this.taskForm = this.fb.group({
      description: ['']
    });
  }

  ngOnInit(): void {
    this.projectService.getallProjectslist().subscribe(projects => {
      this.projects = projects;
    });

    this.teamMemberService.getTeammemebrs().subscribe(teamMembers => {
      this.teamMembers = teamMembers;
    });
  }

  addProject(): void {
    const project: Projecttable = this.projectForm.value;
    this.projectService.projecttablecreation(project).subscribe(newProject => {
      this.projects.push(newProject);
      this.projectForm.reset();
    });
  }

  selectProject(project: Projecttable): void {
    this.selectedProject = project;
  }

  addTeamMember(): void {
    if (this.selectedProject) {
      const teamMember: Tmemeber = this.teamMemberForm.value;
      this.projectService.addTeamMemberToProject(this.selectedProject.id!, teamMember).subscribe(newTeamMember => {
        this.teamMembers.push(newTeamMember);
        this.teamMemberForm.reset();
        alert('Team member added successfully');
      });
    }
  }

  assignTask(): void {
    if (this.selectedTeamMember) {
      const task: Task = this.taskForm.value;
      this.teamMemberService.assignTaskToTeamMember(this.selectedTeamMember.id!, task).subscribe(newTask => {
        if (!this.selectedTeamMember!.task) {
          this.selectedTeamMember!.task = [];
        }
        this.selectedTeamMember!.task.push(newTask);
        this.taskForm.reset();
        alert('Task assigned successfully');
      });
    }
  }

  addTeamMemberToProjectAndAssignTask(): void {
    if (this.selectedProject && this.selectedTeamMember) {
      const payload = {
        projectDetails: {
          id: this.selectedProject.id,
          projectName: this.selectedProject.projectName,
          description: this.selectedProject.description
        },
        teamMember: this.selectedTeamMember,
        task: this.taskForm.value
      };

      this.projectService.addTeamMemberToProjectAndAssignTask(payload).subscribe(result => {
        console.log('Team member added and task assigned successfully');
        alert('Team member added and task assigned successfully');
        this.teamMemberForm.reset();
        this.taskForm.reset();
      });
    }
  }

  selectTeamMember(teamMember: Tmemeber): void {
    this.selectedTeamMember = teamMember;
  }
}
