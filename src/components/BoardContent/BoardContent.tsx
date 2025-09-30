import { mockColumns } from '../../utils/mockData';
import AddColumnBtn from '../btn/AddColumnBtn/AddColumnBtn';
import ColumnList from '../ColumnList/ColumnList';

interface BoardContentProps {
  id: string;
}

const BoardContent = ({ id }: BoardContentProps) => {
  console.log(mockColumns);
  return (
    <div className='h-full w-full'>
      <div className='flex flex-nowrap gap-8.5 w-max h-full'>
        {mockColumns
          .filter(item => item.boardId === id)
          .map(item => (
            <ColumnList key={item.id} column={item} />
          ))}

        <AddColumnBtn />
      </div>
    </div>
  );
};
export default BoardContent;
