export interface ITicket {
  id?: string;
  title: string;
  description: string;
}

export class TicketStore {
  tickets: ITicket[] = [];
}
