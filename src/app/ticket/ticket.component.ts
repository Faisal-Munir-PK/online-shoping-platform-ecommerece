import { Component, OnInit } from '@angular/core';
import { IResponse, ITicket } from '../Interfaces';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss'],
})
export class Ticket {
  constructor(private ticketStore: TicketService) {}
  response: any = null;
  ticket: ITicket = {
    title: 'test',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing',
  };
  tickets: ITicket[] = [];
  successMessage: IResponse = {
    status: null,
    message: null,
  };
  async save() {
    await this.ticketStore.addTicket(this.ticket);
  }

  async getTickets() {
    const data = await this.ticketStore.getTickets();
    this.tickets = data;
  }

  ngOnInit(): void {
    this.getTickets();
  }
}
