export interface Column {
  id: number;
  board_id: number;
  title: string;
  created_at: string;
  updated_at: string;
}

export type ColumnRequest = Omit<
  Column,
  'id' | 'board_id' | 'created_at' | 'updated_at'
>;
