import { Column } from '../../types/culumn.type';
import AddColumnBtn from '../btn/AddColumnBtn/AddColumnBtn';
import ColumnList from '../ColumnList/ColumnList';

interface BoardContentProps {
  columns: Column[];
  boardId: number;
}

const BoardContent = ({ columns, boardId }: BoardContentProps) => {
  return (
    <div className='h-full w-full'>
      <div className='flex flex-nowrap gap-8.5 w-max h-full'>
        {columns.map(column => (
          <ColumnList key={column.id} column={column} />
        ))}

        <AddColumnBtn boardId={boardId} />
      </div>
    </div>
  );
};
export default BoardContent;
