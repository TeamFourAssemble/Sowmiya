import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../client.service';
import { Client } from '../client.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {
  clientForm: FormGroup;
  clientId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private clientService: ClientService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.clientForm = this.fb.group({
      projectName: ['', Validators.required],
      projectDescription: [''],
      projectDeadline: ['']
    });
  }

  ngOnInit(): void {
    this.clientId = this.route.snapshot.params['id'] ? +this.route.snapshot.params['id'] : null;
    if (this.clientId) {
      this.clientService.getClient(this.clientId).subscribe((client: Client) => {
        this.clientForm.patchValue(client);
      });
    }
  }

  onSubmit(): void {
    if (this.clientForm.valid) {
      const client: Client = this.clientForm.value;
      if (this.clientId) {
        client.id = this.clientId;
        this.clientService.updateClient(client).subscribe(() => {
          this.router.navigate(['/clients']);
        });
      } else {
        this.clientService.addClient(client).subscribe(() => {
          this.router.navigate(['/clients']);
        });
      }
    }
  }

  cancel(): void {
    this.router.navigate(['/clients']);
  }
}
