import { Task } from './task.type';

export type IconType =
  | 'icon-star'
  | 'icon-container'
  | 'icon-puzzle'
  | 'icon-project'
  | 'icon-colors'
  | 'icon-hexagon'
  | 'icon-lightning'
  | 'icon-loading';

export type Board = {
  id: number;
  owner_id: number;
  title: string;
  icons: IconType;
  background: string;
  created_at: string;
  updated_at: string;
};

export type BoardRequest = Omit<
  Board,
  'id' | 'owner_id' | 'created_at' | 'updated_at'
> & {
  background?: string;
};

export interface BoardsResponse {
  id: number;
  title: string;
  columns: {
    id: number;
    title: string;
    tasks: Task[];
  }[];
}

export interface GetAllBoardsResponse {
  status: number;
  message: string;
  data: Board[];
}
