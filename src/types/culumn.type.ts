import { Task } from './task.type';

export interface Column {
  id: number;
  board_id: number;
  title: string;
  tasks?: Task[];
  created_at: string;
  updated_at: string;
}

export interface ColumnRequest {
  status: number;
  message: string;
  data: Column;
}
