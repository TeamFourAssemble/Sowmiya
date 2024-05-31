import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ProjectManager } from '../../project-manager';
import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-projectlist',
  templateUrl: './projectlist.component.html',
  styleUrl: './projectlist.component.css'
})
export class ProjectlistComponent implements OnInit {
  pmanagers: ProjectManager[] = [];

  constructor(private pmanagerService: AdminService) {}

  ngOnInit(): void {
    this.pmanagerService.getPmanagers().subscribe(data => {
      this.pmanagers = data;
    });
  }
}