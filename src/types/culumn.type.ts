import { Task } from './task.type';

export interface Column {
  id: number;
  board_id: number;
  title: string;
  tasks: Task[];
}
