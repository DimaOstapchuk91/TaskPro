import sprite from '../../assets/sprite.svg';
import { mockColumns } from '../../utils/mockData';
import ColumnList from '../ColumnList/ColumnList';

interface BoardContentProps {
  id: string;
}

const BoardContent = ({ id }: BoardContentProps) => {
  console.log(mockColumns);
  return (
    <div>
      <h2 className='text-sm text-text-theme font-medium mb-6.5 -tracking-[0.28px]'>
        Title Board: {id}
      </h2>
      <div className='flex gap-4.5'>
        {mockColumns && (
          <ul>
            {mockColumns
              .filter(item => item.boardId === id)
              .map(item => (
                <ColumnList key={item.id} column={item} />
              ))}
          </ul>
        )}
        <button
          className='group flex items-center justify-center gap-2 w-full max-w-[335px] p-3.5 bg-header rounded-lg'
          type='button'
        >
          <span className='flex justify-center items-center rounded w-7 h-7 bg-brand group-hover:bg-hover transition duration-300'>
            <svg
              width='14'
              height='14'
              className='stroke-text-dark fill-transparent'
            >
              <use href={`${sprite}#icon-plus`}></use>
            </svg>
          </span>

          <p className='text-sm text-text-theme group-hover:text-hover font-medium -tacking-[0.28px] transition duration-300'>
            Add another column
          </p>
        </button>
      </div>
    </div>
  );
};
export default BoardContent;
