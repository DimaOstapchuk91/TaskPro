import { Column } from './culumn.type';

export type IconType =
  | 'icon-star'
  | 'icon-container'
  | 'icon-puzzle'
  | 'icon-project'
  | 'icon-colors'
  | 'icon-hexagon'
  | 'icon-lightning'
  | 'icon-loading';

interface ImageVariant {
  filename: string;
  id: string;
  url: string;
}

export interface Background {
  name: string;
  mob: ImageVariant;
  tab: ImageVariant;
  desk: ImageVariant;
  thumb: ImageVariant;
}

export type Board = {
  id: number;
  owner_id: number;
  title: string;
  icon: IconType;
  background: Background | null;
  created_at: string;
  updated_at: string;
};

export type BoardRequest = Omit<
  Board,
  'id' | 'owner_id' | 'created_at' | 'updated_at'
> & {
  background?: Background | null;
};

export interface BoardsResponse {
  data: { id: number; title: string; columns: Column[] };
  status: number;
  message: string;
}

export interface GetAllBoardsResponse {
  status: number;
  message: string;
  data: Board[];
}
