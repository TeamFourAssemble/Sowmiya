import { Component } from '@angular/core';

import { AdminService } from '../../admin.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-alogin',
  templateUrl: './alogin.component.html',
  styleUrls: ['./alogin.component.css']
})
export class AloginComponent {
  email: string = '';
  password: string = '';

  constructor(
    private authService: AdminService,
    private router: Router
  ) {}

  login() {
    console.log('User entered email:', this.email);
    console.log('User entered password:', this.password);

    this.authService.login(this.email, this.password).subscribe(
      response => {
        const role = response.role;
        console.log('User role:', role);

        if (role === 'Admin') {
          console.log('Navigating to admin dashboard');
          alert('loged in sucessfull');
          this.router.navigate(['/admin/ahome']);

        } else if (role === 'ProjectManager') {
          console.log('Navigating to project manager dashboard');
          alert('ProjecctManagerLoggedinSucessfull');
          this.router.navigate(['/projectmanager/phome']);
        } else if (role === 'TeamMember') {
          console.log('Navigating to team leader dashboard');
          this.router.navigate(['/team-member/home']);
        } else {
          console.error('Invalid role:', role);
          alert('Invalid role');
        }
      },
      (error: HttpErrorResponse) => {
        console.error('Login failed:', error);
        alert("Login failed");
        this.email = '';
        this.password = '';
        if (error.status) {
          console.log('Status:', error.status);
          console.log('Message:', error.error);
        }
      }
    );
  }
}
