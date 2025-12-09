// import { useGetBoardByIdQuery } from '../../redux/api/boardsApi';
import { Column } from '../../types/culumn.type';
import AddColumnBtn from '../btn/AddColumnBtn/AddColumnBtn';
import ColumnList from '../ColumnList/ColumnList';

interface BoardContentProps {
  columns: Column[];
}

const BoardContent = ({ columns }: BoardContentProps) => {
  // const columns = data?.data?.columns ?? [];

  return (
    <div className='h-full w-full'>
      <div className='flex flex-nowrap gap-8.5 w-max h-full'>
        {columns.map(column => (
          <ColumnList key={column.id} column={column} />
        ))}

        <AddColumnBtn />
      </div>
    </div>
  );
};
export default BoardContent;
