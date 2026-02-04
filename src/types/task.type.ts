export interface Task {
  id: number;
  column_id: number;
  title: string;
  description: string;
  priority: 'High' | 'Medium' | 'Low' | 'Without';
  deadline: string;
  created_at: string;
  updated_at: string;
}
