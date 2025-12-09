import { useGetBoardByIdQuery } from '../../redux/api/boardsApi';
import AddColumnBtn from '../btn/AddColumnBtn/AddColumnBtn';
import ColumnList from '../ColumnList/ColumnList';

interface BoardContentProps {
  id: string;
}

const BoardContent = ({ id }: BoardContentProps) => {
  console.log(Number(id));
  const { data, isLoading, isError } = useGetBoardByIdQuery(Number(id));

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading board</div>;

  const columns = data?.data?.columns ?? [];

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
