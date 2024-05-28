import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { Client } from '../client.model';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  clients: Client[] = [];

  constructor(private clientService: ClientService) {}

  ngOnInit(): void {
    this.fetchClients();
  }

  fetchClients(): void {
    this.clientService.getClients().subscribe((data: Client[]) => {
      this.clients = data;
    });
  }

  deleteClient(id: number): void {
    this.clientService.deleteClient(id).subscribe(() => {
      this.fetchClients();
    });
  }
}
