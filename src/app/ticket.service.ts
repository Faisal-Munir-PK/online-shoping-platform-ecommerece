import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TicketStore, type ITicket } from './Interfaces';
import { ToastrService } from 'ngx-toastr';
import { Request } from './Request';

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  constructor(private toastr: ToastrService, private request: Request) {}

  private TicketStore: TicketStore = new TicketStore();
  async getTickets(): Promise<ITicket[]> {
    const data = await this.request.get(`tickets`);
    return await this.filterTickets(data.data);
  }
  async addTicket(ticket: ITicket): Promise<void> {
    const response = await this.request.post(`tickets`, ticket);
    return response.data;
  }
  removeTicket(ticket: ITicket): void {
    const index = this.TicketStore.tickets.indexOf(ticket);
    if (index !== -1) this.TicketStore.tickets.splice(index, 1);
  }

  filterTickets(tickets: any) {
    let updatedTickets: ITicket[] = [];

    tickets.data.forEach((ticket: any) => {
      const obj: ITicket = {
        id: ticket._id,
        title: ticket.title,
        description: ticket.description,
      };

      updatedTickets.push(obj);
    });

    return updatedTickets;
  }
}
