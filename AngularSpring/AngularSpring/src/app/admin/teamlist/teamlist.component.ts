import { Component, OnInit } from '@angular/core';
import { Tmemeber } from '../../tmemeber'; // Ensure you have the correct path
import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-teamlist',
  templateUrl: './teamlist.component.html',
  styleUrls: ['./teamlist.component.css']
})
export class TeamlistComponent implements OnInit {
  teammembers: Tmemeber[] = [];

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.adminService.getTeammemebrs().subscribe(data => {
      this.teammembers = data;
    });
  }
}
