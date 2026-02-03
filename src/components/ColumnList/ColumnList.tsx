import { Column } from '../../types/culumn.type';
import AddColumnBtn from '../btn/AddColumnBtn/AddColumnBtn';
import ColumnListItem from '../ColumnListItem/ColumnListItem';

interface BoardContentProps {
  columns: Column[];
  boardId: number;
}

const ColumnList = ({ columns, boardId }: BoardContentProps) => {
  return (
    <div className='h-full w-full'>
      <div className='flex flex-nowrap gap-8.5 w-max h-full'>
        {columns.map(column => (
          <ColumnListItem key={column.id} column={column} boardId={boardId} />
        ))}

        <AddColumnBtn boardId={boardId} />
      </div>
    </div>
  );
};
export default ColumnList;
