export interface Ticket {
  id: string;
  title: string;
  content: string;
  requesterName: string;
  priority: 'high' | 'medium' | 'low';
  assignee: string;
  createdAt: Date;
  updatedAt?: Date;
}

export interface CreateTicketForm {
  title: string;
  content: string;
  requesterName: string;
  priority: 'high' | 'medium' | 'low';
  assignee: string;
}

export const PRIORITY_OPTIONS = [
  { label: '高', value: 'high' },
  { label: '中', value: 'medium' },
  { label: '低', value: 'low' },
] as const;
